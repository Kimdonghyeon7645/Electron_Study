import Folder from "assets/Folder";
import Save from "assets/Save";
import Printer from "assets/Printer";
import { useReactToPrint } from "react-to-print";
import useBaseStore from "store";

const { RibbonMenuSection, RibbonMenuItem, RibbonMenuItemLabel } = require("../styles");

const HomeTab = () => {
  const { printInfo } = useBaseStore();
  const handlePrint = useReactToPrint({
    pageStyle: `@media print {
      @page {
        size: ${printInfo.width + 100}px ${printInfo.height + 100}px;
        margin: 0 50px 50px 0;
      }
      .canvas {
        max-height: ${printInfo.height}px;
        max-width: ${printInfo.width}px;
        overflow: hidden;
      }
    }`,
    content: () => printInfo.content?.current,
  });

  return (
    <RibbonMenuSection>
      <RibbonMenuItem>
        <Save />
        <RibbonMenuItemLabel marginTop="3px">프로젝트 저장</RibbonMenuItemLabel>
      </RibbonMenuItem>
      <RibbonMenuItem>
        <Folder />
        <RibbonMenuItemLabel marginTop="3px">불러오기</RibbonMenuItemLabel>
      </RibbonMenuItem>
      {/* <RibbonMenuItem>
        <ImageAdd />
        <RibbonMenuItemLabel marginTop="3px">이미지로 저장</RibbonMenuItemLabel>
      </RibbonMenuItem> */}
      <RibbonMenuItem onClick={handlePrint}>
        <Printer />
        <RibbonMenuItemLabel marginTop="3px">인쇄</RibbonMenuItemLabel>
      </RibbonMenuItem>
    </RibbonMenuSection>
  );
};

export default HomeTab;
