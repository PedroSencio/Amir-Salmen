import HeaderMobile from "./Mobile-components/HeaderMobile";
import "./Noticias.css";

const newsItems = [
    {
        id: 1,
        title: "Menção honrosa em Bandeirantes-PR",
        excerpt:
            "Delegado Amir Salmen e equipe receberam destaque pelo trabalho prestado à segurança pública do município.",
        image: "/noticia1.png",
        date: "Jun 2024",
        link: "https://www.instagram.com/p/Cv0V4EfOi-t/"
    },
    {
        id: 2,
        title: "Palestra sobre ECA no Colégio Cívico Militar",
        excerpt:
            "Conversa sobre direitos e deveres de crianças e adolescentes reforçou a parceria entre a PCPR e a comunidade escolar.",
        image: "/noticia2.png",
        date: "Mai 2024",
        link: "https://www.instagram.com/p/CuVqVgdutUo/"
    },
    {
        id: 3,
        title: "Campanha solidária leva apoio a famílias",
        excerpt: "A ação arrecadou donativos e reforçou a rede de proteção de pessoas em situação de risco social.",
        image: "/noticia3.png",
        date: "Abr 2024",
        link: "https://www.instagram.com/delegadoamirsalmen/"
    }
];

export default function NoticiasMobile() {
    return (
        <div id="noticias-mobile">
            <HeaderMobile />
            <main className="news-mobile">
                <header>
                    <p>Notícias</p>
                    <h1>Acompanhe nossas ações</h1>
                    <span>Resultados reais compartilhados com transparência.</span>
                </header>
                {newsItems.map(item => (
                    <article key={item.id} className="news-card-mobile">
                        <div className="image-wrapper">
                            <img src={item.image} alt={item.title} />
                            <span>{item.date}</span>
                        </div>
                        <div className="news-body">
                            <h2>{item.title}</h2>
                            <p>{item.excerpt}</p>
                            <a href={item.link} target="_blank" rel="noreferrer">
                                Ler matéria
                            </a>
                        </div>
                    </article>
                ))}
            </main>
        </div>
    );
}
