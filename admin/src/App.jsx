import React from 'react'
import axios from 'axios';
import "./App.css"

export default function App() {


  async function handleSubmit(e) {
    e.preventDefault();

    let data = {
      title: e.target[0].value,
      poster: e.target[1].value,
      desc: e.target[2].value,
      author: e.target[3].value,
    }

    let Res = await axios.post("http://localhost:5500/api/post", data);
    console.log(Res.data);
  }

  return (
    <div>
      <header>
        <h1>Welcome to the Blog App Admin!</h1>
        <p>Just add The Blogs</p>
      </header>

      <main>
        <form onSubmit={handleSubmit}>

          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="poster" placeholder="Poster URL" required />
          <input type="text" name="desc" placeholder="Description" required />
          <input type="text" name="author" placeholder="Author" required />
          <button type="submit">Add Blog</button>

        </form>
      </main>

    </div>
  )
}
