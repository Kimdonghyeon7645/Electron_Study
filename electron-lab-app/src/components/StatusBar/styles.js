import { DisableDrag } from "Styles";
import { styled } from "styled-components";

export const StatusBarWrapper = styled.div`
  width: full;
  /* height: 17px; */
  
  margin-top: 3px;
  padding: 0 12px;
  flex-grow: 1;
  display: flex;

  border-top: #cccccc 0.5px solid;
  background-color: #eeeeee;
  
  ${DisableDrag}
`;

export const ModeLabel = styled.div`
    font-size: 12.5px;
    letter-spacing: 0px;
    color: #999999;
`;