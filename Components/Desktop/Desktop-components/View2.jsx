import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./View2.css";

export default function View2() {
    const navigate = useNavigate();
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
            <h1>Quem é o Delegado Amir Salmen?</h1>
            <div id="line-1"></div>
            <h2>Amir Salmen é uma figura dedicada à proteção dos direitos dos <strong>animais</strong> e das pessoas <strong>vulneráveis.</strong></h2>
            <h2>Com uma trajetória marcada por ações humanitárias e campanhas de conscientização, Amir tem se destacado como um defensor incansável daqueles que não podem se defender por si mesmos.</h2>
            <h2>Sua paixão pela justiça social e pelo bem-estar animal resultou na criação e apoio a iniciativas que resgatam vidas, fortalecem comunidades e inspiram o engajamento social.</h2>
            <div id="buttons-view2">
                <button id="leia">Leia mais</button>
                <button onClick={() => navigate("https://wa.me/5543991959633?text=Olá,%20vim%20pelo%20site!")}><img src="/whatsapp.png" alt="" />Fale comigo</button>
            </div>
            </div>
            <div id="right-foto">
                    <img src="/amir.png" alt="Delegado Amir Salmen" />
            </div>
        </div>
    )
}
