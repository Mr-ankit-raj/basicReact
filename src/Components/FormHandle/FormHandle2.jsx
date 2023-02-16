import { useState } from "react";
const FormHandle2 = () => {
  const [name, setname] = useState("");
  const [check, setcheck] = useState(false);
  function GetFormData(e) {
    e.preventDefault();
    console.log(name, check);
  }
  return (
    <div className="mainCard">
      <form onSubmit={GetFormData}>
        <input type="text" onChange={(e) => setname(e.target.value)} />
        <input type="checkbox" onChange={(e) => setcheck(e.target.checked)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandle2;
