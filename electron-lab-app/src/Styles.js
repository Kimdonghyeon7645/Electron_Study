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
  height: 18vh;
  position: sticky;

  background-color: #f5f5f5;
  border-bottom: #dddddd 0.5px solid;
`;

export const BoardWrapper = styled.div`
  width: calc(100vw - 2.5px);
  height: calc(100vh - 18vh - 2.5px);

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
