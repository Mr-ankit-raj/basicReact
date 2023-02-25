import { useEffect, useState } from "react";
const GetMethodApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528"
    ).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  });

  // console.log(data.results);
  return (
    <div>
      {data.map((users) => {
        console.log(users);
      })}
      <h1>GetMethodApi</h1>
      <table>
        <tr>
          <td>Brand</td>
          {/* <td>Title</td>
          <td>Body</td>
          <td>User Id</td> */}
        </tr>

        {/* {data.map(() => {
          {
            console.log(data);
            <tr>
            <td>{data.brand}</td>
            <td>{data.brand}</td>
            <td>{data.brand}</td>
            <td>{data.brand}</td>
          </tr>
          }
        })} */}
      </table>
    </div>
  );
};

export default GetMethodApi;
