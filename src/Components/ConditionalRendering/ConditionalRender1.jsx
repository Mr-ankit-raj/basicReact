import { useState } from "react";
import State1 from "../StateFun/State1";
import State2 from "../StateFun/State2";
import State3 from "../StateFun/State3";

const ConditionalRender1 = () => {
  const [login] = useState(2);
  return (
    <div className="mainCard">
      {login === 1 ? (
        <State1 />
      ) : login === 2 ? (
        <State2 />
      ) : login === 3 ? (
        <State3 />
      ) : (
        <h1>Hi</h1>
      )}
    </div>
  );
};
export default ConditionalRender1;
