import { SYMBOLS } from "constants/symbols";
import React from "react";

export const TempLineDraw = React.memo(({ point1, point2 }) => {
  if (point1.x && point2.x)
    return (
      <line
        x1={point1.x}
        y1={point1.y}
        x2={point2.x}
        y2={point2.y}
        stroke="#00000055"
        strokeWidth="1.5"
      />
    );
});

export const LineDraw = React.memo(({ lines, editTarget }) => {
  const getFillColor = (id) => id === editTarget ? "#ff0000" : "black";
  console.log(editTarget)

  return (
    <>
      {lines.map((line, index) => {
        const isVertical = line.start.x === line.end.x;
        if (line.symbols?.length > 0) {
          return (
            <React.Fragment key={index}>
              <line
                key={`${index}-first`}
                x1={line.start.x}
                y1={line.start.y}
                x2={isVertical ? line.start.x : line.symbols[0].x + 0.5}
                y2={isVertical ? line.symbols[0].y + 0.5 : line.start.y}
                stroke={getFillColor(line.id)}
                strokeWidth="1.5"
              />
              {line.symbols.slice(1).map((sym, j) => {
                return (
                  <line
                    key={`${index}-${j}`}
                    x1={
                      isVertical
                        ? line.start.x
                        : line.symbols[j].x +
                          SYMBOLS[line.symbols[j].type].height
                    }
                    y1={
                      isVertical
                        ? line.symbols[j].y +
                          SYMBOLS[line.symbols[j].type].height
                        : line.start.y
                    }
                    x2={isVertical ? line.start.x : sym.x}
                    y2={isVertical ? sym.y + 0.5 : line.start.y}
                    stroke={getFillColor(line.id)}
                    strokeWidth="1.5"
                  />
                );
              })}
              <line
                key={`${index}-last`}
                x1={
                  isVertical
                    ? line.start.x
                    : line.symbols[line.symbols.length - 1].x +
                      SYMBOLS[line.symbols[line.symbols.length - 1].type].height
                }
                y1={
                  isVertical
                    ? line.symbols[line.symbols.length - 1].y +
                      SYMBOLS[line.symbols[line.symbols.length - 1].type].height
                    : line.start.y
                }
                x2={line.end.x}
                y2={line.end.y}
                stroke={getFillColor(line.id)}
                strokeWidth="1.5"
              />
            </React.Fragment>
          );
        } else
          return (
            <line
              key={index}
              x1={line.start.x}
              y1={line.start.y}
              x2={line.end.x}
              y2={line.end.y}
              stroke={getFillColor(line.id)}
              strokeWidth="1.5"
            />
          );
      })}
    </>
  );
});
