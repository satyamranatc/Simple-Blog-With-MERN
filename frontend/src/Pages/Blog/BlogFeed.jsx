import React,{useState,useEffect} from 'react'
import axios from 'axios'
const API_URL =  import.meta.env.VITE_API_URL

export default function BlogFeed() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        async function GetBlog()
        {
            let Res = await axios.get(`${API_URL}/posts`)
            setPosts(Res.data);
            setIsLoading(false);
        }
        GetBlog();
    },[])
  return (
    <div>
        <section>
            <h1>Blog Feed</h1>
        </section>

        <section>
            {isLoading? <div>
                <h2>Loading...</h2>
            </div>:
            <div id = "Main">

                {
                    posts.map(post =>(
                        <div key={post.id}>
                            <img>{post.poster}</img>
                            <h2>{post.title}</h2>
                            <p>{post.desc}</p>
                            <p>{post.author}</p>
                            <p>{post.createdAt}</p>
                        </div>
                    ))
                }

            </div>}
        </section>
    </div>
  )
}
