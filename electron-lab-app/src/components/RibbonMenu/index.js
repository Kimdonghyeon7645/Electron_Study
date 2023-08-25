import { MODE } from "../../constants/enums.js";
import useStore from "../../store/index.js";
import EditTab from "./EditTab.js";
import HomeTab from "./HomeTab.js";
import InsertTab from "./InsertTab.js";
import SimulationTab from "./SimulationTab.js";
import ViewTab from "./ViewTab.js";
import {
  RibbonMenuWrapper,
  RibbonTapElement,
  RibbonTapGroup,
  RibbonTapSection,
} from "./styles.js";
import { useState } from "react";

const tabInfo = [
  { title: "홈", component: <HomeTab /> },
  { title: "삽입", component: <InsertTab /> },
  { title: "편집", component: <EditTab /> },
  { title: "보기", component: <ViewTab /> },
  { title: "시뮬레이션", component: <SimulationTab /> },
];

const RibbonMenu = () => {
  const { setMode } = useStore();
  const [tabIndex, setTabIndex] = useState(0);

  const onTabClick = (e, index) => {
    if (index === 1) setMode(MODE.INSERT);
    else if (index === 2) setMode(MODE.EDIT);
    else if (index === 3) setMode(MODE.VIEW);
    else if (index === 4) setMode(MODE.SIMULATION);

    setTabIndex(index);
  };

  return (
    <RibbonMenuWrapper>
      <RibbonTapSection>
        <RibbonTapGroup>
          {tabInfo.map((tab, index) => (
            <RibbonTapElement
              key={index}
              active={tabIndex === index}
              onClick={(e) => onTabClick(e, index)}
            >
              {tab.title}
            </RibbonTapElement>
          ))}
        </RibbonTapGroup>
      </RibbonTapSection>
      {tabInfo[tabIndex].component}
    </RibbonMenuWrapper>
  );
};

export default RibbonMenu;
