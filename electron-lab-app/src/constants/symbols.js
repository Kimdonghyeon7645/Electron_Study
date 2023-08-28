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
    value: INSERTABLE_OBJ.WIRE,
  },
  PB_A: {
    label: "푸쉬버튼",
    subLabel: "(A접점)",
    icon: <PushBtnA />,
    value: INSERTABLE_OBJ.PB_A,
  },
  PB_B: {
    label: "푸쉬버튼",
    subLabel: "(B접점)",
    icon: <PushBtnB />,
    value: INSERTABLE_OBJ.PB_B,
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
    value: INSERTABLE_OBJ.LIMIT_A,
  },
  LIMIT_B: {
    label: "리밋스위치",
    subLabel: "(B접점)",
    icon: <LimitSwitchB />,
    value: INSERTABLE_OBJ.LIMIT_B,
  },
  RELAY: {
    label: "릴레이",
    icon: (
      <CircularSymbol>
        <span>R</span>
      </CircularSymbol>
    ),
    value: INSERTABLE_OBJ.RELAY,
  },
  R_CONTACT_A: {
    label: "릴레이접점",
    subLabel: "(A접점)",
    icon: <RelayAContact />,
    value: INSERTABLE_OBJ.R_CONTACT_A,
  },
  R_CONTACT_B: {
    label: "릴레이접점",
    subLabel: "(B접점)",
    icon: <RelayBContact />,
    value: INSERTABLE_OBJ.R_CONTACT_B,
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
  },
  T_CONTACT_ON_DELAY_A: {
    label: "한시동작접점",
    subLabel: "(A접점)",
    icon: <TimerOnDelayAContact />,
    value: INSERTABLE_OBJ.T_CONTACT_ON_DELAY_A,
  },
  T_CONTACT_ON_DELAY_B: {
    label: "한시동작접점",
    subLabel: "(B접점)",
    icon: <TimerOnDelayBContact />,
    value: INSERTABLE_OBJ.T_CONTACT_ON_DELAY_B,
  },
  T_CONTACT_OFF_DELAY_A: {
    label: "한시복귀접점",
    subLabel: "(A접점)",
    icon: <TimerOffDelayAContact />,
    value: INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_A,
  },
  T_CONTACT_OFF_DELAY_B: {
    label: "한시복귀접점",
    subLabel: "(B접점)",
    icon: <TimerOffDelayBContact />,
    value: INSERTABLE_OBJ.T_CONTACT_OFF_DELAY_B,
  },
  LAMP: {
    label: "램프",
    icon: (
      <CircularSymbol>
        <span>L</span>
      </CircularSymbol>
    ),
    value: INSERTABLE_OBJ.LAMP,
  },
};
