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

const InsertTab = () => {
  return (
    <RibbonMenuSection>
      <RibbonMenuElement>
        <Wire />
        <div style={{ marginTop: 6 }}>
          전선
          <br />
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <PushBtnA />
        <div style={{ marginTop: 6 }}>
          푸쉬버튼
          <br />
          <small>(A접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <PushBtnB />
        <div style={{ marginTop: 6 }}>
          푸쉬버튼
          <br />
          <small>(B접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <KnifeSwitchA />
        <div style={{ marginTop: 6 }}>
          나이프스위치
          <br />
          <small>(A접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <KnifeSwitchB />
        <div style={{ marginTop: 6 }}>
          나이프스위치
          <br />
          <small>(B접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <LimitSwitchA />
        <div style={{ marginTop: 6 }}>
          리밋스위치
          <br />
          <small>(A접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <LimitSwitchB />
        <div style={{ marginTop: 6 }}>
          리밋스위치
          <br />
          <small>(B접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <CircularSymbol>
          <span>R</span>
        </CircularSymbol>
        <div style={{ marginTop: 6 }}>릴레이</div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <RelayAContact />
        <div style={{ marginTop: 6 }}>
          릴레이접점
          <br />
          <small>(A접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <RelayBContact />
        <div style={{ marginTop: 6 }}>
          릴레이접점
          <br />
          <small>(B접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <RelayManualAContact />
        <div style={{ marginTop: 6 }}>
          수동복귀접점
          <br />
          <small>(A접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <RelayManualBContact />
        <div style={{ marginTop: 6 }}>
          수동복귀접점
          <br />
          <small>(B접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <CircularSymbol>
          <span>T</span>
        </CircularSymbol>
        <div style={{ marginTop: 6 }}>타이머</div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <TimerOnDelayAContact />
        <div style={{ marginTop: 6 }}>
          한시동작접점
          <br />
          <small>(A접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <TimerOnDelayBContact />
        <div style={{ marginTop: 6 }}>
          한시동작접점
          <br />
          <small>(B접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <TimerOffDelayAContact />
        <div style={{ marginTop: 6 }}>
          한시복귀접점
          <br />
          <small>(A접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <TimerOffDelayBContact />
        <div style={{ marginTop: 6 }}>
          한시복귀접점
          <br />
          <small>(B접점)</small>
        </div>
      </RibbonMenuElement>
      <RibbonMenuElement>
        <CircularSymbol>
          <span>L</span>
        </CircularSymbol>
        <div style={{ marginTop: 6 }}>램프</div>
      </RibbonMenuElement>
    </RibbonMenuSection>
  );
};

export default InsertTab;
