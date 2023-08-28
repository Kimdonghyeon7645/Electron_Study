import { SYMBOLS } from "constants/symbols";
import React from "react";

const LineDraw = React.memo(({ lines }) => {
  return (
    <>
      {lines.map((line, index) => {
        // console.log(line);
        if (line.symbols?.length > 0) {
          return (
            <>
              <line
                key={`${index}-first`}
                x1={line.start.x}
                y1={line.start.y}
                x2={line.symbols[0].x + SYMBOLS[line.symbols[0].type].offset}
                y2={line.symbols[0].y + 0.5}
                stroke="black"
                strokeWidth="1.5"
              />
              {line.symbols.slice(1).map((sym, j) => {
                return (
                  <line
                    key={`${index}-${j}`}
                    x1={
                      line.symbols[j].x + SYMBOLS[line.symbols[j].type].offset
                    }
                    y1={line.symbols[j].y + 41.5}
                    x2={sym.x + SYMBOLS[sym.type].offset}
                    y2={sym.y + 0.5}
                    stroke="black"
                    strokeWidth="1.5"
                  />
                );
              })}
              <line
                key={`${index}-last`}
                x1={
                  line.symbols[line.symbols.length - 1].x +
                  SYMBOLS[line.symbols[line.symbols.length - 1].type].offset
                }
                y1={line.symbols[line.symbols.length - 1].y + 41.5}
                x2={line.end.x}
                y2={line.end.y}
                stroke="black"
                strokeWidth="1.5"
              />
            </>
          );
        } else
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
    </>
  );
});

export default LineDraw;
