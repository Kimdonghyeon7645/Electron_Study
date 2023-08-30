import React from "react";

export const TempDotDraw = React.memo(({ dots }) => {
  return (
    <>
      {dots.map(
        (dot, index) =>
          dot.x && (
            <circle key={index} cx={dot.x} cy={dot.y} r="5" fill="#00000055" />
          )
      )}
    </>
  );
});

export const DotDraw = React.memo(({ dots }) => {
  return (
    <>
      {dots.map(
        (dot, index) =>
          dot.x &&
          dot.isCommon && (
            <circle key={index} cx={dot.x} cy={dot.y} r="4" fill="#000000" />
          )
      )}
    </>
  );
});
