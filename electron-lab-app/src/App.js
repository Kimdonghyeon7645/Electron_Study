import "./App.css";
import { Body } from "components/common/styles";
import Board from "./components/Board";
import RibbonMenu from "./components/RibbonMenu";
import StatusBar from "./components/StatusBar";
import RibbonModal from "components/RibbonModal";
import useViewStore from "store/viewStore";

function App() {
  const { zoomScreen } = useViewStore();

  return (
    <Body
      style={{
        height: `calc(100vh * 100 / ${zoomScreen})`,
        width: `calc(100vw * 100 / ${zoomScreen})`,
      }}
    >
      <RibbonMenu />
      <Board />
      <StatusBar />
      <RibbonModal />
    </Body>
  );
}

export default App;
