import Header from "./Mobile-components/HeaderMobile";
import "./MinhaHistoria.css";

const timeline = [
    {
        title: "Início da trajetória",
        text: "Ingressou nos quadros da Polícia Civil do Paraná motivado pela defesa da justiça e do bem-estar social."
    },
    {
        title: "Atuação em delegacias especializadas",
        text: "Liderou investigações complexas, coordenando equipes multidisciplinares e aproximando a instituição da comunidade."
    },
    {
        title: "Projetos sociais",
        text: "Idealizou ações voltadas ao acolhimento de animais resgatados e famílias em situação de vulnerabilidade."
    },
    {
        title: "Missão atual",
        text: "Transformar denúncias em respostas céleres e humanizadas, inspirando outras pessoas a colaborarem."
    }
];

export default function MinhaHistoriaMobile() {
    return (
        <div id="minha-historia-mobile">
            <Header />
            <main className="mh-container">
                <section className="mh-hero">
                    <p>Minha História</p>
                    <h1>Quem é Amir Salmen?</h1>
                    <span>
                        Delegado, defensor dos animais e voz ativa na proteção das pessoas que mais precisam.
                    </span>
                </section>

                <section className="mh-image-card">
                    <img src="/amir.png" alt="Amir Salmen" />
                    <p>
                        Uma trajetória marcada por coragem, resultados e empatia. Cada operação conduzida coloca a
                        justiça a serviço da comunidade.
                    </p>
                </section>

                <section className="mh-timeline">
                    {timeline.map(item => (
                        <article key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </section>

                <section className="mh-cta">
                    <h2>Vamos conversar?</h2>
                    <p>Denuncie, apoie ou participe das próximas ações. Sua voz importa.</p>
                    <a
                        href="https://wa.me/5543991959633?text=Olá,%20vim%20pelo%20site!"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Falar com a equipe
                    </a>
                </section>
            </main>
        </div>
    );
}
