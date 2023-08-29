import { INSERTABLE_OBJ, MODE } from "constants/enums";
import useBaseStore from "store";
import { Delimiter, StatusBarGroup, StatusBarWrapper } from "./styles";
import { SYMBOLS } from "constants/symbols";
import FullScreen from "assets/FullScreen";
import { toggleFullScreen } from "helpers/toggleFullScreen";

const StatusBar = () => {
  const { mode, insertTarget } = useBaseStore();

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
        <div>{getModeLabel()}</div>
        {mode === MODE.INSERT && (
          <>
            <Delimiter>|</Delimiter>
            <div>{getTarget()}</div>
          </>
        )}
      </StatusBarGroup>
      <StatusBarGroup>
        <div
          style={{ marginTop: "4px", cursor: "pointer" }}
          onClick={toggleFullScreen}
        >
          <FullScreen fill={"#999999"} />
        </div>
      </StatusBarGroup>
    </StatusBarWrapper>
  );
};

export default StatusBar;
