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
    setSelectOption,
  } = useBaseStore();

  const closeModal = () => {
    setIsOptionModalOpen(false);
    setInsertTarget(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isOptionModalOpen) closeModal();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOptionModalOpen, setInsertTarget, setIsOptionModalOpen]);

  const handleItemClick = (e, option) => {
    e.stopPropagation();
    setSelectOption(insertTargetOptions[option].value);
    setIsOptionModalOpen(false);
  };

  if (isOptionModalOpen && optionModalInfo?.x)
    return (
      <RibbonMenuModalWrapper onClick={closeModal}>
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
            <RibbonMenuModalItem onClick={(e) => handleItemClick(e, option)}>
              {insertTargetOptions[option].icon && insertTargetOptions[option].icon}
              <div style={{ paddingTop: "2px" }}>{insertTargetOptions[option].name}</div>
            </RibbonMenuModalItem>
          ))}
        </RibbonMenuModal>
      </RibbonMenuModalWrapper>
    );
};

export default RibbonModal;
