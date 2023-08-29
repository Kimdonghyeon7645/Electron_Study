import useBaseStore from "store";
import { styled } from "styled-components";

const { RibbonMenuSection } = require("../styles");

const DebugModal = styled.div`
  position: absolute;
  height: 87vh;
  width: 87vw;

  margin: 2vh 2vw;
  padding: 1.5vh 2vw;
  background-color: #333333;
  overflow: auto;

  letter-spacing: 0px;
  color: white;

  font-size: 18px;
  z-index: 100;
`;

const DebugTab = () => {
  const { lines, symbols, dots } = useBaseStore();

  console.log(lines);
  console.log(symbols);
  console.log(dots);

  return (
    <RibbonMenuSection>
      <DebugModal>
        <div style={{ fontSize: "30px", fontWeight: 500 }}>디버그 팝업</div>
        <br/>
        <div>
          lines :{" "} (keys: {lines[0] && Object.keys(lines[0]).map((e) => <span>{e}, </span>)})
          {lines.map((line, index) => (
            <div>
              [{index}] id: {line.id}, start: (x:{line.start.x}, y:
              {line.start.y}), end: (x:{line.end.x}, y:
              {line.end.y}),
              <br/>
              symbols: [ {line.symbols?.map((e,i) => <span>[{i}]: ({e && Object.keys(e).map(el => <span>{el}={e[el]}, </span>)})</span>)}, ],
              <br/>
              dots: [ {line.dots?.map((e,i) => <span>[{i}]: ({e && Object.keys(e).map(el => <span>{el}={e[el].toString()}, </span>)})</span>)}, ]
              <br/>
              <br/>
            </div>
          ))}
        </div>
        <br/>
        <div>
        symbols :{" "} (keys: {symbols[0] && Object.keys(symbols[0]).map((e) => <span>{e}, </span>)})
          {symbols.map((symbol, index) => (
            <div>
              [{index}] id: {symbol.id}, type: {symbol.type},
              x: {symbol.x}, y: {symbol.y}, line: {symbol.line}
            </div>
          ))}
        </div>
        <br/>
        <br/>
        dots :{" "} (keys: {dots[0] && Object.keys(dots[0]).map((e) => <span>{e}, </span>)})
          {dots.map((dot, index) => (
            <div>
              [{index}] id: {dot.id}, isCommon: {dot.isCommon.toString()}, 
              x: {dot.x}, y: {dot.y}, lines: {dot.lines.toString()}
            </div>
          ))}
        <br/>
        {/* <div>tempSymbol : {tempSymbol}</div> */}
      </DebugModal>
    </RibbonMenuSection>
  );
};

export default DebugTab;
