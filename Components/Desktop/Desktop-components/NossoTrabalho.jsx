import "./NossoTrabalho.css";

const focusAreas = [
    {
        tag: "Proteção Animal",
        title: "Defesa e bem-estar dos animais",
        description:
            "Coordenamos resgates, acompanhamos denúncias e oferecemos suporte jurídico para garantir que cada vida animal receba cuidados imediatos e dignidade.",
        actions: [
            "Resgates 24h em parceria com ONGs",
            "Acompanhamento de denúncias de maus-tratos",
            "Campanhas de adoção e castração solidária"
        ],
        color: "animal"
    },
    {
        tag: "Proteção aos Vulneráveis",
        title: "Rede de apoio às pessoas em risco",
        description:
            "Articulamos políticas de acolhimento, apoio psicológico e encaminhamentos emergenciais, priorizando mulheres, crianças e idosos vulneráveis.",
        actions: [
            "Plantão social e assistência jurídica",
            "Programas educativos em escolas e comunidades",
            "Parcerias para acolhimento imediato"
        ],
        color: "social"
    }
];

export default function NossoTrabalhoContent() {
    const handleContact = () => {
        window.open("https://wa.me/5543991959633?text=Olá,%20vim%20pelo%20site!", "_blank");
    };

    return (
        <main id="nosso-trabalho">
            <section className="work-hero">
                <div className="hero-text">
                    <p>Nosso Trabalho</p>
                    <h1>Cuidar de quem mais precisa</h1>
                    <span>
                        Unimos forças com voluntários, poder público e sociedade civil para proteger os
                        direitos dos animais e apoiar pessoas em situação de vulnerabilidade.
                    </span>
                    <button type="button" onClick={handleContact}>
                        Quero ajudar
                    </button>
                </div>
                <div className="hero-data">
                    <div className="data-card">
                        <strong>180+</strong>
                        <p>Animais resgatados e reabilitados</p>
                    </div>
                    <div className="data-card">
                        <strong>320+</strong>
                        <p>Pessoas acolhidas em ações sociais</p>
                    </div>
                </div>
            </section>

            <section className="work-grid">
                {focusAreas.map(area => (
                    <article key={area.tag} className={`work-card ${area.color}`}>
                        <span>{area.tag}</span>
                        <h2>{area.title}</h2>
                        <p>{area.description}</p>
                        <ul>
                            {area.actions.map(action => (
                                <li key={action}>{action}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            <section className="work-footer">
                <h3>Como você pode apoiar?</h3>
                <p>
                    Denuncie maus-tratos, participe das campanhas de arrecadação ou seja voluntário. Cada
                    gesto amplia a rede de proteção.
                </p>
                <button type="button" onClick={handleContact}>
                    Falar com a equipe
                </button>
            </section>
        </main>
    );
}
