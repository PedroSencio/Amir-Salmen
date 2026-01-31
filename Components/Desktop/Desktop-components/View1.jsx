import { useEffect } from "react";
import "./View1.css";

export default function View1() {
    const openExternal = url =>
        window.open(url, "_blank", "noopener,noreferrer");

    const scrollToDenuncia = () => {
        const target = document.getElementById("view5");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const animatedElements = document.querySelectorAll(
            "#social-media .social-fade, .message-fade"
        );
        if (!animatedElements.length) return;

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

        animatedElements.forEach(element => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return(
        <div id="box-view1">
            <div id="black">

            </div>
            <img
                src="/ChatGPT Image 31 de jan. de 2026, 15_26_24.png"
                alt="Delegado Amir Salmen em campanha de proteção"
            />
            <div id="mensagem" className="message-fade">
                <h2 id="top-msg">Cuidado, respeito e responsabilidade</h2>
                <h2>"Protegendo quem não pode se defender"</h2>
                <h2 id="down-msg">Atuamos todos os dias para garantir segurança e dignidade àqueles que mais precisam.</h2>
                <div id="social-media">
                <button className="btn social-fade" onClick={() => openExternal("https://wa.me/5543991616441?text=Olá,%20vim%20pelo%20site!")}><img src="/whatsapp-3.png" alt="Contato pelo WhatsApp" /></button>
                <button className="btn social-fade" onClick={() => openExternal("https://www.instagram.com/delegadoamirsalmen/")}><img src="/instagram.png" alt="Instagram do Delegado Amir Salmen" /></button>
                <button className="btn social-fade" onClick={() => openExternal("https://www.facebook.com/amir.salmen")}><img src="/facebook.png" alt="Facebook do Delegado Amir Salmen" /></button>
            </div>
            </div>
            <button id="denuncie" onClick={scrollToDenuncia}>
                Como Denunciar?
            </button>
        </div>
    )
}
