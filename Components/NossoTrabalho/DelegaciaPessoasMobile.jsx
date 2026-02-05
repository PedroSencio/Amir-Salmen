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
  { src: "/background-mobile.png", title: "Escuta segura", desc: "Atendimento protegido para vítimas e familiares." },
  { src: "/amir2.png", title: "Delegado em campo", desc: "Articulação com rede de apoio e medidas protetivas." },
  { src: "/pexels-david-kanigan-239927285-34485951.jpg", title: "Ações integradas", desc: "Equipe coordena respostas rápidas e humanizadas." }
];

export default function DelegaciaPessoasMobile() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % slider.length);
  const prev = () => setIdx((idx - 1 + slider.length) % slider.length);
  const [showAll, setShowAll] = useState(false);

  const visibleMunicipios = showAll ? municipios : municipios.slice(0, 8);

  return (
    <div id="delegacia-mobile">
      <PageSEO {...seoContent.delegaciaPessoas} />
      <HeaderMobile />

      <section className="hero-mobile-delegacia">
        <p className="pill">Delegacia das Pessoas</p>
        <h1>Segurança e acolhimento para famílias e vulneráveis</h1>
        <span>
          Escuta qualificada, medidas protetivas rápidas e conexão com saúde e
          assistência social para evitar revitimização.
        </span>

        <div className="hero-chips">
          <span className="chip chip-dark">Escuta segura</span>
          <span className="chip chip-dark">Medidas protetivas</span>
          <span className="chip chip-dark">Rede integrada</span>
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
          <h2>Delegado Amir à frente do acolhimento</h2>
          <p>
            Atendimento humanizado, sigilo e orientação clara para cada caso de
            violência, desaparecimento ou risco social, com articulação imediata
            para medidas protetivas.
          </p>
          <p>
            Integração com rede de saúde e assistência social garante suporte
            contínuo às vítimas e suas famílias.
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
        <img src="/fachada.jpg" alt="Fachada da Delegacia das Pessoas" loading="lazy" />
        <div className="map-card__badge">
          <small>Localização</small>
          <strong>Delegacia das Pessoas · Jacarezinho/PR</strong>
          <span>Av. Getúlio Vargas, 380 · Centro · CEP 86400-000</span>
        </div>
      </section>

      <section className="form-mobile-wrap">
        <p className="pill">Denúncia</p>
        <h2>Percebeu risco? Proteja, denuncie.</h2>
        <p>Escuta segura, sigilo garantido e orientação imediata.</p>
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
