import Cut from "assets/Cut";
import Eraser from "assets/Eraser";
import Move from "assets/Move";
import ShapeSquare from "assets/ShapeSquare";
import Trash from "assets/Trash";

const {
  RibbonMenuSection,
  RibbonMenuElement,
  RibbonMenuElementLabel,
  RibbonMenuHr,
} = require("../styles");

const EditTab = () => {
  return (
    <RibbonMenuSection>
      <RibbonMenuElement>
        <Move />
        <RibbonMenuElementLabel marginTop="4px">위치이동</RibbonMenuElementLabel>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <ShapeSquare />
        <RibbonMenuElementLabel marginTop="4px">크기/길이조절</RibbonMenuElementLabel>
      </RibbonMenuElement>
      <RibbonMenuHr/>
      <RibbonMenuElement>
        <Cut />
        <RibbonMenuElementLabel marginTop="4px">부분 삭제</RibbonMenuElementLabel>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <Eraser />
        <RibbonMenuElementLabel marginTop="4px">객체 삭제</RibbonMenuElementLabel>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <Trash />
        <RibbonMenuElementLabel marginTop="4px">전체 삭제</RibbonMenuElementLabel>
      </RibbonMenuElement>
      <RibbonMenuHr/>
      <RibbonMenuElement>
        <Trash />
        <RibbonMenuElementLabel marginTop="4px">전체 삭제</RibbonMenuElementLabel>
      </RibbonMenuElement>
    </RibbonMenuSection>
  );
};

export default EditTab;
