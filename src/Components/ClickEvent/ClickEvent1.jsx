import { useState } from "react";
const ClickEvent1 = () => {
  const [data, usedata] = useState(0);
  function getData() {
    usedata(data + 1);
  }
  return (
    <div className="mainCard">
      <h1>{data}</h1>
      <button type="submit" onClick={getData}>
        {" "}
        ClickEvent1
      </button>
    </div>
  );
};

export default ClickEvent1;
