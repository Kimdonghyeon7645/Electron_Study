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
    label: "전선",
    icon: <Wire />,
    iconFill: (fill) => <Wire fill={fill} />,
    value: INSERTABLE_OBJ.WIRE,
    offset: 0,
    height: 41.5,
  },
  PB_A: {
    label: "푸쉬버튼",
    subLabel: "(A접점)",
    icon: <PushBtnA />,
    iconFill: (fill) => <PushBtnA fill={fill} />,
    value: INSERTABLE_OBJ.PB_A,
    offset: 5.2,
    height: 41.5,
  },
  PB_B: {
    label: "푸쉬버튼",
    subLabel: "(B접점)",
    icon: <PushBtnB />,
    iconFill: (fill) => <PushBtnB fill={fill} />,
    value: INSERTABLE_OBJ.PB_B,
    offset: 8.5,
    height: 41.5,
  },
  // {
  //   icon: <KnifeSwitchA />,
  //   label: "나이프스위치",
  //   subLabel: "(A접점)",
  // },
  // {
  //   icon: <KnifeSwitchB />,
  //   label: "나이프스위치",
  //   subLabel: "(B접점)",
  // },
  LIMIT_A: {
    label: "리밋스위치",
    subLabel: "(A접점)",
    icon: <LimitSwitchA />,
    iconFill: (fill) => <LimitSwitchA fill={fill} />,
    value: INSERTABLE_OBJ.LIMIT_A,
    offset: 0,
    height: 41.5,
  },
  LIMIT_B: {
    label: "리밋스위치",
    subLabel: "(B접점)",
    icon: <LimitSwitchB />,
    iconFill: (fill) => <LimitSwitchB fill={fill} />,
    value: INSERTABLE_OBJ.LIMIT_B,
    offset: 0,
    height: 41.5,
  },
  RELAY: {
    label: "릴레이",
    icon: (
      <CircularSymbol>
        <span>R</span>
      </CircularSymbol>
    ),
    value: INSERTABLE_OBJ.RELAY,
    offset: 18,
    height: 36,
  },
  R_CONTACT_A: {
    label: "릴레이접점",
    subLabel: "(A접점)",
    icon: <RelayAContact />,
    iconFill: (fill) => <RelayAContact fill={fill} />,
    value: INSERTABLE_OBJ.R_CONTACT_A,
    offset: 5,
    height: 41.5,
  },
  R_CONTACT_B: {
    label: "릴레이접점",
    subLabel: "(B접점)",
    icon: <RelayBContact />,
    iconFill: (fill) => <RelayBContact fill={fill} />,
    value: INSERTABLE_OBJ.R_CONTACT_B,
    offset: 10.7,
    height: 41.5,
  },
  // {
  //   icon: <RelayManualAContact />,
  //   label: "수동복귀접점",
  //   subLabel: "(A접점)",
  // },
  // {
  //   icon: <RelayManualBContact />,
  //   label: "수동복귀접점",
  //   subLabel: "(B접점)",
  // },
  TIMER: {
    label: "타이머",
    icon: (
      <CircularSymbol>
        <span>T</span>
      </CircularSymbol>
    ),
    value: INSERTABLE_OBJ.TIMER,
    offset: 16,
    height: 36,
  },
  T_CONTACT_ON_DELAY_A: {
    label: "한시동작접점",
    subLabel: "(A접점)",
    icon: <TimerOnDelayAContact />,
    iconFill: (fill) => <TimerOnDelayAContact fill={fill} />,
    value: INSERTABLE_OBJ.T_CONTACT_ON_DELAY_A,
    offset: 0,
    height: 41.5,
  },
  T_CONTACT_ON_DELAY_B: {
    label: "한시동작접점",
    subLabel: "(B접점)",
    icon: <TimerOnDelayBContact />,
    iconFill: (fill) => <TimerOnDelayBContact fill={fill} />,
    value: INSERTABLE_OBJ.T_CONTACT_ON_DELAY_B,
    offset: 0,
    height: 41.5,
  },
  T_CONTACT_OFF_DELAY_A: {
    label: "한시복귀접점",
    subLabel: "(A접점)",
    icon: <TimerOffDelayAContact />,
    iconFill: (fill) => <TimerOffDelayAContact fill={fill} />,
    value: INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_A,
    offset: 0,
    height: 41.5,
  },
  T_CONTACT_OFF_DELAY_B: {
    label: "한시복귀접점",
    subLabel: "(B접점)",
    icon: <TimerOffDelayBContact />,
    iconFill: (fill) => <TimerOffDelayBContact fill={fill} />,
    value: INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_B,
    offset: 0,
    height: 41.5,
  },
  LAMP: {
    label: "램프",
    icon: (
      <CircularSymbol>
        <span>L</span>
      </CircularSymbol>
    ),
    value: INSERTABLE_OBJ.LAMP,
    offset: 16,
    height: 36,
  },
};
