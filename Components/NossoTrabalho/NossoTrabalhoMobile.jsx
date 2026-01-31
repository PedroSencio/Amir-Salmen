import "./NossoTrabalhoMobile.css";
import HeaderMobile from "../Mobile/Mobile-components/HeaderMobile";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";
import { useEffect } from "react";

const focusAreas = [
  {
    tag: "Segurança Pública",
    title: "Investigação e operações integradas",
    description:
      "Planejamento, inteligência e resposta rápida para reduzir criminalidade, proteger famílias e garantir ordem.",
    actions: [
      "Operações conjuntas com forças locais e estaduais",
      "Investigação qualificada e uso de tecnologia",
      "Patrulhamento orientado por dados e demandas da comunidade"
    ],
    color: "security",
    image: "/bc0cb358-91ba-4dfb-ac1f-639099edbd44.jpg"
  },
  {
    tag: "Proteção Animal",
    title: "Defesa e bem-estar dos animais",
    description:
      "Resgates 24h, acompanhamento de denúncias e apoio jurídico para garantir cuidado digno a cada vida animal.",
    actions: [
      "Resgates 24h em parceria com ONGs",
      "Acompanhamento de denúncias de maus-tratos",
      "Campanhas de adoção e castração solidária"
    ],
    color: "animal",
    image: "/b2b8485d-36f7-4e39-863f-c7d854b4515f.png"
  },
  {
    tag: "Proteção aos Vulneráveis",
    title: "Rede de apoio às pessoas em risco",
    description:
      "Articulação com acolhimento, apoio psicológico e encaminhamentos emergenciais para mulheres, crianças e idosos.",
    actions: [
      "Plantão social e assistência jurídica",
      "Programas educativos em escolas e comunidades",
      "Parcerias para acolhimento imediato"
    ],
    color: "social",
    image: "/826ee30b-cc9b-4ba9-a01a-d1f642a5be5a.png"
  }
];

export default function NossoTrabalhoMobile() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-up");
    if (!els.length) return;
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
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleContact = () => {
    window.open(
      "https://wa.me/5543991616441?text=Olá,%20vim%20pelo%20site!",
      "_blank"
    );
  };

  return (
    <div id="nosso-trabalho-mobile">
      <PageSEO {...seoContent.trabalho} />
      <HeaderMobile />

      {/* HERO */}
      <section className="hero-mobile reveal-up">
        <p className="pill">Nosso Trabalho</p>
        <h1>Cuidar de quem mais precisa</h1>
        <span>
          Segurança pública com responsabilidade e humanidade, unindo proteção
          animal e apoio a pessoas vulneráveis.
        </span>
        <div className="hero-actions">
          <button className="btn-primary" onClick={handleContact}>
            Quero ajudar
          </button>
          <button
            className="btn-ghost"
            onClick={() =>
              document
                .getElementById("work-areas")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver frentes
          </button>
        </div>
      <div className="hero-stats">
        <div className="stat-card">
          <small>Animais resgatados</small>
          <strong>180+</strong>
          <span>Reabilitação e adoção assistida</span>
        </div>
        <div className="stat-card">
          <small>Pessoas acolhidas</small>
          <strong>320+</strong>
          <span>Rede de apoio e proteção</span>
        </div>
        <div className="stat-card">
          <small>Operações policiais</small>
          <strong>40+</strong>
          <span>Focadas em segurança pública regional</span>
        </div>
      </div>
      </section>

      {/* SOBRE */}
      <section className="about-mobile reveal-up">
        <p className="pill">Atuação</p>
        <h2>Segurança pública próxima da comunidade</h2>
        <p>
          Conduzimos investigações, operações integradas e campanhas educativas
          para garantir tranquilidade, ordem e respeito aos direitos
          fundamentais.
        </p>
        <p>
          Atuamos com parcerias institucionais, ONGs e rede de saúde para
          ampliar a resposta em casos de maus-tratos, violência e emergências
          sociais.
        </p>
      </section>

      {/* FRONTS */}
      <section id="work-areas" className="work-areas-mobile reveal-up">
        <div className="section-head">
          <p className="pill">Frentes de atuação</p>
          <h3>Onde concentramos esforços</h3>
          <span>
            Operações, acolhimento e educação caminhando juntos para gerar
            impacto real.
          </span>
        </div>

        <div className="area-list">
          {focusAreas.map(area => (
            <article key={area.tag} className={`area-card ${area.color}`}>
              <span className="area-tag">{area.tag}</span>
              <div className="area-image">
                <img src={area.image} alt={area.title} loading="lazy" />
              </div>
              <h4>{area.title}</h4>
              <p>{area.description}</p>
              <ul>
                {area.actions.map(action => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="metrics-mobile reveal-up">
        <div className="metric-card">
          <small>Operações conjuntas</small>
          <strong>40+</strong>
          <p>Ações com ONGs e rede de saúde.</p>
        </div>
        <div className="metric-card">
          <small>Resgates emergenciais</small>
          <strong>90%</strong>
          <p>Resposta abaixo de 2 horas.</p>
        </div>
        <div className="metric-card">
          <small>Comunidade</small>
          <strong>12 cidades</strong>
          <p>Campanhas de educação e prevenção.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-mobile reveal-up">
        <div>
          <h3>Como você pode apoiar?</h3>
          <p>
            Denuncie maus-tratos, participe das campanhas ou seja voluntário.
            Cada gesto amplia a rede de proteção.
          </p>
        </div>
        <button onClick={handleContact}>Falar com a equipe</button>
      </section>
    </div>
  );
}
