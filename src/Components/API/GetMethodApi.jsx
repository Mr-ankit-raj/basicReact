import React, { useEffect, useState } from "react";
const GetMethodApi = () => {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    setUser(await response.json());
    console.log(response);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h1>GetMethodApi</h1>
      <table>
        <thead>
          <tr>
            <td>Brand</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {user.map((CurElm) => {
            return (
              <tr>
                <td>{CurElm.title}</td>
                <td>{CurElm.userId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GetMethodApi;
