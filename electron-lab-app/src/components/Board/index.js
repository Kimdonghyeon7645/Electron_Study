import { useRef, useState } from "react";
import { BoardCanvas, BoardWrapper } from "./styles";
import useBaseStore from "store";
import { INSERTABLE_OBJ, MODE } from "constants/enums";
import LineDraw from "./Draw/LineDraw";
import { SymbolDraw, TempSymbolDraw } from "./Draw/SymbolDraw";
import { SYMBOLS } from "constants/symbols";

const DRAG_THRESHOLD = 8;
const DOT_THRESHOLD = 6;

const Board = () => {
  /** 1-1 Ref, state 변수 */
  const {
    mode,
    insertTarget,
    wirePoint1,
    setWirePoint1,
    wirePoint2,
    setWirePoint2,
    isAddWirePoint1,
    addWirePoint1,
    wirePoint1Dot,
    lines,
    insertLine,
    tempSymbol,
    setTempSymbol,
    addSymbol,
    symbols,
  } = useBaseStore();
  const wrapper = useRef(null);
  const board = useRef(null);

  /** 1-2. 이벤트 상태값(클릭 여부, 드래그 여부, 기존 마우스 위치) */
  const [isClickDragging, setIsClickDragging] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /** 1-3. 임시 삽입가능한 객체 정보 데이터 */
  const [tempDot, setTempDot] = useState({});

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
    let x = wpr.scrollLeft + e.clientX;
    let y = wpr.scrollTop + e.clientY - top;
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
                  line.start.x <= x + DOT_THRESHOLD &&
                  x <= line.end.x + DOT_THRESHOLD &&
                  line.start.y <= y &&
                  y <= line.end.y) ||
                (!isVertical &&
                  line.start.x <= x &&
                  x <= line.end.x &&
                  line.start.y <= y + DOT_THRESHOLD &&
                  y <= line.end.y + DOT_THRESHOLD)
              ) {
                x = isVertical
                  ? line.start.x
                  : isAddWirePoint1
                  ? wirePoint1.x
                  : x;
                y = !isVertical
                  ? line.start.y
                  : isAddWirePoint1
                  ? wirePoint1.y
                  : y;
                id = line.id;
                break;
              }
            }

            setTempDot(id !== -1 ? { x: x, y: y } : {});
            if (isAddWirePoint1) setWirePoint2({ x: x, y: y });
            else setWirePoint1({ x: x, y: y });

            break;
          /** 푸시버튼 선택(INSERTABLE_OBJ.PB_A, INSERTABLE_OBJ.PB_B) */
          case INSERTABLE_OBJ.PB_A:
          case INSERTABLE_OBJ.PB_B:
          case INSERTABLE_OBJ.R_CONTACT_A:
          case INSERTABLE_OBJ.R_CONTACT_B:
          case INSERTABLE_OBJ.RELAY:
          case INSERTABLE_OBJ.LAMP:
            for (const line of lines) {
              const isVertical = line.start.x === line.end.x;
              if (
                (isVertical &&
                  line.start.x <= x + DOT_THRESHOLD &&
                  x <= line.end.x + DOT_THRESHOLD &&
                  line.start.y <= y &&
                  y <= line.end.y) ||
                (!isVertical &&
                  line.start.x <= x &&
                  x <= line.end.x &&
                  line.start.y <= y + DOT_THRESHOLD &&
                  y <= line.end.y + DOT_THRESHOLD)
              ) {
                x = isVertical
                  ? line.start.x
                  : isAddWirePoint1
                  ? wirePoint1.x
                  : x;
                y = !isVertical
                  ? line.start.y
                  : isAddWirePoint1
                  ? wirePoint1.y
                  : y;
                id = line.id;
                setTempSymbol({
                  type: insertTarget,
                  x: x - (isVertical ? SYMBOLS[insertTarget].offsetX : 0),
                  y: y - (!isVertical ? SYMBOLS[insertTarget].offsetY : 0),
                  isInsertable: true,
                  line: id,
                  isVertical: isVertical,
                });
                return;
              }
            }

            setTempSymbol({
              type: insertTarget,
              x: x,
              y: y,
              isInsertable: false,
            });
            break;

          default:
            break;
        }
        break;
      /** 보기 모드(MODE.VIEW) */
      case MODE.VIEW:
        const wpr = wrapper.current;
        const deltaX = e.clientX - mousePosition.x;
        const deltaY = e.clientY - mousePosition.y;
        const scrollLeft = wpr.scrollLeft - deltaX;
        const scrollTop = wpr.scrollTop - deltaY;

        wpr.scrollLeft = scrollLeft;
        wpr.scrollTop = scrollTop;

        if (!isClickDragging) {
          const distanceMoved = Math.sqrt(
            Math.pow(deltaX, 2) + Math.pow(deltaY, 2)
          );
          setIsClickDragging(distanceMoved > DRAG_THRESHOLD);
        } else {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
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
    if (isClickDragging) return;

    switch (mode) {
      /** 삽입 모드(MODE.INSERT) */
      case MODE.INSERT:
        switch (insertTarget) {
          /** 전선 선택(INSERTABLE_OBJ.WIRE) */
          case INSERTABLE_OBJ.WIRE:
            if (isAddWirePoint1) {
              insertLine();
            } else {
              addWirePoint1(tempDot);
              setTempDot({});
            }
            break;
          /** 푸시버튼 선택(INSERTABLE_OBJ.PB_A, INSERTABLE_OBJ.PB_B) */
          case INSERTABLE_OBJ.PB_A:
          case INSERTABLE_OBJ.PB_B:
          case INSERTABLE_OBJ.R_CONTACT_A:
          case INSERTABLE_OBJ.R_CONTACT_B:
          case INSERTABLE_OBJ.RELAY:
          case INSERTABLE_OBJ.LAMP:
            if (tempSymbol?.isInsertable) {
              addSymbol();
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
    setIsClickDragging(false);
  };

  return (
    <BoardWrapper
      ref={wrapper}
      isdragging={isClickDragging}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
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
          <LineDraw lines={lines} />
          {/* 전선 작도전 미리보기 */}
          {wirePoint1.x && wirePoint2.x && (
            <line
              x1={wirePoint1.x}
              y1={wirePoint1.y}
              x2={wirePoint2.x}
              y2={wirePoint2.y}
              stroke="#00000055"
              strokeWidth="1.5"
            />
          )}
          {(tempDot?.x || wirePoint1Dot?.x) &&
            [tempDot, wirePoint1Dot].map(
              (dot, index) =>
                dot.x && (
                  <circle
                    key={index}
                    cx={dot.x}
                    cy={dot.y}
                    r="5"
                    fill="#00000055"
                  />
                )
            )}
        </svg>
        <TempSymbolDraw tempSymbol={tempSymbol} />
        <SymbolDraw symbols={symbols} />
      </BoardCanvas>
    </BoardWrapper>
  );
};

export default Board;
