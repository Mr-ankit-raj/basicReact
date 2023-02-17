import { useState } from "react";

const FormValidation = () => {
  const [user, setUser] = useState("");
  const [pass, setpass] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passrErr, setpassErr] = useState(false);
  function loginHander(e) {
    if (user.length < 3 || pass.length < 3) {
      alert("invalid");
    } else {
      alert("All Good :)");
    }
    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setpassErr(true);
    } else {
      setpassErr(false);
    }
    setpass(item);
  }
  return (
    <div className="mainCard">
      <form onSubmit={loginHander}>
        <h1>Form Validations</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={userHandler}
        />
        {userErr ? (
          <span className="error">
            <p>User invalid</p>
          </span>
        ) : (
          ""
        )}
        <input
          type="password"
          placeholder="Enter your password"
          onChange={passHandler}
        />
        {passrErr ? (
          <span className="error">
            <p>Pass invalid</p>
          </span>
        ) : (
          ""
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
