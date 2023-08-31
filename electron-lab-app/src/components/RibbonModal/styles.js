import { DisableDrag, SrollBarMini } from "components/common/styles";
import { styled } from "styled-components";

export const RibbonMenuModalWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  overflow: hidden;
`;

export const RibbonMenuModal = styled.div`
  width: 210px;

  position: absolute;
  padding: 8px 8px;

  display: flex;
  flex-wrap: wrap;

  background-color: #f5f5f5;
  border-radius: 8px;
  /* border: #dddddd 1px solid; */
  box-shadow: 1px 1px 8px -1px #00000044;

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
  background-color: ${(props) => (props.active === "true" ? "#cfcfcf" : "")};
  font-weight: ${(props) => (props.active === "true" ? "600" : "")};

  ${DisableDrag}
  border-radius: 6px;
  &:hover {
    font-weight: ${(props) => (props.active === "true" ? "600" : "500")};
    /* background-color: ${(props) => (props.active === "true" ? "#cfcfcf" : "#e7e7e7")}; */
    background-color: ${(props) => (props.active === "true" ? "#cfcfcf" : "#cfcfcf")};
    cursor: pointer;
  }
`;
