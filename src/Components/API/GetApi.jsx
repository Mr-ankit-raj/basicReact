import { useState,useEffect } from "react";
const GetApi = () =>{
    const[post,setPost]=useState([]);
    const getUser = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts/1/comments");
    setPost(await response.json());
    console.log(response);
  };
  useEffect(() => {
    getUser();
  }, []);
    return(
        <div>
            <h1>Get Api</h1>
            <table>
                <thead>
                    <tr>
                        <td>S no.</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                </thead>
                {
                    post.map((CurrentEle)=>{
                        return(
                            <tr>
                        <td>{CurrentEle.name}</td>
                        <td>{CurrentEle.email}</td>
                        <td>{CurrentEle.body}</td>
                    </tr>
                        )
                        
                    })
                }
            </table>
        </div>
    )
}

export default GetApi;