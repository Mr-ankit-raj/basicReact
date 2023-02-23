import { useState } from "react";

const FormValidation1 = () => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [userErr, setUserErr] = useState(false);
  const [passErr, setpassErr] = useState(false);
  function GetData(e) {
    if (user.lenght > 3 || pass.lenght > 3) {
      alert("invalid");
    } else {
      alert("all Goods :)");
    }
    e.preventDefault();
  }
  function userHandle(e) {
    let item = e.target.value;
    if (item.lenght < 3) {
      userErr(true);
    } else {
      userErr(false);
    }
    setUser(item);
  }
  function passHandle(e) {
    let item = e.target.value;
    if (item.lenght < 2) {
      passErr(true);
    } else {
      passErr(false);
    }
    setPass(item);
  }

  return (
    <div className="mainCard">
      <form onSubmit={GetData}>
        <h1>Form Validations 2</h1>
        <input type="text" onChange={userHandle} />
        {setUserErr ? (
          <span class="error">
            <p>User Invalid</p>
          </span>
        ) : (
          ""
        )}
        <input type="text" onChange={passHandle} />
        {setpassErr ? (
          <span class="error">
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
