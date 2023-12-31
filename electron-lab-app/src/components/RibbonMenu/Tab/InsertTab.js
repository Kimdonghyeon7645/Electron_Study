import { SYMBOLS } from "constants/symbols";
import { RibbonMenuItem, RibbonMenuItemLabel, RibbonMenuSection } from "../styles";
import DownArrow from "assets/DownArrow";
import { useRef } from "react";
import useCommandStore from "store/commandStore";

const InsertTab = () => {
  const {
    insertTarget,
    setInsertTarget,
    setIsOptionModalOpen,
    setInsertTargetOptions,
    setOptionModalInfo,
    selectOption,
  } = useCommandStore();
  const menuRef = useRef();

  const handleItemClick = (target) => {
    setInsertTarget(insertTarget === target?.value && (!target?.options || !selectOption) ? null : target?.value);
    if ((target?.options && insertTarget !== target?.value) || (target?.options && insertTarget === target?.value && selectOption)) {
      setIsOptionModalOpen(true);
      setInsertTargetOptions(target.options);

      const position = document
        .getElementsByClassName(`menu-item-${target.value}`)[0]
        .getBoundingClientRect();
      setOptionModalInfo({ x: position.x, y: position.y + position.height });
    }
  };

  return (
    <RibbonMenuSection ref={menuRef}>
      {Object.values(SYMBOLS).map((ele, index) => (
        <RibbonMenuItem
          key={index}
          className={`menu-item-${ele.value}`}
          active={(ele?.value === insertTarget).toString()}
          onClick={() => handleItemClick(ele)}
          minWidth="63px"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {ele.icon && ele.icon}
            {ele.options && (
              <div style={{ position: "relative", margin: "3px -5px 0 5px" }}>
                <DownArrow />
              </div>
            )}
          </div>
          <RibbonMenuItemLabel>
            {ele.name && ele.name}
            {ele.subLabel && (
              <>
                <br />
                <small>{ele.subLabel}</small>
              </>
            )}
          </RibbonMenuItemLabel>
        </RibbonMenuItem>
      ))}
    </RibbonMenuSection>
  );
};

export default InsertTab;
