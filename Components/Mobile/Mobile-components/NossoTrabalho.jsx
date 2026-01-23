import "./NossoTrabalho.css";

const mobileAreas = [
    {
        title: "Proteção Animal",
        description:
            "Resgates, atendimentos veterinários parceiros e ações de adoção garantem que os animais tenham uma nova chance.",
        bullets: ["Resgates emergenciais", "Mutirões de castração", "Campanhas de adoção responsável"]
    },
    {
        title: "Proteção aos Vulneráveis",
        description:
            "Rede de voluntários e instituições oferece acolhimento rápido para mulheres, crianças e idosos em risco.",
        bullets: ["Acolhimento imediato", "Atendimento psicossocial", "Programas educativos"]
    }
];

export default function NossoTrabalhoMobileSection() {
    return (
        <main id="nosso-trabalho-mobile">
            <header>
                <p>Nosso Trabalho</p>
                <h1>Protegendo animais e pessoas vulneráveis</h1>
            </header>

            {mobileAreas.map(area => (
                <section key={area.title} className="mobile-card">
                    <h2>{area.title}</h2>
                    <p>{area.description}</p>
                    <ul>
                        {area.bullets.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            ))}

            <div className="mobile-cta">
                <span>Quer denunciar ou apoiar nossas ações?</span>
                <a
                    href="https://wa.me/5543991959633?text=Olá,%20vim%20pelo%20site!"
                    target="_blank"
                    rel="noreferrer"
                >
                    Fale conosco
                </a>
            </div>
        </main>
    );
}
