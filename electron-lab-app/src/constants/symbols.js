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
import CircularSymbol from "components/common/CircularSymbol";

export const SYMBOLS = {
  WIRE: {
    name: "전선",
    icon: <Wire />,
    value: INSERTABLE_OBJ.WIRE,
    offsetX: 0,
    offsetY: 0,
    height: 41.5,
  },
  PB_A: {
    name: "푸쉬버튼",
    subLabel: "(A접점)",
    icon: <PushBtnA />,
    getIcon: (fill, isVertical) => <PushBtnA fill={fill} isVertical={isVertical} />,
    value: INSERTABLE_OBJ.PB_A,
    offsetX: 5.2,
    offsetY: 25.7,
    height: 41.5,
  },
  PB_B: {
    name: "푸쉬버튼",
    subLabel: "(B접점)",
    icon: <PushBtnB />,
    getIcon: (fill, isVertical) => <PushBtnB fill={fill} isVertical={isVertical} />,
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
    subLabel: "(A접점)",
    icon: <LimitSwitchA />,
    getIcon: (fill, isVertical) => <LimitSwitchA fill={fill} isVertical={isVertical} />,
    value: INSERTABLE_OBJ.LIMIT_A,
    offsetX: 5.2,
    offsetY: 18,
    height: 41.5,
  },
  LIMIT_B: {
    name: "리밋스위치",
    subLabel: "(B접점)",
    icon: <LimitSwitchB />,
    getIcon: (fill, isVertical) => <LimitSwitchB fill={fill} isVertical={isVertical} />,
    value: INSERTABLE_OBJ.LIMIT_B,
    offsetX: 13.5,
    offsetY: 5.2,
    height: 41.5,
  },
  R_CONTACT_A: {
    name: "릴레이접점",
    subLabel: "(A접점)",
    icon: <RelayAContact />,
    getIcon: (fill, isVertical) => <RelayAContact fill={fill} isVertical={isVertical} />,
    value: INSERTABLE_OBJ.R_CONTACT_A,
    offsetX: 5,
    offsetY: 12.5,
    height: 41.5,
  },
  R_CONTACT_B: {
    name: "릴레이접점",
    subLabel: "(B접점)",
    icon: <RelayBContact />,
    getIcon: (fill, isVertical) => <RelayBContact fill={fill} isVertical={isVertical} />,
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
  T_CONTACT_ON_DELAY_A: {
    name: "한시동작접점",
    subLabel: "(A접점)",
    icon: <TimerOnDelayAContact />,
    getIcon: (fill, isVertical) => <TimerOnDelayAContact fill={fill} isVertical={isVertical} />,
    value: INSERTABLE_OBJ.T_CONTACT_ON_DELAY_A,
    offsetX: 5.5,
    offsetY: 21.8,
    height: 41.5,
  },
  T_CONTACT_ON_DELAY_B: {
    name: "한시동작접점",
    subLabel: "(B접점)",
    icon: <TimerOnDelayBContact />,
    getIcon: (fill, isVertical) => <TimerOnDelayBContact fill={fill} isVertical={isVertical} />,
    value: INSERTABLE_OBJ.T_CONTACT_ON_DELAY_B,
    offsetX: 8,
    offsetY: 5.8,
    height: 41.5,
  },
  T_CONTACT_OFF_DELAY_A: {
    name: "한시복귀접점",
    subLabel: "(A접점)",
    icon: <TimerOffDelayAContact />,
    getIcon: (fill, isVertical) => <TimerOffDelayAContact fill={fill} isVertical={isVertical} />,
    value: INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_A,
    offsetX: 5.5,
    offsetY: 12.6,
    height: 41.5,
  },
  T_CONTACT_OFF_DELAY_B: {
    name: "한시복귀접점",
    subLabel: "(B접점)",
    icon: <TimerOffDelayBContact />,
    getIcon: (fill, isVertical) => <TimerOffDelayBContact fill={fill} isVertical={isVertical} />,
    value: INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_B,
    offsetX: 17.2,
    offsetY: 5.1,
    height: 41.5,
  },
  RELAY: {
    name: "릴레이",
    icon: <CircularSymbol label="R" />,
    getIcon: (fill, isVertical, label = "R") => <CircularSymbol label={label} fill={fill} />,
    value: INSERTABLE_OBJ.RELAY,
    offsetX: 18,
    offsetY: 18,
    height: 36,
  },
  MC: {
    name: "마그네틱",
    icon: <CircularSymbol label="MC" />,
    getIcon: (fill, isVertical, label = "MC") => <CircularSymbol label={label} fill={fill} />,
    value: INSERTABLE_OBJ.MC,
    offsetX: 18,
    offsetY: 18,
    height: 36,
  },
  TIMER: {
    name: "타이머",
    icon: <CircularSymbol label="T" />,
    getIcon: (fill, isVertical, label = "T") => <CircularSymbol label={label} fill={fill} />,
    value: INSERTABLE_OBJ.TIMER,
    offsetX: 18,
    offsetY: 18,
    height: 36,
  },
  LAMP: {
    name: "램프",
    icon: <CircularSymbol label="L" />,
    getIcon: (fill, isVertical, label = "L") => <CircularSymbol label={label} fill={fill} />,
    value: INSERTABLE_OBJ.LAMP,
    offsetX: 18,
    offsetY: 18,
    height: 36,
    options: [
      { name: "적색", icon: <CircularSymbol label="RL" />, value: { label: "RL" } },
      { name: "녹색", icon: <CircularSymbol label="GL" />, value: { label: "GL" } },
      { name: "황색", icon: <CircularSymbol label="YL" />, value: { label: "YL" } },
      { name: "주황", icon: <CircularSymbol label="OL" />, value: { label: "OL" } },
      { name: "청색", icon: <CircularSymbol label="BL" />, value: { label: "BL" } },
      { name: "백색", icon: <CircularSymbol label="WL" />, value: { label: "WL" } },
      { name: "기본", icon: <CircularSymbol label="L" />, value: { label: "L" } },
    ],
  },
  BASIC: {
    name: "그외 기호",
    icon: <CircularSymbol label="FLS" />,
    getIcon: (fill, isVertical, label = "FLS") => <CircularSymbol label={label} fill={fill} />,
    value: INSERTABLE_OBJ.BASIC,
    offsetX: 18,
    offsetY: 18,
    height: 36,
    options: [
      { name: "플로트스위치", icon: <CircularSymbol label="FLS" />, value: { label: "FLS" } },
      { name: "24TH", icon: <CircularSymbol label="24TH" />, value: { label: "24TH" } },
      { name: "직접입력", icon: <CircularSymbol label="" />, value: { label: "" } },
    ],
  },
  TEXT: {
    name: "텍스트",
    icon: (
      <div
        style={{
          height: "21px",
          padding: "13px 0 0 0",
          fontSize: "28px",
          fontWeight: "400",
          // border: "1px solid #000000",
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
