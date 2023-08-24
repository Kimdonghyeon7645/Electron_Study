import styled, { css } from "styled-components";

const gridLineColor = "#00000010";
const gridLineSize = "0.5px";
const SrollBar = css`
  &::-webkit-scrollbar {
    /* 스크롤바 전체 영역 */
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    /* 스크롤바 막대 */
    background: ${(props) => (props.isDragging ? "#00080052" : "#00080025")};
    border-radius: 10px;
    &:hover {
      background: #00080052;
    }
  }
  &::-webkit-scrollbar-track {
    /* 스크롤바 트랙 영역 */
    background: transparent;
  }
`;

export const RibbonMenu = styled.div`
  width: full;
  height: 120px;
  position: sticky;

  display: flex;
  flex-direction: column;

  background-color: #f5f5f5;
  border-bottom: #dddddd 0.5px solid;
`;

export const RibbonTapSection = styled.div`
  width: full;
  height: 27px;

  display: flex;
`;

export const RibbonTapGroup = styled.div`
  width: full;
  height: full;

  display: flex;
  justify-content: start;
`;

export const RibbonTapElement = styled.div`
  height: full;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2px;
  margin: ${(props) =>
    props.active ? "5px 11px 0 11px" : "2.5px 11px 0 11px"};

  font-size: 14px;
  letter-spacing: -0.2px;
  color: ${(props) => (props.active ? "#333333" : "#333333")};
  font-weight: ${(props) => (props.active ? "700" : "400")};

  border-bottom: ${(props) => (props.active ? "3px solid" : "")};

  &:hover {
    font-weight: ${(props) => (props.active ? "700" : "600")};
    cursor: pointer;
  }
`;

export const RibbonMenuSection = styled.div`
  width: full;

  flex-grow: 1;
  display: flex;
  margin: 0 6px;
`;

export const RibbonMenuElement = styled.div`
  height: full;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  padding-top: 6px;

  font-size: 12px;
  letter-spacing: -0.3px;
  line-height: 12px;
  text-align: center;

  &:hover {
    font-weight: 500;
    cursor: pointer;
  }
`;

export const BoardWrapper = styled.div`
  width: calc(100vw - 2.5px);
  height: calc(100vh - 141px);

  background-color: #ffffff;
  overflow: auto;
  cursor: ${(props) => (props.isDragging ? "grabbing" : "")};

  ${SrollBar}
`;

export const Board = styled.div`
  background-size: 10px, 40px, 10px 10px, 40px 40px;
  background-image: linear-gradient(
      90deg,
      ${gridLineColor} ${gridLineSize},
      transparent ${gridLineSize}
    ),
    linear-gradient(
      90deg,
      ${gridLineColor} ${gridLineSize},
      transparent ${gridLineSize}
    ),
    linear-gradient(
      ${gridLineColor} ${gridLineSize},
      transparent ${gridLineSize}
    ),
    linear-gradient(
      ${gridLineColor} ${gridLineSize},
      transparent ${gridLineSize}
    );
`;

export const StatusBar = styled.div`
  width: full;
  height: 17px;

  margin-top: 3px;

  border-top: #cccccc 0.5px solid;
  background-color: #e8e8e8;
`;

export const CircularSymbol = styled.div`
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 999px;
  border: 2.4px solid;

  & > * {
    padding: 3px 1px 0 0;
    font-size: 15px;
    font-weight: 600;
  }
`;
