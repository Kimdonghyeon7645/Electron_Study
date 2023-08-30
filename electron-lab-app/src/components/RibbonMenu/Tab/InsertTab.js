import { SYMBOLS } from "constants/symbols";
import {
  RibbonMenuElement,
  RibbonMenuElementLabel,
  RibbonMenuSection,
} from "../styles";
import useBaseStore from "store";

const InsertTab = () => {
  const { insertTarget, setInsertTarget } = useBaseStore();
  return (
    <RibbonMenuSection>
      {Object.values(SYMBOLS).map((ele, index) => (
        <RibbonMenuElement
          key={index}
          active={(ele?.value === insertTarget).toString()}
          onClick={() => {
            setInsertTarget(insertTarget === ele?.value ? null : ele?.value);
          }}
        >
          {ele.icon && ele.icon}
          <RibbonMenuElementLabel>
            {ele.name && ele.name}
            {ele.subLabel && (
              <>
                <br />
                <small>{ele.subLabel}</small>
              </>
            )}
            <br />
          </RibbonMenuElementLabel>
        </RibbonMenuElement>
      ))}
    </RibbonMenuSection>
  );
};

export default InsertTab;
