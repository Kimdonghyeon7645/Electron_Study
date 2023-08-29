import LimitSwitchA from "assets/symbol/LimitSwitchA";
import LimitSwitchB from "assets/symbol/LimitSwitchB";
import PushBtnA from "assets/symbol/PushBtnA";
import PushBtnB from "assets/symbol/PushBtnB";
import RelayAContact from "assets/symbol/RelayAContact";
import RelayBContact from "assets/symbol/RelayBContact";
import TimerOffDelayAContact from "assets/symbol/TimerOffDelayAContact";
import TimerOffDelayBContact from "assets/symbol/TimerOffDelayBContact";
import TimerOnDelayAContact from "assets/symbol/TimerOnDelayAContact";
import TimerOnDelayBContact from "assets/symbol/TimerOnDelayBContact";
import Wire from "assets/symbol/Wire";
import { INSERTABLE_OBJ } from "./enums";
import { CircularSymbol } from "Styles";

export const SYMBOLS = {
  WIRE: {
    name: "전선",
    label: "WIRE",
    icon: <Wire />,
    value: INSERTABLE_OBJ.WIRE,
    offsetX: 0,
    offsetY: 0,
    height: 41.5,
  },
  PB_A: {
    name: "푸쉬버튼",
    label: "PB-A",
    subLabel: "(A접점)",
    icon: <PushBtnA />,
    getIcon: (fill, isVertical) => (
      <PushBtnA fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.PB_A,
    offsetX: 5.2,
    offsetY: 25.7,
    height: 41.5,
  },
  PB_B: {
    name: "푸쉬버튼",
    label: "PB-B",
    subLabel: "(B접점)",
    icon: <PushBtnB />,
    getIcon: (fill, isVertical) => (
      <PushBtnB fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.PB_B,
    offsetX: 8.5,
    offsetY: 8.2,
    height: 41.5,
  },
  // {
  //   icon: <KnifeSwitchA />,
  //   name: "나이프스위치",
  //   subLabel: "(A접점)",
  // },
  // {
  //   icon: <KnifeSwitchB />,
  //   name: "나이프스위치",
  //   subLabel: "(B접점)",
  // },
  LIMIT_A: {
    name: "리밋스위치",
    label: "LS-A",
    subLabel: "(A접점)",
    icon: <LimitSwitchA />,
    getIcon: (fill, isVertical) => (
      <LimitSwitchA fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.LIMIT_A,
    offsetX: 5.2,
    offsetY: 18,
    height: 41.5,
  },
  LIMIT_B: {
    name: "리밋스위치",
    label: "LS-B",
    subLabel: "(B접점)",
    icon: <LimitSwitchB />,
    getIcon: (fill, isVertical) => (
      <LimitSwitchB fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.LIMIT_B,
    offsetX: 13.5,
    offsetY: 5.2,
    height: 41.5,
  },
  RELAY: {
    name: "릴레이",
    label: "R",
    icon: (
      <CircularSymbol>
        <span>R</span>
      </CircularSymbol>
    ),
    getIcon: (fill, isVertical) => (
      <CircularSymbol fill={fill}>
        <span>R</span>
      </CircularSymbol>
    ),
    value: INSERTABLE_OBJ.RELAY,
    offsetX: 18,
    offsetY: 18,
    height: 36,
  },
  R_CONTACT_A: {
    name: "릴레이접점",
    label: "RX-A",
    subLabel: "(A접점)",
    icon: <RelayAContact />,
    getIcon: (fill, isVertical) => (
      <RelayAContact fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.R_CONTACT_A,
    offsetX: 5,
    offsetY: 12.5,
    height: 41.5,
  },
  R_CONTACT_B: {
    name: "릴레이접점",
    label: "RX-B",
    subLabel: "(B접점)",
    icon: <RelayBContact />,
    getIcon: (fill, isVertical) => (
      <RelayBContact fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.R_CONTACT_B,
    offsetX: 10.7,
    offsetY: 8.5,
    height: 41.5,
  },
  // {
  //   icon: <RelayManualAContact />,
  //   name: "수동복귀접점",
  //   subLabel: "(A접점)",
  // },
  // {
  //   icon: <RelayManualBContact />,
  //   name: "수동복귀접점",
  //   subLabel: "(B접점)",
  // },
  TIMER: {
    name: "타이머",
    label: "T",
    icon: (
      <CircularSymbol>
        <span>T</span>
      </CircularSymbol>
    ),
    getIcon: (fill, isVertical) => (
      <CircularSymbol fill={fill}>
        <span>T</span>
      </CircularSymbol>
    ),
    value: INSERTABLE_OBJ.TIMER,
    offsetX: 18,
    offsetY: 18,
    height: 36,
  },
  T_CONTACT_ON_DELAY_A: {
    name: "한시동작접점",
    label: "TX-A",
    subLabel: "(A접점)",
    icon: <TimerOnDelayAContact />,
    getIcon: (fill, isVertical) => (
      <TimerOnDelayAContact fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.T_CONTACT_ON_DELAY_A,
    offsetX: 5.5,
    offsetY: 21.8,
    height: 41.5,
  },
  T_CONTACT_ON_DELAY_B: {
    name: "한시동작접점",
    label: "TX-B",
    subLabel: "(B접점)",
    icon: <TimerOnDelayBContact />,
    getIcon: (fill, isVertical) => (
      <TimerOnDelayBContact fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.T_CONTACT_ON_DELAY_B,
    offsetX: 8,
    offsetY: 5.8,
    height: 41.5,
  },
  T_CONTACT_OFF_DELAY_A: {
    name: "한시복귀접점",
    label: "TX-A",
    subLabel: "(A접점)",
    icon: <TimerOffDelayAContact />,
    getIcon: (fill, isVertical) => (
      <TimerOffDelayAContact fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_A,
    offsetX: 5.5,
    offsetY: 12.6,
    height: 41.5,
  },
  T_CONTACT_OFF_DELAY_B: {
    name: "한시복귀접점",
    label: "TX-B",
    subLabel: "(B접점)",
    icon: <TimerOffDelayBContact />,
    getIcon: (fill, isVertical) => (
      <TimerOffDelayBContact fill={fill} isVertical={isVertical} />
    ),
    value: INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_B,
    offsetX: 17.2,
    offsetY: 5.1,
    height: 41.5,
  },
  LAMP: {
    name: "램프",
    label: "L",
    icon: (
      <CircularSymbol>
        <span>L</span>
      </CircularSymbol>
    ),
    getIcon: (fill, isVertical) => (
      <CircularSymbol fill={fill}>
        <span>L</span>
      </CircularSymbol>
    ),
    value: INSERTABLE_OBJ.LAMP,
    offsetX: 18,
    offsetY: 18,
    height: 36,
  },
  TEXT: {
    name: "텍스트",
    label: "",
    icon: (
      <div
        style={{
          height: "25px",
          padding: "10px 0 0 0",
          fontSize: "28px",
          fontWeight: "500",
          border: "1px solid #000000",
        }}
      >
        글자
      </div>
    ),
    value: INSERTABLE_OBJ.TEXT,
    offsetX: 0,
    offsetY: 0,
    height: 41.5,
  },
};
