import { carregarNoticiasFiltradas } from "../../../src/lib/api";
import "./View4.css"
import { useEffect, useState } from "react"

export default function View4() {
const [posts, setPosts] = useState([]);

const handleOpen = url => {
        if (!url) return;
        window.open(url, "_blank", "noopener,noreferrer");
    };

useEffect(() => {
    async function load() {
        try {
            const data = await carregarNoticiasFiltradas();
            setPosts(data);
        }
        catch (error) {
            console.error("Erro ao carregar notícias:", error);
        }}
    load();
},[])

useEffect(() => {
    const elements = document.querySelectorAll(".reveal-up");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
}, [posts]);

    return(
        <div id="all-view4">
            <div className="view4-header reveal-up">
                <div className="box-in-view">
                    <p className="box-all">Ultimas noticias</p>
                    <h1>Fique por dentro das nossas ações</h1>
                    <p className="view4-subtitle">
                        Atualizações rápidas sobre investigações, operações e iniciativas que protegem a comunidade.
                    </p>
                    <button id="veja-noticia">Veja mais notícias</button>
                </div>
            </div>

            <div id="posts">
                {posts.map((post, index) => (
                    <article
                        className="post reveal-up"
                        key={post.id}
                        style={{ transitionDelay: `${0.12 * index}s` }}
                    >
                        <div className="post__image-wrapper">
                            <img src={`https://zayrdvyobajbklsuxupy.supabase.co/storage/v1/object/public/Amir/${post.img}`} alt={post.titulo} loading="lazy" />
                        </div>
                        <div className="post__content">
                            <h3>{post.titulo}</h3>
                            <button type="button" onClick={() => (
                                handleOpen(post.link)
                            )} className="post__cta">Ler mais</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
