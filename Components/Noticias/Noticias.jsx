import "./Noticias.css";
import { useEffect, useState } from "react";
import Header from "../Desktop/Desktop-components/Header";
import { carregarNoticias } from "../../src/lib/api.js";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";

export default function NoticiasDesktop() {
    const [cards, setCards] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);

    const handleOpen = url => {
        if (!url) return;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    useEffect(() => {
        async function loadNoticias() {
            try {
                const data = await carregarNoticias();
                setCards(data);
            } catch (error) {
                console.error("Erro ao carregar notícias:", error);
            }}
        loadNoticias();
    }, []);

    const categorias = {
        1 : "Ação Institucional",
        2 : "Agenda",
        3 : "Podcast"
    };

    const categoriaClass = {
        1: "tag-acao",
        2: "tag-agenda",
        3: "tag-podcast"
    };

    return (
        <div>
            <PageSEO {...seoContent.noticias} />
            <Header />
            <section id="view-noticias">
                <div className="news-header">
                    <p>Últimas Notícias</p>
                    <h2>Acompanhe nossos projetos e aparições na mídia</h2>
                    <span>Transparência e proximidade com a sociedade em cada ação.</span>
                </div>

                <div className="news-top-bar">
                    <div className="news-pill">Atualizado em tempo real</div>
                    <div className="news-filters">
                        <button
                            className={selectedCategory === 0 ? "filter-btn active" : "filter-btn"}
                            type="button"
                            onClick={() => setSelectedCategory(0)}
                        >
                            Todas
                        </button>
                        {Object.entries(categorias).map(([key, label]) => (
                            <button
                                key={key}
                                className={selectedCategory === Number(key) ? "filter-btn active" : "filter-btn"}
                                type="button"
                                onClick={() => setSelectedCategory(Number(key))}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <button className="news-cta" type="button" onClick={() => handleOpen("https://www.instagram.com/delegadoamirsalmen/")}>
                        Ver todas as publicações
                    </button>
                </div>

                <div className="news-grid">
                    {cards.length === 0 && (
                        <div className="news-empty">
                            <p>Carregando notícias...</p>
                        </div>
                    )}
                    {cards
                        .filter(item => selectedCategory === 0 ? true : item.categoria === selectedCategory)
                        .map(item => (
                        <article key={item.id} className="news-card">
                            <div className="news-image">
                                {item.img ? (
                                    <img src={`https://zayrdvyobajbklsuxupy.supabase.co/storage/v1/object/public/Amir/${item.img}`} alt={item.titulo} loading="lazy" />
                                ) : (
                                    <div className="news-image-placeholder">Imagem indisponível</div>
                                )}
                                <span className={`news-tag ${categoriaClass[item.categoria]}`}>{categorias[item.categoria]}</span>
                                <span className="news-date-chip">{item.data}</span>
                            </div>
                            <div className="news-content">
                                <h3>{item.titulo}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="news-footer">
                                <button type="button" onClick={() => handleOpen(item.link)}>
                                    Ler matéria
                                </button>
                                <span className="news-link-hint">Abrir em nova aba</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
