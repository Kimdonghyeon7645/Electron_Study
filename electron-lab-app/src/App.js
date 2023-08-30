import "./App.css";
import { Body } from "components/common/styles";
import Board from "./components/Board";
import RibbonMenu from "./components/RibbonMenu";
import StatusBar from "./components/StatusBar";
import useBaseStore from "store";

function App() {
  const { zoomScreen } = useBaseStore();

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
    </Body>
  );
}

export default App;
