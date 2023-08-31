import { useRef, useState } from "react";
import { BoardCanvas, BoardWrapper } from "./styles";
import useBaseStore from "store";
import { INSERTABLE_OBJ, MODE } from "constants/enums";
import { LineDraw, TempLineDraw } from "./Draw/LineDraw";
import { SymbolDraw, TempSymbolDraw } from "./Draw/SymbolDraw";
import { SYMBOLS } from "constants/symbols";
import { DotDraw, TempDotDraw } from "./Draw/DotDraw";
import { TextDraw, TextInputBoxDraw } from "./Draw/TextDraw";

const INSERT_THRESHOLD = 6; // 전선,심볼 삽입시 전선과 인접하는 경우의 보정값
const LINE_DOT_THRESHOLD = 6; // 전선 삽입시 전선의 끝과 인접하는 경우의 보정값
const LINE_MINIMUM_SIZE = 10; // 전선 최소 사이즈 (이보다 작게 작도할 수 없음)

const Board = () => {
  const {
    mode,
    insertTarget,
    wirePoint1,
    setWirePoint1,
    wirePoint2,
    setWirePoint2,
    isFixWirePoint1,
    fixWirePoint1,
    lines,
    insertLine,
    tempSymbol,
    setTempSymbol,
    addSymbol,
    symbols,
    dots,
    inputBox,
    inputBoxWidth,
    setInputBox,
    saveInputBox,
    texts,
    zoomScreen,
    selectOption,
  } = useBaseStore();
  const wrapper = useRef(null);
  const board = useRef(null);
  const [isClicking, setIsClicking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tempDot1, setTempDot1] = useState({});
  const [tempDot2, setTempDot2] = useState({});

  /**
   * 마우스 클릭을 시작했을 때 이벤트 핸들러
   */
  const handleMouseDown = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsClicking(true);
  };

  /**
   * 마우스가 움직였을 때 이벤트 핸들러
   */
  const handleMouseMove = (e) => {
    const wpr = wrapper.current;
    const top = wpr.getBoundingClientRect().top;
    let x = wpr.scrollLeft + e.clientX  * 100 / zoomScreen;
    let y = wpr.scrollTop + e.clientY * 100 / zoomScreen - top;
    let id = -1;

    switch (mode) {
      /** 삽입 모드(MODE.INSERT) */
      case MODE.INSERT:
        /** 전선 선택(INSERTABLE_OBJ.WIRE) */
        switch (insertTarget) {
          case INSERTABLE_OBJ.WIRE:
            for (const line of lines) {
              const isVertical = line.start.x === line.end.x;
              if (
                (isVertical &&
                  line.start.x - INSERT_THRESHOLD <= x &&
                  x <= line.end.x + INSERT_THRESHOLD &&
                  line.start.y - INSERT_THRESHOLD <= y &&
                  y <= line.end.y + INSERT_THRESHOLD) ||
                (!isVertical &&
                  line.start.x - INSERT_THRESHOLD <= x &&
                  x <= line.end.x + INSERT_THRESHOLD &&
                  line.start.y - INSERT_THRESHOLD <= y &&
                  y <= line.end.y + INSERT_THRESHOLD)
              ) {
                x = isVertical
                  ? line.start.x
                  : isFixWirePoint1
                  ? wirePoint1.x
                  : x - LINE_DOT_THRESHOLD < line.start.x
                  ? line.start.x + 0.5
                  : x + LINE_DOT_THRESHOLD > line.end.x
                  ? line.end.x - 0.5
                  : x;
                y = !isVertical
                  ? line.start.y
                  : isFixWirePoint1
                  ? wirePoint1.y
                  : y - LINE_DOT_THRESHOLD < line.start.y
                  ? line.start.y + 0.5
                  : y + LINE_DOT_THRESHOLD > line.end.y
                  ? line.end.y - 0.5
                  : y;
                id = line.id;
                break;
              }
            }

            if (isFixWirePoint1) {
              if (
                Math.abs(x - wirePoint1.x) > LINE_MINIMUM_SIZE ||
                Math.abs(y - wirePoint1.y) > LINE_MINIMUM_SIZE
              ) {
                setWirePoint2({ x: x, y: y });
                setTempDot2(id !== -1 ? { x: x, y: y, line: id } : {});
              }
            } else {
              setWirePoint1({ x: x, y: y });
              setTempDot1(id !== -1 ? { x: x, y: y, line: id } : {});
            }

            break;
          /** 심볼 선택 */
          case INSERTABLE_OBJ.PB_A:
          case INSERTABLE_OBJ.PB_B:
          case INSERTABLE_OBJ.LIMIT_A:
          case INSERTABLE_OBJ.LIMIT_B:
          case INSERTABLE_OBJ.RELAY:
          case INSERTABLE_OBJ.R_CONTACT_A:
          case INSERTABLE_OBJ.R_CONTACT_B:
          case INSERTABLE_OBJ.TIMER:
          case INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_A:
          case INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_B:
          case INSERTABLE_OBJ.T_CONTACT_ON_DELAY_A:
          case INSERTABLE_OBJ.T_CONTACT_ON_DELAY_B:
          case INSERTABLE_OBJ.LAMP:
          case INSERTABLE_OBJ.MOTOR:
          case INSERTABLE_OBJ.MC:
            for (const line of lines) {
              const isVertical = line.start.x === line.end.x;
              if (
                (isVertical &&
                  line.start.x <= x + INSERT_THRESHOLD &&
                  x <= line.end.x + INSERT_THRESHOLD &&
                  line.start.y <= y &&
                  y <= line.end.y) ||
                (!isVertical &&
                  line.start.x <= x &&
                  x <= line.end.x &&
                  line.start.y <= y + INSERT_THRESHOLD &&
                  y <= line.end.y + INSERT_THRESHOLD)
              ) {
                x = isVertical ? line.start.x : x;
                y = !isVertical ? line.start.y : y;
                id = line.id;
                setTempSymbol({
                  type: insertTarget,
                  x: x - (isVertical ? SYMBOLS[insertTarget].offsetX : 0),
                  y: y - (!isVertical ? SYMBOLS[insertTarget].offsetY : 0),
                  isInsertable: true,
                  line: id,
                  isVertical: isVertical,
                  ...selectOption,
                });
                return;
              }
            }
            setTempSymbol({
              type: insertTarget,
              x: x - SYMBOLS[insertTarget].offsetX,
              y: y,
              isInsertable: false,
              ...selectOption,
            });
            break;
          /** 텍스트 선택 */
          case INSERTABLE_OBJ.TEXT:
            break;
          default:
            break;
        }
        break;
      /** 보기 모드(MODE.VIEW) */
      case MODE.VIEW:
        console.log(x, y);
        console.log(mousePosition);
        break;
      default:
        break;
    }
  };

  /**
   * 마우스 클릭을 끝냈을 때 이벤트 핸들러
   */
  const handleMouseUp = (e) => {
    if (!isClicking) return;

    switch (mode) {
      /** 삽입 모드(MODE.INSERT) */
      case MODE.INSERT:
        switch (insertTarget) {
          /** 전선 선택(INSERTABLE_OBJ.WIRE) */
          case INSERTABLE_OBJ.WIRE:
            if (isFixWirePoint1) {
              if (wirePoint2?.x) {
                insertLine([tempDot1, tempDot2]);
                setTempDot1({});
                setTempDot2({});
              }
            } else {
              fixWirePoint1();
            }
            break;
          /** 심볼 선택 */
          case INSERTABLE_OBJ.PB_A:
          case INSERTABLE_OBJ.PB_B:
          case INSERTABLE_OBJ.LIMIT_A:
          case INSERTABLE_OBJ.LIMIT_B:
          case INSERTABLE_OBJ.RELAY:
          case INSERTABLE_OBJ.R_CONTACT_A:
          case INSERTABLE_OBJ.R_CONTACT_B:
          case INSERTABLE_OBJ.TIMER:
          case INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_A:
          case INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_B:
          case INSERTABLE_OBJ.T_CONTACT_ON_DELAY_A:
          case INSERTABLE_OBJ.T_CONTACT_ON_DELAY_B:
          case INSERTABLE_OBJ.LAMP:
          case INSERTABLE_OBJ.MOTOR:
          case INSERTABLE_OBJ.MC:
            if (tempSymbol?.isInsertable) {
              addSymbol();
            }
            break;
          case INSERTABLE_OBJ.TEXT:
            const wpr = wrapper.current;
            const top = wpr.getBoundingClientRect().top;
            let x = wpr.scrollLeft + e.clientX  * 100 / zoomScreen;
            let y = wpr.scrollTop + e.clientY * 100 / zoomScreen - top;

            if (!inputBox?.x) {
              setInputBox({ x: x, y: y, value: "" });
            } else {
              const isInputBoxClick =
                inputBox.x - 2 < x &&
                x < inputBox.x + inputBoxWidth + 5 &&
                inputBox.y - 2 < y &&
                y < inputBox.y + 25;
              if (!isInputBoxClick) {
                saveInputBox();
              }
            }
            break;
          default:
            break;
        }

        break;
      default:
        break;
    }
    setIsClicking(false);
  };

  return (
    <BoardWrapper
      ref={wrapper}
      isdragging={false.toString()}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        height: `calc(100vh * 100 / ${zoomScreen} - 146px)`,
        width: `calc(100vw * 100 / ${zoomScreen} - 2.5px)`,
      }}
    >
      <BoardCanvas
        ref={board}
        style={{ width: 3000, height: 3000, position: "relative" }}
      >
        <svg
          style={{
            height: 3000,
            width: 3000,
            background: "transparent",
            position: "absolute",
          }}
        >
          <TempLineDraw point1={wirePoint1} point2={wirePoint2} />
          <LineDraw lines={lines} />
          <TempDotDraw dots={[tempDot1, tempDot2]} />
          <DotDraw dots={dots} />
        </svg>
        <TempSymbolDraw tempSymbol={tempSymbol} />
        <SymbolDraw symbols={symbols} />
        <TextInputBoxDraw />
        <TextDraw texts={texts} />
      </BoardCanvas>
    </BoardWrapper>
  );
};

export default Board;
