import { DisableDrag } from "Styles";
import { styled } from "styled-components";

export const StatusBarWrapper = styled.div`
  width: full;
  /* height: 17px; */

  margin-top: 3.5px;
  padding: 0 10px 0 12px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;

  border-top: #cccccc 0.5px solid;
  background-color: #eeeeee;

  font-size: 12.5px;
  letter-spacing: 0px;
  color: #a8a8a8;
  ${DisableDrag}
`;

export const StatusBarGroup = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Delimiter = styled.div`
  padding: 1px 7px;
  font-size: 11px;
  color: #b3b3b3;
`;

export const StatusBarBtnWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  margin-left: 6px;

  &:hover {
    background-color: #00000018;
    border-radius: 4px;
  }
`;
