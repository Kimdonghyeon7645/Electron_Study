import { INSERTABLE_OBJ, MODE } from "constants/enums";
import useBaseStore from "store";
import {
  Delimiter,
  StatusBarBtnWrapper,
  StatusBarGroup,
  StatusBarWrapper,
} from "./styles";
import { SYMBOLS } from "constants/symbols";
import FullScreen from "assets/FullScreen";
import Plus from "assets/Plus";
import Minus from "assets/Minus";

const StatusBar = () => {
  const {
    mode,
    insertTarget,
    isFullScreen,
    toggleFullScreen,
    zoomScreen,
    setZoom,
  } = useBaseStore();

  const getModeLabel = () => {
    if (mode === MODE.INSERT) return "삽입 모드";
    else if (mode === MODE.EDIT) return "편집 모드";
    else if (mode === MODE.VIEW) return "보기 모드";
    else if (mode === MODE.SIMULATION) return "시뮬레이션 모드";
    else return "모드 정보를 불러오는 중...";
  };

  const getTarget = () => {
    if (insertTarget === null) return "선택한 요소 없음";
    else if (Object.keys(SYMBOLS).includes(insertTarget))
      return `${SYMBOLS[insertTarget].name}${
        SYMBOLS[insertTarget].subLabel || ""
      } 선택`;
    else if (insertTarget === INSERTABLE_OBJ.TEXT) return "글자 선택";
  };

  return (
    <StatusBarWrapper>
      <StatusBarGroup>
        <div style={{paddingBottom: "2px"}}>{getModeLabel()}</div>
        {mode === MODE.INSERT && (
          <>
            <Delimiter style={{paddingBottom: "4px"}}>|</Delimiter>
            <div style={{paddingBottom: "2px"}}>{getTarget()}</div>
          </>
        )}
      </StatusBarGroup>
      <StatusBarGroup>
        <StatusBarBtnWrapper onClick={() => setZoom(zoomScreen - 10)}>
          <Minus fill={"#a8a8a8"} />
        </StatusBarBtnWrapper>
        <div style={{ padding: "0 0 1px 6px" }}>{zoomScreen}%</div>
        <StatusBarBtnWrapper onClick={() => setZoom(zoomScreen + 10)}>
          <Plus fill={"#a8a8a8"} />
        </StatusBarBtnWrapper>
        <StatusBarBtnWrapper onClick={toggleFullScreen}>
          <FullScreen fill={"#a8a8a8"} isFullScreen={isFullScreen} />
        </StatusBarBtnWrapper>
      </StatusBarGroup>
    </StatusBarWrapper>
  );
};

export default StatusBar;
