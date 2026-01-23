import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./View1.css";

export default function View1() {
    const navigate = useNavigate();

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
            <img
                src="/pexels-david-kanigan-239927285-34485951.jpg"
                alt="Delegado Amir Salmen em campanha de proteção"
            />
            <div id="social-media">
                <button className="btn social-fade" onClick={() => navigate("https://wa.me/5543991959633?text=Olá,%20vim%20pelo%20site!")}><img src="/whatsapp-3.png" alt="Contato pelo WhatsApp" /></button>
                <button className="btn social-fade" onClick={() => navigate("https://www.instagram.com/delegadoamirsalmen/")}><img src="/instagram.png" alt="Instagram do Delegado Amir Salmen" /></button>
                <button className="btn social-fade" onClick={() => navigate("https://www.facebook.com/amir.salmen")}><img src="/facebook.png" alt="Facebook do Delegado Amir Salmen" /></button>
            </div>
            <div id="mensagem" className="message-fade">
                <h2>"Protegendo quem não pode se defender"</h2>
                <button>Saiba Mais</button>
            </div>
        </div>
    )
}
