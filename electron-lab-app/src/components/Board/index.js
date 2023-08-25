import { useEffect, useRef, useState } from "react";
import { BoardCanvas, BoardWrapper } from "./styles";

const Board = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prePoints, setPrePoints] = useState({ active: false, x: 0, y: 0 });
  const [points, setPoints] = useState([]);
  const [lines, setLines] = useState([]);
  const wrapper = useRef(null);
  const board = useRef(null);

  const handleMouseDown = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsClicking(true);
  };

  const handleMouseMove = (e) => {
    if (!isClicking) {
      if (points.length === 1) {
        console.log("hhh");
        const wpr = wrapper.current;
        const top = wpr.getBoundingClientRect().top;
        setPrePoints({
          active: true,
          x: wpr.scrollLeft + e.clientX,
          y: wpr.scrollTop + e.clientY - top,
        });
      }
      return;
    }

    const wpr = wrapper.current;
    const deltaX = e.clientX - mousePosition.x;
    const deltaY = e.clientY - mousePosition.y;
    const scrollLeft = wpr.scrollLeft - deltaX;
    const scrollTop = wpr.scrollTop - deltaY;

    wpr.scrollLeft = scrollLeft;
    wpr.scrollTop = scrollTop;

    if (!isDragging) {
      const distanceMoved = Math.sqrt(
        Math.pow(deltaX, 2) + Math.pow(deltaY, 2)
      );
      setIsDragging(distanceMoved > 8); // 임계값부터 드래그로 인식
    } else {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = (e) => {
    if (!isClicking) return;
    if (!isDragging) {
      const wpr = wrapper.current;
      const top = wpr.getBoundingClientRect().top;
      if (points.length === 1) {
        setPoints((v) => [
          ...v,
          { x: wpr.scrollLeft + e.clientX, y: wpr.scrollTop + e.clientY - top },
        ]);
        setPrePoints({ active: false, x: 0, y: 0 });
      } else {
        setPoints([
          { x: wpr.scrollLeft + e.clientX, y: wpr.scrollTop + e.clientY - top },
        ]);
      }
    }
    setIsClicking(false);
    setIsDragging(false);
  };

  useEffect(() => {
    if (points.length !== 2) return;
    setLines((v) =>
      v.concat({
        start: { x: points[0].x, y: points[0].y },
        end: { x: points[1].x, y: points[1].y },
      })
    );
  }, [points]);

  return (
    <BoardWrapper
      ref={wrapper}
      isDragging={isDragging}
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
            console.log(line);
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
          {points.length === 1 && prePoints.active && (
            <line
              x1={points[0].x}
              y1={points[0].y}
              x2={prePoints.x}
              y2={prePoints.y}
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
