import { useState } from "react";

const ClickHideShow = () => {
  const [data, setData] = useState(true);

  return (
    <div className="mainCard">
      {data ? <h1>CLick Hide Show</h1> : null}
      <button type="Submit" onClick={() => setData(false)}>
        Hide
      </button>
      <button type="Submit" onClick={() => setData(true)}>
        Show
      </button>
    </div>
  );
};

export default ClickHideShow;
