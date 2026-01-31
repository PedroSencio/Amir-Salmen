import { useEffect, useState } from "react";
import "./View5.css";

export default function View5() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [num, setNum] = useState("")
    const [desc, setDesc] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
        const elements = document.querySelectorAll(".reveal-up");
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

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);


    async function handleSubmit(e) {
        e.preventDefault()
        setStatus("")

        fetch("http://127.0.0.1:5001/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                num,
                desc
            })
        })
        .then(async res => {
            const text = await res.text()
            console.log("STATUS:", res.status)
            console.log("RESPOSTA:", text)
            if (res.ok) {
                setStatus("Mensagem enviada com sucesso!")
                setNome("")
                setEmail("")
                setNum("")
                setDesc("")
            } else {
                setStatus("Não foi possível enviar. Tente novamente.")
            }
        })
        .catch(err => {
            console.error(err)
            setStatus("Não foi possível enviar. Tente novamente.")
        })


    }


    return (
        <section id="view5">
            <div className="form-copy reveal-up">
                <p>Contato</p>
                <h1>Fale conosco</h1>
                <span>
                    Compartilhe seu caso, dúvida ou denúncia. Respondemos pessoalmente cada mensagem recebida.
                </span>
                <span>Precisa de ajuda? <a href="/ajuda">clique aqui</a></span>
            </div>
            <form
                id="contact-form"
                className="reveal-up"
                style={{ transitionDelay: "0.12s" }}
                onSubmit={handleSubmit}
            >
                <div className="input-group">
                    <label htmlFor="name">Nome completo</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="input-grid">
                    <div className="input-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="voce@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Telefone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={num}
                            onChange={(e) => setNum(e.target.value)}
                        />
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Descreva como podemos ajudar"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <button type="submit">
                    Enviar
                </button>
                {status && <p className="form-status">{status}</p>}
            </form>
        </section>
    );
}
