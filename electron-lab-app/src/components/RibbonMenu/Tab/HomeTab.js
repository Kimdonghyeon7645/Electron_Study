import Folder from "assets/Folder";
import Save from "assets/Save";
import Printer from "assets/Printer";
import { useReactToPrint } from "react-to-print";
import useBaseStore from "store";
import { saveFile } from "helpers/saveFile";
import { useRef } from "react";
import { META_DATA_CHECKSUM } from "constants/metaData";

const { RibbonMenuSection, RibbonMenuItem, RibbonMenuItemLabel } = require("../styles");

const HomeTab = () => {
  const { printInfo, symbols, lines, dots, texts, loadDataFile } = useBaseStore();
  const fileInputRef = useRef(null);
  const handlePrint = useReactToPrint({
    pageStyle: `@media print {
      @page {
        size: ${(printInfo.width ?? 0) + 50}px ${(printInfo.height ?? 0) + 50}px;
        margin: 0 20px 20px 0;
      }
      .canvas {
        max-height: ${printInfo.height ?? 0}px;
        max-width: ${printInfo.width ?? 0}px;
        overflow: hidden;
      }
    }`,
    content: () => printInfo.content?.current,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("[선택한 파일] :", file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const resData = JSON.parse(e.target.result);
      console.log(resData)
      if (resData?.metaData && resData?.metaData?.checksum === META_DATA_CHECKSUM) {
        console.log(resData);
        loadDataFile(resData);
      }
      fileInputRef.current.value = null;
    };
    reader.readAsText(file);
  };

  return (
    <RibbonMenuSection>
      <RibbonMenuItem
        onClick={() => saveFile({ symbols: symbols, lines: lines, dots: dots, texts: texts })}
      >
        <Save />
        <RibbonMenuItemLabel margintop="3px">프로젝트 저장</RibbonMenuItemLabel>
      </RibbonMenuItem>
      <RibbonMenuItem onClick={() => fileInputRef.current.click()}>
        <Folder />
        <RibbonMenuItemLabel margintop="3px">불러오기</RibbonMenuItemLabel>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </RibbonMenuItem>
      {/* <RibbonMenuItem>
        <ImageAdd />
        <RibbonMenuItemLabel margintop="3px">이미지로 저장</RibbonMenuItemLabel>
      </RibbonMenuItem> */}
      <RibbonMenuItem onClick={handlePrint}>
        <Printer />
        <RibbonMenuItemLabel margintop="3px">인쇄</RibbonMenuItemLabel>
      </RibbonMenuItem>
    </RibbonMenuSection>
  );
};

export default HomeTab;
