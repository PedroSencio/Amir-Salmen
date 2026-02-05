import Header from "../Desktop/Desktop-components/Header";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";
import { useState } from "react";
import "./DelegaciaAnimais.css";
import "../Desktop/Desktop-components/View5.css";

export default function DelegaciaPessoas() {
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
      src: "/amir2.png",
      title: "Escuta protegida",
      desc: "Atendimento humanizado e sigiloso para vítimas e familiares."
    },
    {
      src: "/pexels-david-kanigan-239927285-34485951.jpg",
      title: "Ações integradas",
      desc: "Equipe em campo articulando rede de apoio e proteção social."
    },
    {
      src: "/background-mobile.png",
      title: "Prevenção e campanhas",
      desc: "Orientação comunitária para reduzir riscos e violência."
    }
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex(prev => (prev + 1) % carouselItems.length);
  const prev = () => setIndex(prev => (prev - 1 + carouselItems.length) % carouselItems.length);

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
      <PageSEO {...seoContent.delegaciaPessoas} />
      <Header />

      <section className="hero-delegacia">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="pill pill-dark">Delegacia das Pessoas</p>
            <h1>Segurança e acolhimento para famílias e vulneráveis</h1>
            <span>
              Atendimento humanizado para violência doméstica, desaparecidos e apoio
              a grupos vulneráveis, com rede de proteção integrada em Londrina.
            </span>

            <div className="hero-chips hero-chips-dark">
              <span className="chip chip-dark">Acolhimento seguro</span>
              <span className="chip chip-dark">Investigação dedicada</span>
              <span className="chip chip-dark">Rede de apoio</span>
            </div>
          </div>

          <div className="map-frame">
            <img src="/fachada.jpg" alt="Fachada da Delegacia das Pessoas" loading="lazy" />
            <div className="map-badge">
              <small>Localização</small>
              <strong>Delegacia das Pessoas · Jacarezinho/PR</strong>
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
            <p className="pill pill-light">Pessoas vulneráveis</p>
            <h2>Proteção, orientação e investigação sem revitimizar</h2>
            <p>
              O Delegado Amir conduz atendimentos com escuta qualificada,
              garantindo medidas protetivas rápidas, investigação dedicada e
              articulação com saúde e assistência social.
            </p>
            <p>
              Casos de violência doméstica, desaparecidos, idosos, crianças e
              mulheres em risco são acompanhados de perto, com foco em segurança
              imediata e responsabilização de agressores.
            </p>
            <div className="view2-tags">
              <span className="chip chip-light">Escuta segura</span>
              <span className="chip chip-light">Medidas protetivas</span>
              <span className="chip chip-light">Rede integrada</span>
            </div>
          </div>
        </div>
      </section>

      <section className="areas-section">
        <div className="container areas-grid">
          <div className="areas-list">
            <p className="pill pill-light">Áreas de atuação</p>
            <h3>Municípios atendidos pela Delegacia das Pessoas</h3>
            <p className="areas-copy">
              Cobertura regional para acolher vítimas, registrar ocorrências,
              orientar famílias e integrar a rede de proteção social e de saúde.
              A sede fica em Jacarezinho, com atendimentos itinerantes conforme a
              necessidade.
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
                title="Mapa - Delegacia das Pessoas Jacarezinho"
                src="https://www.google.com/maps?q=-23.1601425,-49.9741426&hl=pt-BR&z=16&output=embed"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="location-note">
              Plantões e visitas técnicas são agendados conforme a gravidade e o
              fluxo de ocorrências. Entre em contato para orientação imediata.
            </p>
          </div>
        </div>
      </section>

      <section id="view5">
        <div className="form-copy">
          <p>Denúncia</p>
          <h1>Percebeu risco? Proteja, não se omita.</h1>
          <span>
            Violência contra pessoas vulneráveis exige ação rápida. Envie sua
            denúncia com sigilo e orientação imediata.
          </span>
          <span>
            Como e quando denunciar?{" "}
            <a href="/ajuda">veja as orientações</a>
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
