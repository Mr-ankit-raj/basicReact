import { useState } from "react";
const InputGet = () => {
  const [data, setdata] = useState(null);
  const [print, setprint] = useState(false);
  function getData(val) {
    setdata(val.target.value);
  }
  return (
    <div className="mainCard">
      <div className="mainCardDown">
        {print ? <h1>{data}</h1> : null}
        <div>
          <input type="tex" onChange={getData} />
          <button onClick={() => setprint(true)}> Print Data</button>
        </div>
      </div>
    </div>
  );
};

export default InputGet;
