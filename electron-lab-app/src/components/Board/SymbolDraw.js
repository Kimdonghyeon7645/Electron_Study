import PushBtnA from "assets/symbol/PushBtnA";
import PushBtnB from "assets/symbol/PushBtnB";
import { INSERTABLE_OBJ } from "constants/enums";
import React from "react";

const getSymbolSvg = (type, fill = "#000000") => {
  if (type === INSERTABLE_OBJ.PB_A) return <PushBtnA fill={fill} />;
  else if (type === INSERTABLE_OBJ.PB_B) return <PushBtnB fill={fill} />;
  else return <div>(?)</div>;
};

export const TempSymbolDraw = React.memo(({ tempSymbol }) => {
  return (
    <>
      {tempSymbol?.x && (
          <div
            style={{
              position: "absolute",
              margin: `${tempSymbol.y}px 0 0 ${tempSymbol.x}px`,
            }}
          >
            {getSymbolSvg(
              tempSymbol.type,
              tempSymbol.isInsertable ? "#00000099" : "#00000044"
            )}
            {/* <span>PB1</span> */}
          </div>
        )}
    </>
  );
});

export const SymbolDraw = React.memo(({ symbols }) => {
  return (
    <>
      {symbols.map((sym, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                margin: `${sym.y}px 0 0 ${sym.x}px`,
              }}
            >
              {getSymbolSvg(sym.type)}
              <span>PB1</span>
            </div>
          ))}
    </>
  );
});

