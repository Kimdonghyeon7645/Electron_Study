import { Body } from "components/common/styles";
import Board from "./components/Board";
import RibbonMenu from "./components/RibbonMenu";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <Body>
      <RibbonMenu />
      <Board />
      <StatusBar />
    </Body>
  );
}

export default App;
