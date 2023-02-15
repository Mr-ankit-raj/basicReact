import { useState } from "react";

const FormHandle = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [check, setchcek] = useState(false);
  function getFormData(e) {
    e.preventDefault();
    console.warn(fname, lname, check);
  }
  return (
    <div className="mainCard">
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setfname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last"
          onChange={(e) => setlname(e.target.value)}
        />
        <input type="checkbox" onChange={(e) => setchcek(e.target.checked)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandle;
