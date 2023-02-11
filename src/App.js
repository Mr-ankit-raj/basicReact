import "./App.css";
import {
  State1,
  State2,
  State3,
  State4,
  Props1,
  Props2,
  InputGet,
} from "./Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputGet />
        <State1 />
        <State2 />
        <State3 />
        <State4 />
        <Props2 item="Sumit" roll="30" />
        <Props1 item="Akki" roll="20" />
      </header>
    </div>
  );
}

export default App;
