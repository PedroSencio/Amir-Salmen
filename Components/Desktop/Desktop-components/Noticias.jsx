import "./Noticias.css";

export default function Noticias({data}) {
    const handleOpen = url => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const categorias = {
        1 : "Ação Instituional",
        2 : "Agenda",
        3 : "Podcast"
    }

    return (
        <section id="view-noticias">
            <div className="news-header">
                <p>Últimas Notícias</p>
                <h2>Acompanhe nossos projetos e aparições na mídia</h2>
                <span>Transparência e proximidade com a sociedade em cada ação.</span>
            </div>

            <div>
            </div>
            <div className="news-grid">
                {data.map(item => (
                    <article key={item.id} className="news-card">
                        <div className="news-image">
                            <img src={item.image} alt={item.titulo} />
                            <span className="news-tag">{categorias[item.categoria]}</span>
                        </div>
                        <div className="news-content">
                            <h3>{item.titulo}</h3>
                            <p>{item.desc}</p>
                        </div>
                        <div className="news-footer">
                            <span>{item.data}</span>
                            <button type="button" onClick={() => handleOpen(item.link)}>
                                Ler matéria
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
