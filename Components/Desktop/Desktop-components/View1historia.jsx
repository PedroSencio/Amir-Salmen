import "./View1historia.css"

const destaques = [
    "Segurança pública",
    "Liderança policial",
    "Proteção da comunidade"
]

export default function View1historia() {
    return(
        <div id="view1-historia">
            <div id="historia-view1">
                <p className="eyebrow">Minha Trajetória</p>
                <h1>Delegado Amir Roberto Salmen</h1>
                <h2>Delegado da Polícia Civil do Paraná com longa experiência, liderando equipes, protegendo comunidades e conduzindo investigações estratégicas.</h2>
                <div id="historia-tags">
                    {destaques.map(tag => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
            <div id="foto-amir-historia">
                <div className="foto-moldura">
                    <img src="/amir.png" alt="Retrato do Delegado Amir Salmen" />
                </div>
            </div>
        </div>
    )
}
