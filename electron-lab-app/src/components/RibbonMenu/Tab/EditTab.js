import Cut from "assets/Cut";
import Eraser from "assets/Eraser";
import Move from "assets/Move";
import ShapeSquare from "assets/ShapeSquare";
import Trash from "assets/Trash";
import useBaseStore from "store";

const {
  RibbonMenuSection,
  RibbonMenuItem,
  RibbonMenuItemLabel,
  RibbonMenuHr,
  RibbonMenuGroup,
  RibbonMenuGroupLabel,
  RibbonMenuGroupItem,
} = require("../styles");

const EditTab = () => {
  const { clearCanvas } = useBaseStore();

  return (
    <RibbonMenuSection>
      <RibbonMenuGroup>
        <RibbonMenuGroupItem>
          <RibbonMenuItem>
            <Move />
            <RibbonMenuItemLabel marginTop="4px">위치이동</RibbonMenuItemLabel>
          </RibbonMenuItem>
          <RibbonMenuItem>
            <ShapeSquare />
            <RibbonMenuItemLabel marginTop="4px">
              크기/길이조절
            </RibbonMenuItemLabel>
          </RibbonMenuItem>
        </RibbonMenuGroupItem>
        <RibbonMenuGroupLabel>변환</RibbonMenuGroupLabel>
      </RibbonMenuGroup>
      <RibbonMenuHr />
      <RibbonMenuGroup>
        <RibbonMenuGroupItem>
          <RibbonMenuItem>
            <Cut />
            <RibbonMenuItemLabel marginTop="4px">부분삭제</RibbonMenuItemLabel>
          </RibbonMenuItem>
          <RibbonMenuItem>
            <Eraser />
            <RibbonMenuItemLabel marginTop="4px">객체삭제</RibbonMenuItemLabel>
          </RibbonMenuItem>
          <RibbonMenuItem onClick={() => clearCanvas()}>
            <Trash />
            <RibbonMenuItemLabel marginTop="4px">전체삭제</RibbonMenuItemLabel>
          </RibbonMenuItem>
        </RibbonMenuGroupItem>
        <RibbonMenuGroupLabel>삭제</RibbonMenuGroupLabel>
      </RibbonMenuGroup>
      <RibbonMenuHr />
      <RibbonMenuItem>
        <Trash />
        <RibbonMenuItemLabel marginTop="4px">전체삭제</RibbonMenuItemLabel>
      </RibbonMenuItem>
    </RibbonMenuSection>
  );
};

export default EditTab;
