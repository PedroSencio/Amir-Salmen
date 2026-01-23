import "./View4.css";

const newsHighlights = [
    {
        image: "/noticia1.png",
        title: "Delegado Amir Salmen e policiais da PCPR recebem menção honrosa em Bandeirantes-PR"
    },
    {
        image: "/noticia2.png",
        title: "Delegado Amir Salmen realiza palestra sobre ECA no Colégio Cívico Militar"
    },
    {
        image: "/amir.png",
        title: "Campanhas sociais levam apoio e proteção a famílias vulneráveis"
    }
];

export default function View4() {
    return (
        <section id="mobile-view4">
            <header>
                <p>Últimas notícias</p>
                <h2>Em destaque</h2>
            </header>
            <div className="news-list">
                {newsHighlights.map(news => (
                    <article key={news.title} className="news-item">
                        <div className="thumb">
                            <img src={news.image} alt={news.title} />
                        </div>
                        <h3>{news.title}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}
