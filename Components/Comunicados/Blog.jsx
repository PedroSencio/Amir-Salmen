import Header from "../Desktop/Desktop-components/Header";
import { useEffect, useState } from "react";
import "./Blog.css";

export default function BlogDesktop() {
    const [posts, setPosts] = useState([]);

    // buscar posts
    useEffect(() => {
        async function fetchPost() {
            const res = await fetch("http://127.0.0.1:5001/post");
            const json = await res.json();

            // adiciona estado curtido por post
            const postsComCurtida = json.map(p => ({
                ...p,
                curtido: false
            }));

            setPosts(postsComCurtida);
        }

        fetchPost();
    }, []);

    async function curtirPost(post_id) {
        const post = posts.find(p => p.id === post_id);

        const res = await fetch("http://127.0.0.1:5001/curtida", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                post_id: post_id,
                curtido: post.curtido
            })
        });

        const data = await res.json();
        // data = { curtido: true/false, curtidas: number }

        setPosts(prev =>
            prev.map(p =>
                p.id === post_id
                    ? {
                        ...p,
                        curtido: data.curtido,
                        curtidas: data.curtidas
                    }
                    : p
            )
        );
    }

    return (
        <div>
            <Header />

            <div id="all-p">
                {[...posts].sort((a, b) => b.id - a.id).map(p => (
                    <div key={p.id} className="post">
                        <img
                            src={p.url}
                            loading="lazy"
                            alt={p.titulo || "Imagem do artigo do blog"}
                        />

                        <div className="post-content">
                            <h1>{p.titulo}</h1>
                            <p>{p.desc}</p>

                            <div className="post-meta">
                                <span>{p.temp}</span>

                                <button
                                    className={p.curtido ? "liked" : ""}
                                    onClick={() => curtirPost(p.id)}
                                >
                                    ❤️ {p.curtidas}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
