import { useState } from "react";
const ClickInputGet = () => {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div className="mainCard">
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button type="submit" onClick={() => setPrint(true)}>
        Click Input Get
      </button>
    </div>
  );
};

export default ClickInputGet;
