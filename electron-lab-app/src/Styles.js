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
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #00080052;
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
`;

export const RibbonMenuElement = styled.div`
  font-size: 14px;
  letter-spacing: -0.2px;
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
