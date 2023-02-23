import { useState } from "react";
const Clicktoggle = () => {
  const [data, setData] = useState(true);

  return (
    <div className="mainCard">
      {data ? <h1>Toggle Click</h1> : null}
      <button type="submit" onClick={() => setData(!data)}>
        Click Toggle
      </button>
    </div>
  );
};
export default Clicktoggle;
