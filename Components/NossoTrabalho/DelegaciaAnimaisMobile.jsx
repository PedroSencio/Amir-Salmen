import { useState } from "react";
import HeaderMobile from "../Mobile/Mobile-components/HeaderMobile";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";
import "./DelegaciaMobile.css";

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

const slider = [
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

export default function DelegaciaAnimaisMobile() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % slider.length);
  const prev = () => setIdx((idx - 1 + slider.length) % slider.length);
  const [showAll, setShowAll] = useState(false);

  const visibleMunicipios = showAll ? municipios : municipios.slice(0, 8);

  return (
    <div id="delegacia-mobile">
      <PageSEO {...seoContent.delegaciaAnimais} />
      <HeaderMobile />

      <section className="hero-mobile-delegacia">
        <p className="pill">Delegacia dos Animais</p>
        <h1>Proteção imediata para os animais de Jacarezinho e região</h1>
        <span>
          Canal direto para denúncias, resgate e acolhimento. Investigação,
          prova qualificada e adoção responsável para garantir segurança.
        </span>

        <div className="hero-chips">
          <span className="chip chip-dark">Plantão 24h</span>
          <span className="chip chip-dark">Resgate rápido</span>
          <span className="chip chip-dark">Rede de adoção</span>
        </div>
      </section>

      <section className="acao-mobile">
        <div className="acao-media">
          <img src={slider[idx].src} alt={slider[idx].title} loading="lazy" />
          <div className="acao-overlay">
            <strong>{slider[idx].title}</strong>
            <span>{slider[idx].desc}</span>
          </div>
          <div className="acao-controls">
            <button onClick={prev} aria-label="Anterior">‹</button>
            <div className="dots">
              {slider.map((_, i) => (
                <span key={i} className={i === idx ? "dot active" : "dot"} />
              ))}
            </div>
            <button onClick={next} aria-label="Próximo">›</button>
          </div>
        </div>

        <div className="acao-text">
          <p className="pill pill-light">Como atuamos</p>
          <h2>Delegado Amir em campo com a equipe</h2>
          <p>
            Liderança presente nas ocorrências, orientação para coleta de provas
            e articulação com órgãos ambientais e clínicas parceiras para resgate,
            cuidados e responsabilização.
          </p>
          <p>
            Campanhas educativas e fluxos de atendimento garantem rapidez, sigilo
            e acolhimento às vítimas.
          </p>
        </div>
      </section>

      <section className="areas-mobile">
        <p className="pill pill-light">Áreas de atuação</p>
        <h3>Municípios atendidos</h3>
        <ul className="municipios-mobile">
          {visibleMunicipios.map(city => (
            <li key={city}>{city}</li>
          ))}
        </ul>
        {municipios.length > 8 && (
          <button className="btn-toggle" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Mostrar menos" : "Ver todos"}
          </button>
        )}
      </section>

      <section className="map-card">
        <img src="/fachada.jpg" alt="Fachada da Delegacia dos Animais" loading="lazy" />
        <div className="map-card__badge">
          <small>Localização</small>
          <strong>Delegacia dos Animais · Jacarezinho/PR</strong>
          <span>Av. Getúlio Vargas, 380 · Centro · CEP 86400-000</span>
        </div>
      </section>

      <section className="form-mobile-wrap">
        <p className="pill">Denúncia</p>
        <h2>Viu maus-tratos? Denuncie agora.</h2>
        <p>Sigilo e acolhimento garantidos. Nossa equipe responde rápido.</p>
        <form className="form-mobile" onSubmit={e => e.preventDefault()}>
          <label>Nome</label>
          <input type="text" placeholder="Seu nome" />
          <label>Telefone ou e-mail</label>
          <input type="text" placeholder="(00) 00000-0000 / voce@email.com" />
          <label>Descreva o caso</label>
          <textarea rows="4" placeholder="Conte o que aconteceu" />
          <button type="submit">Enviar denúncia</button>
        </form>
      </section>
    </div>
  );
}
