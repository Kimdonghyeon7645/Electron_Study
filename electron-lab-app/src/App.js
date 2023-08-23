import React, { useState, useRef } from "react";
import { Board, BoardWrapper, RibbonMenu } from "./Styles";

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const contentRef = useRef(null);
  
  const handleMouseDown = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsClicking(true);
  };

  const handleMouseMove = (e) => {
    if (!isClicking) return;

    const deltaX = e.clientX - mousePosition.x;
    const deltaY = e.clientY - mousePosition.y;
    const scrollLeft = contentRef.current.scrollLeft - deltaX;
    const scrollTop = contentRef.current.scrollTop - deltaY;

    contentRef.current.scrollLeft = scrollLeft;
    contentRef.current.scrollTop = scrollTop;

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
      alert(`x: ${mousePosition.x}, y: ${mousePosition.y}`)
    }

    setIsClicking(false);
    setIsDragging(false);
  };

  return (
    <div>
      <RibbonMenu></RibbonMenu>
      <BoardWrapper
        isDragging={isDragging}
        ref={contentRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Board style={{ width: 3000, height: 3000 }}>
        </Board>
      </BoardWrapper>
    </div>
  );
}

export default App;
