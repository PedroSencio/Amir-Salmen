import Header from "../Desktop/Desktop-components/Header";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";
import { useState } from "react";
import "./DelegaciaAnimais.css";
import "../Desktop/Desktop-components/View5.css";

export default function DelegaciaAnimais() {
  const municipios = [
    "Abatiá",
    "Cambará",
    "Carlópolis",
    "Conselheiro Mairink",
    "Guapirama",
    "Ibaiti",
    "Jaboti",
    "Jacarezinho (Sede SDP)",
    "Japira",
    "Joaquim Távora",
    "Jundiaí do Sul",
    "Pinhalão",
    "Quatiguá",
    "Ribeirão Claro",
    "Ribeirão do Pinhal",
    "Salto do Itararé",
    "Santana do Itararé",
    "Santo Antônio da Platina",
    "São José da Boa Vista",
    "Siqueira Campos",
    "Tomazina",
    "Wenceslau Braz"
  ];

  const carouselItems = [
    {
      src: "f2735b5a-b873-4d5a-8632-d6b65357b866.jpg",
      title: "Operação de resgate",
      desc: "Equipe retirando cães em situação de maus-tratos."
    },
    {
      src: "f3a4ebef-6b33-4b09-96af-5969ce5a8c94.jpg",
      title: "Delegado Amir em ação",
      desc: "Vistoria em ocorrência com denúncia confirmada."
    },
  ];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % carouselItems.length);
  const prev = () => setIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");

    fetch("http://127.0.0.1:5001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        nome,
        email,
        num,
        desc
      })
    })
      .then(async res => {
        const text = await res.text();
        console.log("STATUS:", res.status);
        console.log("RESPOSTA:", text);
        if (res.ok) {
          setStatus("Mensagem enviada com sucesso!");
          setNome("");
          setEmail("");
          setNum("");
          setDesc("");
        } else {
          setStatus("Não foi possível enviar. Tente novamente.");
        }
      })
      .catch(err => {
        console.error(err);
        setStatus("Não foi possível enviar. Tente novamente.");
      });
  }

  return (
    <div id="delegacia-page">
      <PageSEO {...seoContent.delegaciaAnimais} />
      <Header />

      <section className="hero-delegacia">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="pill pill-dark">Delegacia dos Animais</p>
            <h1>Proteção imediata para quem não pode se defender</h1>
            <span>
              Denúncias de maus-tratos, resgates e investigação especializada para
              garantir segurança e dignidade aos animais em Londrina e região.
            </span>

            <div className="hero-chips hero-chips-dark">
              <span className="chip chip-dark">Plantão 24h</span>
              <span className="chip chip-dark">Resgate e acolhimento</span>
              <span className="chip chip-dark">Rede de adoção</span>
            </div>
          </div>

          <div className="map-frame">
            <img src="/fachada.jpg" alt="Fachada da Delegacia dos Animais" loading="lazy" />
            <div className="map-badge">
              <small>Localização</small>
              <strong>Delegacia dos Animais · Jacarezinho/PR</strong>
              <span>Av. Getúlio Vargas, 380 · Centro · CEP 86400-000</span>
            </div>
          </div>
        </div>
      </section>
      <section className="view2-delegacia light">
        <div className="container view2-grid">
          <div className="carousel-card">
            <div className="carousel-image">
              <img
                src={carouselItems[index].src}
                alt={carouselItems[index].title}
                loading="lazy"
              />
              <div className="carousel-overlay">
                <strong>{carouselItems[index].title}</strong>
                <span>{carouselItems[index].desc}</span>
              </div>
            </div>
            <div className="carousel-actions">
              <button onClick={prev} aria-label="Anterior">‹</button>
              <div className="dots">
                {carouselItems.map((_, i) => (
                  <span key={i} className={i === index ? "dot active" : "dot"} />
                ))}
              </div>
              <button onClick={next} aria-label="Próximo">›</button>
            </div>
          </div>

          <div className="view2-copy white">
            <p className="pill pill-light">Nosso trabalho</p>
            <h2>Em Defesa de Quem Não Pode se Defender</h2>
            <p>
                O Delegado Amir Salmen atua diretamente nas ocorrências de proteção animal, priorizando a retirada imediata do animal do risco, o cuidado adequado e a produção de provas para garantir a responsabilização dos envolvidos.            </p>
            <p>
                Além das ações de resgate, o trabalho inclui prevenção e conscientização. Campanhas educativas, apoio a voluntários e diálogo com a comunidade fortalecem os canais de denúncia e ampliam a proteção, garantindo mais agilidade e segurança em cada atendimento.            </p>
            <div className="view2-tags">
              <span className="chip chip-light">Liderança em campo</span>
              <span className="chip chip-light">Prova e responsabilização</span>
              <span className="chip chip-light">Educação e prevenção</span>
            </div>
          </div>
        </div>
      </section>

      <section className="areas-section">
        <div className="container areas-grid">
          <div className="areas-list">
            <p className="pill pill-light">Áreas de atuação</p>
            <h3>Municípios atendidos pela Delegacia dos Animais</h3>
            <p className="areas-copy">
              Cobertura regional para investigar denúncias, orientar a população
              e integrar a rede de proteção animal. A sede operacional fica em
              Jacarezinho, com atendimentos itinerantes conforme a urgência.
            </p>
            <ul className="municipios">
              {municipios.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          <div className="location-card">
            <div className="location-head">
              <span className="pill pill-light">Localização</span>
              <strong>Av. Getúlio Vargas, 380 · Centro · Jacarezinho/PR</strong>
              <small>CEP 86400-000</small>
            </div>
            <div className="location-map">
              <iframe
                title="Mapa - Delegacia dos Animais Jacarezinho"
                src="https://www.google.com/maps?q=-23.1601425,-49.9741426&hl=pt-BR&z=16&output=embed"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="location-note">
              Plantões e visitas técnicas são agendados conforme a gravidade e o
              fluxo de denúncias. Fale conosco para orientação imediata.
            </p>
          </div>
        </div>
      </section>

      <section id="view5">
        <div className="form-copy">
          <p>Denúncia</p>
          <h1>Viu maus-tratos? Não seja cúmplice.</h1>
          <span>
            Denuncie agora e proteja quem não pode se defender. Atendemos cada
            caso com sigilo e ação rápida.
          </span>
          <span>
            Quer saber como e quando denunciar?{" "}
            <a href="/ajuda">clique aqui</a>
          </span>
        </div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nome completo</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
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
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setNum(e.target.value)}
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Descreva o caso ou a denúncia"
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </div>
  );
}
