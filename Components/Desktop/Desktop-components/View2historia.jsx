import "./View2historia.css"

const secoes = [
    {
        titulo: "Formação Acadêmica",
        itens: [
            "Bacharel em Direito pela Universidade Estadual do Norte do Paraná (1999).",
            "Especialização em Direito Penal e Processo Penal e em Formulação e Gestão de Políticas Públicas pela Universidade Estadual de Londrina.",
            "Mestrando em Políticas Públicas pela Universidade Estadual de Maringá (em andamento)."
        ]
    },
    {
        titulo: "Carreira na Polícia Civil",
        itens: [
            "Ingressou na Polícia Civil do Paraná em 2003 como Delegado de Polícia.",
            "Atuou em Paranavaí, Andirá, Nova Fátima e Cambará ao longo da carreira.",
            "Foi Delegado-Chefe da 16ª Subdivisão Policial de Campo Mourão.",
            "Atualmente é Delegado-Chefe da 12ª Subdivisão Policial de Jacarezinho, liderando investigações, operações e estratégias de segurança pública."
        ]
    },
    {
        titulo: "Reconhecimentos e Destaques",
        itens: [
            "Alcançou elevada taxa de resolução de homicídios em Jacarezinho e expandiu serviços especializados, como a Delegacia de Proteção aos Animais.",
            "Homenageado pela Câmara Municipal de Jacarezinho com o título de Cidadão Honorário.",
            "Representou a Polícia Civil do Paraná em cerimônias oficiais de premiação de servidores por excelência."
        ]
    },
    {
        titulo: "Outras Atividades",
        itens: [
            "Atuou como professor universitário nas disciplinas de Direito Penal e Processo Penal, formando novos profissionais do Direito."
        ]
    },
    {
        titulo: "Perfil e Compromissos Pessoais",
        itens: [
            "Defensor dos direitos humanos e da proteção animal, participa de iniciativas e comunica resultados dessas frentes à comunidade."
        ]
    }
]

export default function View2historia() {
    return(
        <div id="view2-historia">
            <div className="journey-wrapper">
                <div className="journey-intro">
                    <h3>Resumo da Trajetória</h3>
                    <p>Delegado Amir Roberto Salmen é um líder da Polícia Civil do Paraná, com atuação destacada na proteção da comunidade, na condução de investigações complexas e na defesa de causas humanas e ambientais.</p>
                </div>
                <div className="journey-grid">
                    {secoes.map(secao => (
                        <div key={secao.titulo} className="journey-card">
                            <div className="card-header">
                                <div className="dot"></div>
                                <h4>{secao.titulo}</h4>
                            </div>
                            <ul>
                                {secao.itens.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
