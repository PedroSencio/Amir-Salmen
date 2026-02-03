import "./NossoTrabalho.css";
import Header from "../Desktop/Desktop-components/Header";
import { useEffect } from "react";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";

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
    link: "/bc0cb358-91ba-4dfb-ac1f-639099edbd44.jpg"
  },
  {
    tag: "Proteção Animal",
    title: "Defesa e bem-estar dos animais",
    description:
      "Resgates 24h, acompanhamento de denúncias e suporte jurídico para cada vida animal receber cuidado digno.",
    actions: [
      "Resgates 24h em parceria com ONGs",
      "Acompanhamento de denúncias de maus-tratos",
      "Campanhas de adoção e castração solidária"
    ],
    color: "animal",
    link: "/b2b8485d-36f7-4e39-863f-c7d854b4515f.png"
  },
  {
    tag: "Proteção aos Vulneráveis",
    title: "Rede de apoio às pessoas em risco",
    description:
      "Articulação com políticas de acolhimento, apoio psicológico e encaminhamentos emergenciais para mulheres, crianças e idosos.",
    actions: [
      "Plantão social e assistência jurídica",
      "Programas educativos em escolas e comunidades",
      "Parcerias para acolhimento imediato"
    ],
    color: "social",
    link: "/826ee30b-cc9b-4ba9-a01a-d1f642a5be5a.png"
  }
];

export default function NossoTrabalhoDesktop() {
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
    <div>
      <PageSEO {...seoContent.trabalho} />
      <Header color="light" />
      <main id="nosso-trabalho">
        {/* HERO */}
        <section className="work-hero reveal-up">
          <div className="hero-text">
            <p className="pill">Nosso Trabalho</p>
            <h1>Cuidar de quem mais precisa</h1>
            <span>
              Compromisso diário com segurança pública, justiça e proteção da
              sociedade, aliando técnica, responsabilidade e humanidade.
            </span>
            <div className="hero-ctas">
              <button type="button" onClick={handleContact} className="primary">
                Quero ajudar
              </button>
              <button
                type="button"
                onClick={() =>
                  window.scrollTo({ top: 900, behavior: "smooth" })
                }
                className="ghost"
              >
                Conhecer ações
              </button>
            </div>
          </div>
          <div className="hero-data">
            <div className="data-card">
              <strong>180+</strong>
              <p>Animais resgatados e reabilitados</p>
            </div>
            <div className="data-card">
              <strong>320+</strong>
              <p>Pessoas acolhidas em ações sociais</p>
            </div>
            <div className="data-card secondary">
              <strong className="num-laranja">15</strong>
              <p>Campanhas ativas em 2024</p>
            </div>
          </div>
        </section>

        {/* SOBRE A ATUAÇÃO */}
        <section
          className="about-work reveal-up"
          style={{ transitionDelay: "0.05s" }}
        >
          <div className="section-head">
            <p className="pill">Atuação</p>
            <h2>Segurança pública com técnica e proximidade</h2>
          </div>
          <div className="about-grid">
            <p>
              Atuamos na condução de investigações, enfrentamento à criminalidade
              e coordenação de ações estratégicas para garantir tranquilidade,
              ordem e respeito aos direitos fundamentais. Sob liderança do
              Delegado Amir Salmen, a Polícia Civil do Paraná foca atuação técnica,
              responsável e humanizada.
            </p>
            <p>
              Na 12ª Subdivisão Policial de Jacarezinho e região, conduzimos operações
              integradas, fortalecemos parcerias institucionais e adotamos estratégias
              que elevam a resolução de crimes graves. Segurança pública vai além da
              repressão: engajamos causas sociais, aproximamos comunidade e reforçamos
              políticas preventivas, incluindo proteção animal.
            </p>
            <p>
              Participamos de seminários e debates regionais, dialogando com autoridades
              e sociedade civil para aprimorar práticas e resultados. Reconhecimentos
              refletem esforço coletivo de uma equipe comprometida com ética, dedicação
              e responsabilidade social.
            </p>
          </div>
        </section>

        {/* ÁREAS DE FOCO */}
        <section
          className="work-grid-section reveal-up"
          style={{ transitionDelay: "0.08s" }}
        >
          <div className="section-head">
            <p className="pill">Frentes de atuação</p>
            <h2>Onde concentramos esforços</h2>
            <span>
              Operações, acolhimento e educação caminhando juntos para gerar
              impacto real nas comunidades.
            </span>
          </div>

          <div className="work-cards">
            {focusAreas.map((area, idx) => (
              <article
                key={area.tag}
                className={`work-card ${area.color} reveal-up`}
                style={{ transitionDelay: `${0.04 * idx}s` }}
              >
                <span className="work-tag">{area.tag}</span>
                <div className="work-image">
                  <img src={area.link} alt={area.title} loading="lazy" />
                </div>
                <h3>{area.title}</h3>
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

        {/* RESULTADOS */}
        <section
          className="metrics reveal-up"
          style={{ transitionDelay: "0.16s" }}
        >
          <div className="metric-card">
            <small>Operações conjuntas</small>
            <strong>40+</strong>
            <p>ações integradas com ONGs e rede de saúde.</p>
          </div>
          <div className="metric-card">
            <small>Resgates emergenciais</small>
            <strong>90%</strong>
            <p>tempo de resposta abaixo de 2 horas.</p>
          </div>
          <div className="metric-card">
            <small>Comunidade</small>
            <strong>12 cidades</strong>
            <p>cobertas por campanhas de educação e prevenção.</p>
          </div>
          <div className="metric-card">
            <small>Operações policiais</small>
            <strong>40+</strong>
            <p>ações focadas em segurança pública regional.</p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          className="work-footer reveal-up"
          style={{ transitionDelay: "0.22s" }}
        >
          <div>
            <h3>Como você pode apoiar?</h3>
            <p>
              Denuncie maus-tratos, participe das campanhas ou seja voluntário.
              Cada gesto amplia a rede de proteção.
            </p>
          </div>
          <button type="button" onClick={handleContact}>
            Falar com a equipe
          </button>
        </section>
      </main>
    </div>
  );
}
