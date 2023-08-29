import { DisableDrag } from "Styles";
import { styled } from "styled-components";

export const StatusBarWrapper = styled.div`
  width: full;
  /* height: 17px; */

  margin-top: 4px;
  padding: 0 12px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;

  border-top: #cccccc 0.5px solid;
  background-color: #eeeeee;

  font-size: 12.5px;
  letter-spacing: 0px;
  color: #999999;
  ${DisableDrag}
`;

export const StatusBarGroup = styled.div`
  display: flex;
  justify-content: start;
`;


export const Delimiter = styled.div`
  padding: 2px 7px;
  font-size: 11px;
  color: #bbbbbb;
`