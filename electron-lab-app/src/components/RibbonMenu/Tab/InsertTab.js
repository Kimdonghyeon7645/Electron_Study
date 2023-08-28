import { SYMBOLS } from "constants/symbols";
import { RibbonMenuElement, RibbonMenuSection } from "../styles";
import useBaseStore from "store";

const InsertTab = () => {
  const { insertTarget, setInsertTarget } = useBaseStore();
  return (
    <RibbonMenuSection>
      {Object.values(SYMBOLS).map((ele, index) => (
        <RibbonMenuElement
          key={index}
          active={ele?.value === insertTarget}
          onClick={() => {
            setInsertTarget(ele?.value);
          }}
        >
          {ele.icon && ele.icon}
          <div style={{ marginTop: 6 }}>
            {ele.label && ele.label}
            {ele.subLabel && (
              <>
                <br />
                <small>{ele.subLabel}</small>
              </>
            )}
            <br />
          </div>
        </RibbonMenuElement>
      ))}
    </RibbonMenuSection>
  );
};

export default InsertTab;
