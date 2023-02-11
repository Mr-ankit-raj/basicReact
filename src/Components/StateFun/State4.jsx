import { useState } from "react";
const State4 = () => {
  const [data, setdata] = useState("Mata");
  function update() {
    setdata("Mata Rani");
  }
  return (
    <div className="mainCard">
      <h1 onMouseOver={update}>{data}</h1>
      {/* <button onChange={}>State 4</button> */}
    </div>
  );
};
export default State4;
