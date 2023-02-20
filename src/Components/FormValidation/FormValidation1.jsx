import { useState } from "react";

const FormValidation1 = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [userErr, setUserErr] = useState(false);
  const [passErr, setpassErr] = useState(false);
  function GetData(e) {
    e.preventDefault();
  }
  return (
    <div className="mainCard">
      <form onSubmit={GetData}>
        <h1>Hi</h1>
        <input type="text" onChange={userHandle} />
        {userErr ? (
          <span>
            <p>User Invalid</p>
          </span>
        ) : (
          ""
        )}
        <input type="text" onChange={passHandle} />
        {passErr ? (
          <span>
            <p>Password Invalid</p>
          </span>
        ) : (
          ""
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation1;
