import styled, { css } from "styled-components";

export const SrollBar = css`
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

export const SrollBarMini = css`
  &::-webkit-scrollbar {
    /* 스크롤바 전체 영역 */
    width: 5px;
    height: 5px;
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

export const DisableDrag = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;
`;

export const Body = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const CircularWrapper = styled.div`
  height: 32px;
  width: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 999px;
  border: 2.4px solid ${(props) => props.fill && props.fill};
  letter-spacing: -0.5px;
  cursor: default;

  font-size: 17px;
  font-weight: 600;
  color: ${(props) => (props.fill ? props.fill : "#000000")};

  & > * {
    padding: 0 0.5px 1.5px 0;
    text-align: center;
  }
`;
