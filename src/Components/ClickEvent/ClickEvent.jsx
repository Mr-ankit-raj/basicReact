import { useState } from "react";
const ClickEvent = () => {
  const [data, setData] = useState(0);
  function dataGet() {
    setData(data + 1);
  }
  return (
    <div className="mainCard">
      <h1>{data}</h1>
      <button type="submit" onClick={dataGet}>
        Submit
      </button>
    </div>
  );
};

export default ClickEvent;
