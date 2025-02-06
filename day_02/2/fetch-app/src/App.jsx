import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const[data,setData]=useState("")

  useEffect (()=>{
    const fetchPosts=async()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/posts")
      const data =await res.json();
      setData(data)
    };
    fetchPosts();
  },[]);

    return(
        <>
          <h1>Posts</h1>
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </thead>
          <tbody>
            {data.map((el)=>{
              <li>
              <td>{el.userId}</td>
              <td>{el.title}</td>
              <td>{el.body}</td>
              </li>
            })}
          </tbody>
        </>
    )
}
export default App
