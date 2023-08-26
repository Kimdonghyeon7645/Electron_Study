import { CircularSymbol } from "Styles.js";
import Wire from "assets/symbol/Wire.js";
import PushBtnA from "assets/symbol/PushBtnA.js";
import PushBtnB from "assets/symbol/PushBtnB.js";
import KnifeSwitchA from "assets/symbol/KnifeSwitchA.js";
import KnifeSwitchB from "assets/symbol/KnifeSwitchB.js";
import LimitSwitchA from "assets/symbol/LimitSwitchA.js";
import LimitSwitchB from "assets/symbol/LimitSwitchB.js";
import RelayManualAContact from "assets/symbol/RelayManualAContact.js";
import RelayManualBContact from "assets/symbol/RelayManualBContact.js";
import TimerOffDelayBContact from "assets/symbol/TimerOffDelayBContact.js";
import TimerOffDelayAContact from "assets/symbol/TimerOffDelayAContact.js";
import TimerOnDelayBContact from "assets/symbol/TimerOnDelayBContact.js";
import TimerOnDelayAContact from "assets/symbol/TimerOnDelayAContact.js";
import RelayBContact from "assets/symbol/RelayBContact.js";
import RelayAContact from "assets/symbol/RelayAContact.js";
import { RibbonMenuElement, RibbonMenuSection } from "../styles";

const MenuElementInfo = [
  {
    icon: <Wire />,
    label: "전선",
  },
  {
    icon: <PushBtnA />,
    label: "푸쉬버튼",
    subLabel: "(A접점)",
  },
  {
    icon: <PushBtnB />,
    label: "푸쉬버튼",
    subLabel: "(B접점)",
  },
  {
    icon: <KnifeSwitchA />,
    label: "나이프스위치",
    subLabel: "(A접점)",
  },
  {
    icon: <KnifeSwitchB />,
    label: "나이프스위치",
    subLabel: "(B접점)",
  },
  {
    icon: <LimitSwitchA />,
    label: "리밋스위치",
    subLabel: "(A접점)",
  },
  {
    icon: <LimitSwitchB />,
    label: "리밋스위치",
    subLabel: "(B접점)",
  },
  {
    icon: (
      <CircularSymbol>
        <span>R</span>
      </CircularSymbol>
    ),
    label: "릴레이",
  },
  {
    icon: <RelayAContact />,
    label: "릴레이접점",
    subLabel: "(A접점)",
  },
  {
    icon: <RelayBContact />,
    label: "릴레이접점",
    subLabel: "(B접점)",
  },
  {
    icon: <RelayManualAContact />,
    label: "수동복귀접점",
    subLabel: "(A접점)",
  },
  {
    icon: <RelayManualBContact />,
    label: "수동복귀접점",
    subLabel: "(B접점)",
  },
  {
    icon: (
      <CircularSymbol>
        <span>T</span>
      </CircularSymbol>
    ),
    label: "타이머",
  },
  {
    icon: <TimerOnDelayAContact />,
    label: "한시동작접점",
    subLabel: "(A접점)",
  },
  {
    icon: <TimerOnDelayBContact />,
    label: "한시동작접점",
    subLabel: "(B접점)",
  },
  {
    icon: <TimerOffDelayAContact />,
    label: "한시복귀접점",
    subLabel: "(A접점)",
  },
  {
    icon: <TimerOffDelayBContact />,
    label: "한시복귀접점",
    subLabel: "(B접점)",
  },
  {
    icon: (
      <CircularSymbol>
        <span>L</span>
      </CircularSymbol>
    ),
    label: "램프",
  },
];

const InsertTab = () => {
  return (
    <RibbonMenuSection>
      {MenuElementInfo.map((ele, index) => (
        <RibbonMenuElement>
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
