import { styled } from "styled-components";
import { DisableDrag, SrollBar } from "Styles";

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
  letter-spacing: 0px;
  color: ${(props) => (props.active ? "#333333" : "#333333")};
  font-weight: ${(props) => (props.active ? "700" : "400")};

  border-bottom: ${(props) => (props.active ? "3px solid" : "")};

  &:hover {
    font-weight: ${(props) => (props.active ? "700" : "600")};
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
  overflow-x: auto;
  ${SrollBar}
  width: full;

  flex-grow: 1;
  display: flex;
  margin: 0 5px;
`;

export const RibbonMenuElement = styled.div`
  height: full;
  min-width: 66px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px 0 4px 4px;

  font-size: 12px;
  letter-spacing: -0.1px;
  line-height: 12px;
  text-align: center;
  border-radius: 6px;
  font-weight: ${(props) => (props.active ? "600" : "normal")};
  background-color: ${(props) => (props.active ? "#d3d3d3" : "transparent")};

  &:hover {
    font-weight: ${(props) => (props.active ? "600" : "500")};
    background-color: ${(props) => (props.active ? "#cfcfcf" : "#e7e7e7")};
    cursor: pointer;
  }

  ${DisableDrag}
`;