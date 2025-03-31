import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "./App.css"

export default function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function  GetApiData() {
      let Res = await axios.get("http://localhost:5500/api/post");
      setData(Res.data);
      console.log(Res.data);
    }
    GetApiData();
  },[])
  return (
    <div>
      <header>
        <h1>Welcome to the Blog App!</h1>
        <p>This is a simple blog app using React, and Axios.</p>
      </header>

    <main>

    </main>
    {
      data.map((post, index) => (
        <div className='PostCard' key={index}>
          <img src={post.poster} alt="" />
          <h2>{post.title}</h2>
          <p>{post.desc}</p>
          <p>{post.author}</p>
        </div>
      ))
    }



    </div>
  )
}
