import { styled } from "styled-components";
import { SrollBar } from "Styles";

const gridLineColor = "#00000010";
const gridLineSize = "0.5px";
export const BoardWrapper = styled.div`
  /* flex-grow: 1; */
  width: calc(100vw - 2.5px);
  height: calc(100vh - 146px);

  overflow: auto;
  cursor: ${(props) => (props.isdragging === "true" ? "grabbing" : "")};

  ${SrollBar}
`;

export const BoardCanvas = styled.div`
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