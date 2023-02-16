import { useState } from "react";
const ConditionalRender = () => {
  const [login] = useState(true);
  return (
    <div className="mainCard">
      {login ? <h1>Welcome Ankit</h1> : <h1>Welcome Gust</h1>}
    </div>
  );
};
export default ConditionalRender;
