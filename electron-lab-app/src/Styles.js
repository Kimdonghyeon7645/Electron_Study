import './App.css';
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

export const Body = styled.div`
  display: flex;
  flex-direction: column;
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
    padding: 0 0.5px 1.5px 0;
    font-size: 16px;
    font-weight: 600;
  }
`;
