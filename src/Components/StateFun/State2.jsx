import { useState } from "react";
const State2 = () => {
  const [data2, setdata2] = useState("Dev");
  function usdate() {
    setdata2("Ram");
  }
  return (
    <div className="mainCard">
      <h1>{data2}</h1>
      <button onClick={usdate}>State2</button>
    </div>
  );
};
export default State2;
