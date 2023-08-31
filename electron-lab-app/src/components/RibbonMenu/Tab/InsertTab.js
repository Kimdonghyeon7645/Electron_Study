import { SYMBOLS } from "constants/symbols";
import { RibbonMenuItem, RibbonMenuItemLabel, RibbonMenuSection } from "../styles";
import useBaseStore from "store";
import DownArrow from "assets/DownArrow";

const InsertTab = () => {
  const { insertTarget, setInsertTarget, setIsOptionModalOpen,setInsertTargetOptions, } = useBaseStore();

  const handleItemClick = (target) => {
    setInsertTarget(insertTarget === target?.value ? null : target?.value);
    if (target?.options && insertTarget !== target?.value) {
      setIsOptionModalOpen(true);
      setInsertTargetOptions(target.options);
      console.log(
        document.getElementsByClassName(`menu-item-${target.value}`)[0].getBoundingClientRect()
      );
    }
  };

  return (
    <RibbonMenuSection>
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
