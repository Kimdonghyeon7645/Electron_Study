import { DisableDrag, SrollBarMini } from "components/common/styles";
import { styled } from "styled-components";

export const RibbonMenuModal = styled.div`
  /* height: 62px; */
  width: 210px;

  position: absolute;
  margin: 120px 0 0 0;
  padding: 8px 8px;

  display: flex;
  flex-wrap: wrap;

  background-color: #f5f5f5;
  border-radius: 8px;
  border: #dddddd 1px solid;
  box-shadow: 1px 2px 9px -2px #00000033;

  /* overflow-y: scroll; */
  ${SrollBarMini}
`;

export const RibbonMenuModalItem = styled.div`
  width: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4px 0;
  font-size: 12px;

  ${DisableDrag}
  border-radius: 6px;
  &:hover {
    font-weight: ${(props) => (props.active === "true" ? "600" : "500")};
    background-color: ${(props) =>
      props.active === "true" ? "#cfcfcf" : "#e7e7e7"};
    cursor: pointer;
  }
`;
