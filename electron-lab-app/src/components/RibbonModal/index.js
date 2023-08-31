import useBaseStore from "store";
import { RibbonMenuModal, RibbonMenuModalItem } from "./styles";
import { useEffect, useState } from "react";

const RibbonModal = () => {
  const { isOptionModalOpen, insertTargetOptions, optionModalInfo } = useBaseStore();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth)
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isOptionModalOpen && optionModalInfo?.x)
    return (
      <RibbonMenuModal style={{ margin: `${optionModalInfo.y}px 0 0 ${(windowWidth > optionModalInfo.x + 240) ? optionModalInfo.x : optionModalInfo.x - 165}px` }}>
        {Object.keys(insertTargetOptions).map((option, index) => (
          <RibbonMenuModalItem>
            {insertTargetOptions[option].icon && insertTargetOptions[option].icon}
            <div style={{ paddingTop: "2px" }}>{insertTargetOptions[option].name}</div>
          </RibbonMenuModalItem>
        ))}
      </RibbonMenuModal>
    );
};

export default RibbonModal;
