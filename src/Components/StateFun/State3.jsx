import { useState } from "react";
const State3 = () => {
  const [data3, setdata] = useState("Shiv");
  function update() {
    setdata("mahadev");
  }
  return (
    <div className="mainCard">
      <h1>{data3}</h1>
      <button onClick={update}>CLick State 3 </button>
    </div>
  );
};

export default State3;
