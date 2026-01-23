import { useState } from "react";
import "./View5.css";

export default function View5() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        num: "",
        desc: ""
    });
    const [status, setStatus] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus("");

        try {
            await fetch("http://127.0.0.1:5000", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            setStatus("Dados enviados com sucesso!");
            setForm({ nome: "", email: "", num: "", desc: "" });
        } catch (error) {
            setStatus("Não foi possível enviar agora. Tente novamente.");
        }
    }

    return (
        <section id="mobile-view5">
            <h2>Fale conosco</h2>
            <p>Denúncias, dúvidas ou apoio. Envie sua mensagem e retornaremos.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome completo
                    <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                    />
                </label>
                <label>
                    E-mail
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="voce@email.com"
                    />
                </label>
                <label>
                    Telefone
                    <input
                        type="tel"
                        name="num"
                        value={form.num}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                    />
                </label>
                <label>
                    Mensagem
                    <textarea
                        name="desc"
                        rows="4"
                        value={form.desc}
                        onChange={handleChange}
                        placeholder="Descreva como podemos ajudar"
                    />
                </label>
                <button type="submit">Enviar</button>
                {status && <span className="status">{status}</span>}
            </form>
        </section>
    );
}
