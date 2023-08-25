import { MODE } from "../../constants/enums";
import useStore from "../../store";
import { ModeLabel, StatusBarWrapper } from "./styles";

const StatusBar = () => {
  const { mode } = useStore();

  const getModeLabel = () => {
    if (mode === MODE.INSERT) return "삽입 모드";
    else if (mode === MODE.EDIT) return "편집 모드";
    else if (mode === MODE.VIEW) return "보기 모드";
    else if (mode === MODE.SIMULATION) return "시뮬레이션 모드";
    else return "모드 정보를 불러오는 중...";
  };

  return (
    <StatusBarWrapper>
      <ModeLabel>{getModeLabel()}</ModeLabel>
    </StatusBarWrapper>
  );
};

export default StatusBar;
