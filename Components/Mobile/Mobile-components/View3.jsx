import { useEffect } from "react";
import "./View3.css";

export default function View3() {
    useEffect(() => {
        const counters = document.querySelectorAll(".mobile-counter");
        if (!counters.length) return;

        counters.forEach(counter => {
            const suffix = counter.dataset.suffix ?? "";
            counter.textContent = `0${suffix}`;
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.dataset.target ?? "0", 10);
                const suffix = el.dataset.suffix ?? "";
                const duration = 1400;
                let start = null;

                const step = timestamp => {
                    if (start === null) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    const value = Math.floor(progress * target);
                    el.textContent = `${value}${suffix}`;
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        el.textContent = `${target}${suffix}`;
                    }
                };

                requestAnimationFrame(step);
                observer.unobserve(el);
            });
        }, { threshold: 0.3 });

        counters.forEach(counter => observer.observe(counter));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="mobile-view3">
            <div className="mission-card">
                <img src="/amir2.png" alt="Equipe em missão" />
                <div className="mission-copy">
                    <p>Nossa Missão</p>
                    <h2>Protegendo quem não pode se defender</h2>
                    <span>
                        Campanhas educativas, resgates e apoio comunitário para garantir dignidade a animais e
                        pessoas vulneráveis.
                    </span>
                    <button>Saiba Mais</button>
                </div>
            </div>
            <div className="counter-strip">
                <div className="counter-card">
                    <small>Denúncias atendidas</small>
                    <strong className="mobile-counter" data-target="50" data-suffix="+">0+</strong>
                </div>
                <div className="counter-card">
                    <small>Vidas protegidas</small>
                    <strong className="mobile-counter" data-target="400" data-suffix="+">0+</strong>
                </div>
                <div className="counter-card">
                    <small>Campanhas realizadas</small>
                    <strong className="mobile-counter" data-target="30" data-suffix="+">0+</strong>
                </div>
            </div>
        </section>
    );
}
