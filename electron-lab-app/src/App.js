import React, { useState, useRef, useEffect } from "react";
import { Board, BoardWrapper, RibbonMenu } from "./Styles";

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [points, setPoints] = useState([]);
  const wrapper = useRef(null);
  const canvas = useRef(null);

  const handleMouseDown = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsClicking(true);
  };

  const handleMouseMove = (e) => {
    if (!isClicking) return;

    const deltaX = e.clientX - mousePosition.x;
    const deltaY = e.clientY - mousePosition.y;
    const scrollLeft = wrapper.current.scrollLeft - deltaX;
    const scrollTop = wrapper.current.scrollTop - deltaY;

    wrapper.current.scrollLeft = scrollLeft;
    wrapper.current.scrollTop = scrollTop;

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
      // alert(`x: ${wrapper.current.scrollLeft+e.clientX}, y: ${wrapper.current.scrollTop+e.clientY}`);
      if (points.length === 1) {
        setPoints((v) => [
          ...v,
          { x: wpr.scrollLeft + e.clientX, y: wpr.scrollTop + e.clientY - top },
        ]);
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
    if (canvas?.current) {
      const cvs = canvas.current;
      const ctx = cvs.getContext("2d");
      const ratio = 2;
      cvs.width = 3000 * ratio;
      cvs.height = 3000 * ratio;
      ctx.scale(ratio, ratio);
    }
  }, [canvas]);

  useEffect(() => {
    if (points.length !== 2) return;

    const cvs = canvas.current;
    const ctx = cvs.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.strokeStyle = "#7e0000";
    ctx.lineWidth = 0.9;
    ctx.stroke();
    ctx.closePath();
  }, [points]);

  return (
    <div>
      <RibbonMenu></RibbonMenu>
      <BoardWrapper
        ref={wrapper}
        isDragging={isDragging}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Board ref={canvas} style={{ width: 3000, height: 3000 }}></Board>
      </BoardWrapper>
    </div>
  );
}

export default App;
