import "./App.css";
import {
  State1,
  State2,
  State3,
  State4,
  Props1,
  Props2,
  InputGet,
  InputOnChange,
  HideAndShow,
  Toggle,
  Toggle1,
  FormHandle,
  FormHandle1,
  FormHandle2,
  ConditionalRender,
  ConditionalRender1,
  FormValidation,
  FormValidation1,
  UseEffect1,
  ClickEvent,
  ClickEvent1,
  Clicktoggle,
  ClickHideShow,
  ClickInputGet,
} from "./Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickInputGet />
        <ClickHideShow />
        <Clicktoggle />
        <ClickEvent1 />
        <ClickEvent />
        <UseEffect1 />
        <FormValidation1 />
        <FormValidation />
        <ConditionalRender1 />
        <ConditionalRender />
        <FormHandle2 />
        <FormHandle1 />
        <FormHandle />
        <Toggle1 />
        <Toggle />
        <HideAndShow />
        <InputOnChange />
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
