import { useEffect } from "react";
import "./View1.css";

const socialLinks = [
    { icon: "/facebook.png", url: "https://www.facebook.com/amir.salmen" },
    { icon: "/instagram.png", url: "https://www.instagram.com/delegadoamirsalmen/" },
    { icon: "/whatsapp-3.png", url: "https://wa.me/5543991959633?text=Olá,%20vim%20pelo%20site!" }
];

export default function View1() {
    useEffect(() => {
        const targets = document.querySelectorAll("#mobile-hero .fade-right, #mobile-hero .fade-up");
        if (!targets.length) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        targets.forEach(target => observer.observe(target));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="mobile-hero">
            <img src="/pexels-david-kanigan-239927285-34485951.jpg" alt="" className="hero-bg" />
            <div className="hero-overlay" />
            <div className="hero-tags fade-up">
                <button>Defesa dos animais</button>
                <button>Vulneráveis</button>
            </div>
            <div className="hero-message fade-up">
                <h2>"Protegendo quem não pode se defender"</h2>
                <button>Saiba Mais</button>
            </div>
            <div className="hero-social">
                {socialLinks.map((social, index) => (
                    <button
                        key={social.url}
                        className={`social-btn fade-right delay-${index}`}
                        onClick={() => window.open(social.url, "_blank")}
                    >
                        <img src={social.icon} alt="Rede social" />
                    </button>
                ))}
            </div>
        </section>
    );
}
