import { MODE } from "constants/enums.js";
import useStore from "store/index.js";
import EditTab from "./Tab/EditTab.js";
import HomeTab from "./Tab/HomeTab.js";
import InsertTab from "./Tab/InsertTab.js";
import SimulationTab from "./Tab/SimulationTab.js";
import ViewTab from "./Tab/ViewTab.js";
import {
  RibbonMenuWrapper,
  RibbonTapElement,
  RibbonTapGroup,
  RibbonTapSection,
} from "./styles.js";
import { useState } from "react";

const tabInfo = [
  { title: "홈", component: <HomeTab />, mode: MODE.EDIT },
  { title: "삽입", component: <InsertTab />, mode: MODE.INSERT },
  { title: "편집", component: <EditTab />, mode: MODE.EDIT },
  { title: "보기", component: <ViewTab />, mode: MODE.VIEW },
  { title: "시뮬레이션", component: <SimulationTab />, mode: MODE.SIMULATION },
];

const RibbonMenu = () => {
  const { setMode } = useStore();
  const [tabIndex, setTabIndex] = useState(0);

  const onTabClick = (index) => {
    setMode(tabInfo[index].mode ?? MODE.EDIT);
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
              onClick={() => onTabClick(index)}
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
