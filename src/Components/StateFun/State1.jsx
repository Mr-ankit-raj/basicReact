import { useState } from "react";
const State1 = () => {
  const [data, setdata] = useState(0);
  function udates() {
    setdata(data + 1);
  }

  return (
    <div className="mainCard">
      <h2>{data}</h2>
      <button onClick={udates}>Click Me</button>
    </div>
  );
};
export default State1;
