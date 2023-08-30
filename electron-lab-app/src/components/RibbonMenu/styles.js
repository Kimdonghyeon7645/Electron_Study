import { DisableDrag, SrollBarMini } from "components/common/styles";
import { styled } from "styled-components";

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
  padding: 0 9px;
  margin: 3px 5px 0 5px;

  font-size: 14px;
  letter-spacing: 0px;
  color: ${(props) => (props.active === "true" ? "#333333" : "#333333")};
  font-weight: ${(props) => (props.active === "true" ? "600" : "400")};

  /* border-bottom: ${(props) =>
    props.active === "true" ? "3px solid" : ""}; */
  background-color: ${(props) => (props.active === "true" ? "#d9d9d9" : "")};
  border-radius: 6px;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }

  ${DisableDrag}
`;

export const RibbonMenuWrapper = styled.div`
  width: full;
  height: 120px;
  position: sticky;

  display: flex;
  flex-direction: column;

  background-color: #f5f5f5;
  border-bottom: #dddddd 0.5px solid;
`;

export const RibbonMenuSection = styled.div`
  width: full;
  height: full;
  overflow-x: auto;
  ${SrollBarMini}

  flex-grow: 1;
  display: flex;
  margin: 0 5px;
`;

export const RibbonMenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const RibbonMenuGroupItem = styled.div`
  flex-grow: 1;
  padding-top: 3px;
  display: flex;
`;

export const RibbonMenuGroupLabel = styled.div`
  font-size: 11px;
  letter-spacing: -0.1px;
  color: #666666;
  ${DisableDrag}
`;

export const RibbonMenuItem = styled.div`
  height: full;
  min-width: ${(props) => (props.minWidth ? props.minWidth : "56px")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px 0 4px 4px;

  font-size: 11.5px;
  letter-spacing: -0.1px;
  line-height: 12px;
  text-align: center;
  border-radius: 6px;
  font-weight: ${(props) => (props.active === "true" ? "600" : "normal")};
  background-color: ${(props) =>
    props.active === "true" ? "#d3d3d3" : "transparent"};

  &:hover {
    font-weight: ${(props) => (props.active === "true" ? "600" : "500")};
    background-color: ${(props) =>
      props.active === "true" ? "#cfcfcf" : "#e7e7e7"};
    cursor: pointer;
  }

  ${DisableDrag}
`;

export const RibbonMenuItemLabel = styled.div`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "6px")};
`;

export const RibbonMenuHr = styled.hr`
  width: 0;

  border: 0;
  border-right: 1.4px solid #dadada;
  margin: 8px 5px 8px 10px;
`;
