import { CircularWrapper } from "./styles";

const CircularSymbol = ({ label = "", fill = "#000000" }) => (
  <CircularWrapper fill={fill}>
    <span>{label}</span>
  </CircularWrapper>
);

export default CircularSymbol;
