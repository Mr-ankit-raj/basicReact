import { useState } from "react";

const Toggle = () => {
  const [status, setstatus] = useState(true);
  return (
    <div className="mainCard">
      <div className="mainCardDown">
        {status ? <h1>Hi Toggle</h1> : null}
        <div>
          <button onClick={() => setstatus(!status)}>Toggle</button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
