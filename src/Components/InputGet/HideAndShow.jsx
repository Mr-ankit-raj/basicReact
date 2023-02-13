import { useState } from "react";

const HideAndShow = () => {
  const [status, setstatus] = useState(false);

  return (
    <div className="mainCard">
      <div className="mainCardDown">
        {status ? <h1>Hi Hide and Show</h1> : null}
        <div>
          <button onClick={() => setstatus(false)}>Hide</button>
          <button onClick={() => setstatus(true)}>Show</button>
        </div>
      </div>
    </div>
  );
};
export default HideAndShow;
