import { useRef, useState } from "react";
import { BoardCanvas, BoardWrapper } from "./styles";
import useBaseStore from "store";
import { INSERTABLE_OBJ, MODE } from "constants/enums";

const Board = () => {
  /** 1-1 Ref, state 변수 */
  const {
    mode,
    insertTarget,
    wirePoint1,
    setWirePoint1,
    wirePoint2,
    setWirePoint2,
    lines,
    insertLine,
  } = useBaseStore();
  const wrapper = useRef(null);
  const board = useRef(null);

  /** 1-2. 이벤트 상태값(클릭 여부, 드래그 여부, 기존 마우스 위치) */
  const [isClickDragging, setIsClickDragging] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    switch (mode) {
      case MODE.INSERT:
        switch (insertTarget) {
          case INSERTABLE_OBJ.WIRE:
            const wpr = wrapper.current;
            const top = wpr.getBoundingClientRect().top;

            if (wirePoint1.x !== undefined) {
              setWirePoint2({
                x: wpr.scrollLeft + e.clientX,
                y: wpr.scrollTop + e.clientY - top,
              });
            } else {
              // setWirePoint1({
              //   x: wpr.scrollLeft + e.clientX,
              //   y: wpr.scrollTop + e.clientY - top,
              // });
            }
            break;
          default:
            break;
        }
        break;
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
          setIsClickDragging(distanceMoved > 8); // 임계값부터 드래그로 인식
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
      case MODE.INSERT:
        switch (insertTarget) {
          case INSERTABLE_OBJ.WIRE:
            const wpr = wrapper.current;
            const top = wpr.getBoundingClientRect().top;

            if (wirePoint1.x !== undefined) {
              insertLine();
            } else {
              setWirePoint1({
                x: wpr.scrollLeft + e.clientX,
                y: wpr.scrollTop + e.clientY - top,
              });
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
          {lines.map((line, index) => {
            return (
              <line
                key={index}
                x1={line.start.x}
                y1={line.start.y}
                x2={line.end.x}
                y2={line.end.y}
                stroke="black"
                strokeWidth="1.5"
              />
            );
          })}

          {/* 전선 작도전 미리보기 */}
          {wirePoint1.x && wirePoint2.x && (
            <line
              x1={wirePoint1.x}
              y1={wirePoint1.y}
              x2={wirePoint2.x}
              y2={wirePoint2.y}
              stroke="#999999"
              strokeWidth="1.5"
            />
          )}
        </svg>
        {/* <div
            style={{
              position: "absolute",
              margin: "100px 0 0 113px",
            }}
          >
            <PushBtnA />
            <span>PB1</span>
          </div> */}
      </BoardCanvas>
    </BoardWrapper>
  );
};

export default Board;
