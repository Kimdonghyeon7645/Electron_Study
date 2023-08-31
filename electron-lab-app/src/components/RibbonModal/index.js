import useBaseStore from "store";
import { RibbonMenuModal, RibbonMenuModalItem, RibbonMenuModalWrapper } from "./styles";
import { useEffect } from "react";

const RibbonModal = () => {
  const {
    isOptionModalOpen,
    setIsOptionModalOpen,
    insertTargetOptions,
    optionModalInfo,
    setInsertTarget,
    zoomScreen,
  } = useBaseStore();

  useEffect(() => {
    const handleResize = () => {
      if (isOptionModalOpen) {
        setInsertTarget(null);
        setIsOptionModalOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOptionModalOpen, setInsertTarget, setIsOptionModalOpen]);

  if (isOptionModalOpen && optionModalInfo?.x)
    return (
      <RibbonMenuModalWrapper
        onClick={() => {
          setIsOptionModalOpen(false);
          setInsertTarget(null);
        }}
      >
        <RibbonMenuModal
          style={{
            margin: `${optionModalInfo.y}px 0 0 ${
              window.innerWidth > ((optionModalInfo.x + 240) * zoomScreen) / 100
                ? optionModalInfo.x
                : optionModalInfo.x - 165
            }px`,
          }}
        >
          {Object.keys(insertTargetOptions).map((option, index) => (
            <RibbonMenuModalItem>
              {insertTargetOptions[option].icon && insertTargetOptions[option].icon}
              <div style={{ paddingTop: "2px" }}>{insertTargetOptions[option].name}</div>
            </RibbonMenuModalItem>
          ))}
        </RibbonMenuModal>
      </RibbonMenuModalWrapper>
    );
};

export default RibbonModal;
