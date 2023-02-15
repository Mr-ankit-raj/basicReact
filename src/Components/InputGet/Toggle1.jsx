import { useState } from "react";

const Toggle1 = () => {
  const [status, setstatus] = useState(null);
  return (
    <div className="mainCard">
      <div className="mainCardDown">{status ? <h1>Toggle 1</h1> : null}</div>
      <button onClick={() => setstatus(!status)}>Toggle 1</button>
    </div>
  );
};

export default Toggle1;
