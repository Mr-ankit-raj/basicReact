import { useState } from "react";

const FormHandle1 = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  function Getfaomdata(e) {
    e.preventDefault();
    console.warn(fname, lname, email, pass);
  }
  return (
    <div className="mainCard">
      <form onSubmit={Getfaomdata}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setfname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setlname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input type="password" onChange={(e) => setpass(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandle1;
