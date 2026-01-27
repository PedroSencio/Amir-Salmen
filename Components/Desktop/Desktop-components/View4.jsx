import "./View4.css"
import { useEffect, useState } from "react"

export default function View4() {
const [posts, setPosts] = useState([]);

useEffect(() => {
    async function getNoticia() {
        const data = await fetch("https://backend-amirsalmen.onrender.com/last_posts");
        const resp = await data.json();

        if (resp) {
            console.log("fetch:", resp);
            setPosts(resp);
        }
        
    }
    getNoticia()
},[])

    return(
        <div id="all-view4">
            <div className="view4-header">
                <h2>Ultimas noticias</h2>
                <div id="line-2"></div>
            </div>

            <div id="posts">
                {posts.map((post) => (
                    <article className="post" key={post.id}>
                        <div className="post__image-wrapper">
                            <img src={`https://zayrdvyobajbklsuxupy.supabase.co/storage/v1/object/public/Amir/${post.img}`} alt={post.titulo} loading="lazy" />
                        </div>
                        <div className="post__content">
                            <h3>{post.titulo}</h3>
                            <p>{post.desc}</p>
                            <button type="button" className="post__cta">Ler mais</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
