import { useEffect } from "react";
import "./View2.css";

export default function View2() {
    useEffect(() => {
        const elements = document.querySelectorAll(".mobile-fade-left");
        if (!elements.length) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        });

        elements.forEach(element => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="mobile-view2">
            <div className="about-card mobile-fade-left">
                <h1>Conheça Amir Salmen</h1>
                <p>
                    Amir Salmen é uma figura dedicada à proteção dos direitos dos animais e das pessoas
                    vulneráveis. Com ações humanitárias e campanhas de conscientização, tornou-se referência
                    na defesa de quem não pode se proteger sozinho.
                </p>
                <button onClick={() => window.open("https://wa.me/5543991959633?text=Olá,%20vim%20pelo%20site!", "_blank")}>
                    <img src="/whatsapp.png" alt="" />
                    Entre em contato
                </button>
            </div>
            <div className="photo-card">
                <img src="/amir.png" alt="Amir Salmen" />
            </div>
        </section>
    );
}
