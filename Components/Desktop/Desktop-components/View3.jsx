import { useEffect } from "react";
import "./View3.css";

export default function View3() {
    useEffect(() => {
        const items = document.querySelectorAll(".fade-in-right");
        if (!items.length) return;

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

        items.forEach(item => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const counters = document.querySelectorAll(".counter-value");
        if (!counters.length) return;

        counters.forEach(counter => {
            const suffix = counter.dataset.suffix ?? "";
            counter.textContent = `0${suffix}`;
        });

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    }
                    const el = entry.target;
                    const suffix = el.dataset.suffix ?? "";
                    const target = parseInt(el.dataset.target ?? "0", 10);
                    const duration = 1500;
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
            },
            { threshold: 0.3 }
        );

        counters.forEach(counter => observer.observe(counter));

        return () => observer.disconnect();
    }, []);

    return (
        <div id="box-view3">
            <div id="up-view3">
                <div id="left-view3">
                    <img src="/amir2.png" alt="" />
                </div>
                <div className="fade-in-right" id="right-view3">
                    <h1>Nossa Missão</h1>
                    <div id="line-2"></div>
                    <h2 className="texto-view">Minha missão é <strong>proteger</strong> os direitos dos animais e das pessoas vulneráveis, promovendo a conscientização e a ação em prol de um mundo mais justo e compassivo.</h2>
                    <h2 className="texto-view">Através de campanhas educativas, resgates e apoio comunitário, busco criar um impacto positivo na vida daqueles que não podem se defender por si mesmos.</h2>
                    <h2 className="texto-view">Acredito que cada indivíduo tem o poder de fazer a diferença, e meu objetivo é inspirar e mobilizar outros a se juntarem a essa causa vital.</h2>
                    <button>Saiba Mais</button>
                </div>
            </div>
            <div id="down-view3">
                <h1>Impacto do nosso trabalho</h1>
                    <div id="line-2"></div>
                <div id="faixa-lateral">
                    <div className="numbers">
                        <h2 className="counter-value" data-target="50" data-suffix="+">0+</h2>
                        <h1>Denúncias atendidas</h1>
                    </div>
                    <div className="numbers">
                        <h2 className="counter-value" data-target="400" data-suffix="+">0+</h2>
                        <h1>Vidas protegidas</h1>
                    </div>
                    <div className="numbers">
                        <h2 className="counter-value" data-target="30" data-suffix="+">0+</h2>
                        <h1>Campanhas Realizadas</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
