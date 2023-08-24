import React, { useState, useRef, useEffect } from "react";
import {
  Board,
  BoardWrapper,
  Body,
  CircularSymbol,
  RibbonMenu,
  RibbonMenuElement,
  RibbonMenuSection,
  RibbonTapElement,
  RibbonTapGroup,
  RibbonTapSection,
  StatusBar,
} from "./Styles";

import Line from "./assets/symbol/Line.tsx";
import PushBtnA from "./assets/symbol/PushBtnA.tsx";
import PushBtnB from "./assets/symbol/PushBtnB.tsx";
import KnifeSwitchA from "./assets/symbol/KnifeSwitchA.tsx";
import KnifeSwitchB from "./assets/symbol/KnifeSwitchB.tsx";
import LimitSwitchA from "./assets/symbol/LimitSwitchA.tsx";
import LimitSwitchB from "./assets/symbol/LimitSwitchB.tsx";
import RelayAContact from "./assets/symbol/RelayAContact.tsx";
import RelayBContact from "./assets/symbol/RelayBContact.tsx";
import RelayManualAContact from "./assets/symbol/RelayManualAContact.tsx";
import RelayManualBContact from "./assets/symbol/RelayManualAContact.tsx";
import TimerOnDelayAContact from "./assets/symbol/TimerOnDelayAContact.tsx";
import TimerOnDelayBContact from "./assets/symbol/TimerOnDelayBContact.tsx";
import TimerOffDelayAContact from "./assets/symbol/TimerOffDelayAContact.tsx";
import TimerOffDelayBContact from "./assets/symbol/TimerOffDelayBContact.tsx";

function App() {
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

  const [tabIndex, setTabIndex] = useState(0);
  const tabInfo = [
    { title: "홈" },
    { title: "삽입" },
    { title: "스타일" },
    { title: "파일" },
    { title: "시뮬레이션" },
  ];

  return (
    <Body>
      <RibbonMenu>
        <RibbonTapSection>
          <RibbonTapGroup>
            {tabInfo.map((tab, index) => (
              <RibbonTapElement
                active={tabIndex === index}
                onClick={() => setTabIndex(index)}
              >
                {tab.title}
              </RibbonTapElement>
            ))}
          </RibbonTapGroup>
        </RibbonTapSection>
        <RibbonMenuSection>
          <RibbonMenuElement>
            <Line />
            <div style={{ marginTop: 6 }}>
              전선
              <br />
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <PushBtnA />
            <div style={{ marginTop: 6 }}>
              푸쉬버튼
              <br />
              <small>(A접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <PushBtnB />
            <div style={{ marginTop: 6 }}>
              푸쉬버튼
              <br />
              <small>(B접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <KnifeSwitchA />
            <div style={{ marginTop: 6 }}>
              나이프스위치
              <br />
              <small>(A접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <KnifeSwitchB />
            <div style={{ marginTop: 6 }}>
              나이프스위치
              <br />
              <small>(B접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <LimitSwitchA />
            <div style={{ marginTop: 6 }}>
              리밋스위치
              <br />
              <small>(A접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <LimitSwitchB />
            <div style={{ marginTop: 6 }}>
              리밋스위치
              <br />
              <small>(B접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <CircularSymbol>
              <span>R</span>
            </CircularSymbol>
            <div style={{ marginTop: 6 }}>릴레이</div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <RelayAContact />
            <div style={{ marginTop: 6 }}>
              릴레이접점
              <br />
              <small>(A접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <RelayBContact />
            <div style={{ marginTop: 6 }}>
              릴레이접점
              <br />
              <small>(B접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <RelayManualAContact />
            <div style={{ marginTop: 6 }}>
              수동복귀접점
              <br />
              <small>(A접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <RelayManualBContact />
            <div style={{ marginTop: 6 }}>
              수동복귀접점
              <br />
              <small>(B접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <CircularSymbol>
              <span>T</span>
            </CircularSymbol>
            <div style={{ marginTop: 6 }}>타이머</div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <TimerOnDelayAContact />
            <div style={{ marginTop: 6 }}>
              한시동작접점
              <br />
              <small>(A접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <TimerOnDelayBContact />
            <div style={{ marginTop: 6 }}>
              한시동작접점
              <br />
              <small>(B접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <TimerOffDelayAContact />
            <div style={{ marginTop: 6 }}>
              한시복귀접점
              <br />
              <small>(A접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <TimerOffDelayBContact />
            <div style={{ marginTop: 6 }}>
              한시복귀접점
              <br />
              <small>(B접점)</small>
            </div>
          </RibbonMenuElement>
          <RibbonMenuElement>
            <CircularSymbol>
              <span>L</span>
            </CircularSymbol>
            <div style={{ marginTop: 6 }}>램프</div>
          </RibbonMenuElement>
        </RibbonMenuSection>
      </RibbonMenu>
      <BoardWrapper
        ref={wrapper}
        isDragging={isDragging}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Board
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
        </Board>
      </BoardWrapper>
      <StatusBar></StatusBar>
    </Body>
  );
}

export default App;
