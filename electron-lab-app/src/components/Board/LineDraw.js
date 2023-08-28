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
                x1={line.start.x}
                y1={line.start.y}
                x2={line.symbols[0].x}
                y2={line.symbols[0].y}
                stroke="black"
                strokeWidth="1.5"
              />
              {/* {line.symbols.map((sym, index) => {
                    return (
                      <line
                        key={index}
                        x1={line.start.x}
                        y1={line.start.y}
                        x2={sym.x}
                        y2={line.end.y}
                        stroke="black"
                        strokeWidth="1.5"
                      />
                    );
                  })} */}
              <line
                x1={line.symbols[0].x}
                y1={line.symbols[0].y + 42}
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
