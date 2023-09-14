import FullScreen from "assets/FullScreen";
import ZoomDefault from "assets/ZoomDefault";
import ZoomIn from "assets/ZoomIn";
import ZoomOut from "assets/ZoomOut";
import useViewStore from "store/viewStore";

const {
  RibbonMenuSection,
  RibbonMenuItem,
  RibbonMenuGroup,
  RibbonMenuGroupItem,
  RibbonMenuItemLabel,
  RibbonMenuGroupLabel,
  RibbonMenuHr,
} = require("../styles");

const ViewTab = () => {
  const { isFullScreen, toggleFullScreen, zoomScreen, setZoom } = useViewStore();

  return (
    <RibbonMenuSection>
      <RibbonMenuGroup>
        <RibbonMenuGroupItem>
          <RibbonMenuItem onClick={() => setZoom(zoomScreen + 10)}>
            <ZoomIn />
            <RibbonMenuItemLabel margintop="6px">확대</RibbonMenuItemLabel>
          </RibbonMenuItem>
          <RibbonMenuItem onClick={() => setZoom(zoomScreen - 10)}>
            <ZoomOut />
            <RibbonMenuItemLabel margintop="6px">축소</RibbonMenuItemLabel>
          </RibbonMenuItem>
          <RibbonMenuItem onClick={() => setZoom(100)} style={{ margintop: "1.5px" }}>
            <ZoomDefault />
            <RibbonMenuItemLabel margintop="4px">100% 배율</RibbonMenuItemLabel>
          </RibbonMenuItem>
        </RibbonMenuGroupItem>
        <RibbonMenuGroupLabel>배율</RibbonMenuGroupLabel>
      </RibbonMenuGroup>
      <RibbonMenuHr />
      <RibbonMenuItem onClick={() => toggleFullScreen()}>
        <FullScreen isFullScreen={isFullScreen} size={30} />
        <RibbonMenuItemLabel margintop="4px">전체화면</RibbonMenuItemLabel>
      </RibbonMenuItem>
    </RibbonMenuSection>
  );
};

export default ViewTab;
