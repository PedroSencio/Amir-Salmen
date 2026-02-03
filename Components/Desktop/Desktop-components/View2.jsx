import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./View2.css";

export default function View2() {
    const navigate = useNavigate();
    const openExternal = url =>
        window.open(url, "_blank", "noopener,noreferrer");
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in-left");
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

        elements.forEach(element => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return(
        <div id="box-view2">
            <div className="fade-in-left" id="left-text">
                <div className="box-in-view">
                    <p className="box-all">SOBRE</p>
                    <h1>Delegado Amir Salmen</h1>
                </div>
                <h2>Delegado Amir Salmen é a liderança em <strong>segurança pública</strong>, aliando técnica investigativa a ações de <strong>proteção animal</strong> e apoio a pessoas vulneráveis.</h2>
                <h2>Com operações integradas, trabalho de inteligência e campanhas educativas, ele aproxima a Polícia Civil da comunidade e amplia a rede de cuidado.</h2>
                <h2>Resultados concretos, transparência e presença em campo marcam a trajetória de quem escolheu servir e proteger com responsabilidade social.</h2>
                    <div id="buttons-view2">
                        <button
                            id="leia"
                            onClick={() => {
                                window.location.assign("/minha-historia");
                            }}
                        >
                            Leia mais
                        </button>
                        <button onClick={() => openExternal("https://wa.me/5543991616441?text=Olá,%20vim%20pelo%20site!")}>
                            <img src="/whatsapp.png" alt="Ícone do WhatsApp" />
                            Fale comigo
                        </button>
                    </div>
                </div>
            <div id="right-foto">
                    <img src="/amir.png" alt="Delegado Amir Salmen" />
            </div>
        </div>
    )
}
