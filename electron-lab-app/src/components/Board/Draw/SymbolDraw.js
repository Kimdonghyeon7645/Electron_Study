import { SYMBOLS } from "constants/symbols";
import React from "react";

const getSymbolSvg = (type, isVertical = true, fill = "#000000") => {
  if (Object.keys(SYMBOLS).includes(type))
    return SYMBOLS[type].getIcon
      ? SYMBOLS[type].getIcon(fill, isVertical)
      : SYMBOLS[type].icon;
  else return <div>(?)</div>;
};

export const TempSymbolDraw = React.memo(({ tempSymbol }) => {
  return (
    <>
      {tempSymbol?.x && tempSymbol?.x > 0 && tempSymbol?.y > 1 ? (
        <div
          style={{
            position: "absolute",
            margin: `${tempSymbol.y}px 0 0 ${tempSymbol.x}px`,
            display: "flex",
          }}
        >
          {getSymbolSvg(
            tempSymbol.type,
            tempSymbol.isVertical,
            tempSymbol.isInsertable ? "#00000099" : "#00000044"
          )}
          {/* {getSymbolLabel("PB1", tempSymbol.type)} */}
        </div>
      ) : (
        <></>
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
            display: "flex",
          }}
        >
          {getSymbolSvg(sym.type, sym.isVertical)}
        </div>
      ))}
    </>
  );
});
