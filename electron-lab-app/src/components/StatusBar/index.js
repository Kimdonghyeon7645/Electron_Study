import { INSERTABLE_OBJ, MODE } from "constants/enums";
import useBaseStore from "store";
import { Delimiter, StatusBarWrapper } from "./styles";
import { SYMBOLS } from "constants/symbols";

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
    else if (Object.keys(SYMBOLS).includes(insertTarget)) return `${SYMBOLS[insertTarget].label}${SYMBOLS[insertTarget].subLabel || ""} 선택`
    else if (insertTarget === INSERTABLE_OBJ.TEXT) return "글자 선택";
  };

  return (
    <StatusBarWrapper>
      <div>{getModeLabel()}</div>

      {mode === MODE.INSERT && (
        <>
          <Delimiter>|</Delimiter>
          <div>{getTarget()}</div>
        </>
      )}
    </StatusBarWrapper>
  );
};

export default StatusBar;
