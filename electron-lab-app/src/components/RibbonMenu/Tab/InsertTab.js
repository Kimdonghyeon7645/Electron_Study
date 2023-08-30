import { SYMBOLS } from "constants/symbols";
import {
  RibbonMenuItem,
  RibbonMenuItemLabel,
  RibbonMenuSection,
} from "../styles";
import useBaseStore from "store";

const InsertTab = () => {
  const { insertTarget, setInsertTarget, setInsertTargetOption } = useBaseStore();

  const handleItemClick = (target) => {
    setInsertTarget(insertTarget === target?.value ? null : target?.value);
  };

  return (
    <RibbonMenuSection>
      {Object.values(SYMBOLS).map((ele, index) => (
        <RibbonMenuItem
          key={index}
          active={(ele?.value === insertTarget).toString()}
          onClick={() => handleItemClick(ele)}
          minWidth="63px"
        >
          {ele.icon && ele.icon}
          <RibbonMenuItemLabel>
            {ele.name && ele.name}
            {ele.subLabel && (
              <>
                <br />
                <small>{ele.subLabel}</small>
              </>
            )}
            <br />
          </RibbonMenuItemLabel>
        </RibbonMenuItem>
      ))}
    </RibbonMenuSection>
  );
};

export default InsertTab;
