import useBaseStore from "store";
import { RibbonMenuModal, RibbonMenuModalItem } from "./styles";

const RibbonModal = () => {
  const { isOptionModalOpen, insertTargetOptions } = useBaseStore();

  if (isOptionModalOpen)
    return (
      <RibbonMenuModal>
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
