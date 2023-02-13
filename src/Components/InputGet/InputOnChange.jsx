import { useState } from "react";
const InputOnChange = () => {
  const [data, setdata] = useState(null);
  const [print, setprint] = useState(false);
  function getData(val) {
    setdata(val.target.value);
    setprint(false);
  }
  return (
    <div className="mainCard">
      <div className="mainCardDown">
        {print ? <h1>{data}</h1> : null}
        <div>
          <input type="text" onChange={getData} />
          <button onClick={() => setprint(true)}>Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default InputOnChange;
