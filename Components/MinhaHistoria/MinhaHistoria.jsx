import "./MinhaHistoria.css";
import Header from "../Desktop/Desktop-components/Header";
import { useEffect, useState } from "react";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";

const storyMedia = [
  ["/foto-historia1.png"],
  ["/foto-historia2.png"],
  ["/foto-historia3.png", "/foto-historia3.1.png"],
  ["/foto-historia4.png", "/foto-historia4.1.png", "/foto-historia4.2.png"]
];

export default function MinhaHistoriaDesktop() {
  const [carouselIndex, setCarouselIndex] = useState(storyMedia.map(() => 0));

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

  return (
    <div>
      <PageSEO {...seoContent.historia} />
      <Header />

      <section id="trajetoria-desktop">
        {/* ===================== HERO (DARK) ===================== */}
        <section className="hero-dark">
          <div className="container hero-grid reveal-up">
            <div className="trajetoria-hero hero-dark-text">
              <p className="pill pill-dark">Minha Trajetória</p>

              <h1>Uma jornada guiada por valores, família e serviço público</h1>

              <span>
                Da infância marcada por movimentos sociais à liderança na segurança
                pública, cada decisão foi moldada por responsabilidade coletiva,
                empatia e compromisso com a justiça.
              </span>

              <div className="hero-chips hero-chips-dark">
                <span className="chip chip-dark">Serviço público desde 1968</span>
                <span className="chip chip-dark">Formação multidisciplinar</span>
                <span className="chip chip-dark">Foco em pessoas</span>
              </div>
            </div>

            <div className="hero-photo">
              <div className="photo-frame photo-frame-dark">
                <img src="/amir2.png" alt="Delegado Amir Salmen" />
                <div className="photo-badge">
                  <small>Desde 2003</small>
                  <strong>Polícia Civil PR</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== HISTÓRIA (LIGHT) ===================== */}
        <section className="story-light">
          <div className="container">
            <header className="story-head reveal-up">
              <p className="pill">História e formação</p>
              <h2>Origens, família e o caminho do conhecimento</h2>
              <p className="story-sub">
                Uma narrativa em seções amplas, alternando texto e imagem — sem caixas,
                com leitura fluida e foco no conteúdo.
              </p>
            </header>

            {/* BLOCO 1 */}
            <div className="story-row text-first reveal-up">
              <div className="story-text">
                <h3>Infância em um Brasil em ebulição</h3>
                <p>
                  Nasci em 10 de novembro de 1968, em um domingo marcado por profundas
                  transformações no Brasil e no mundo. O país vivia os dias que antecederiam
                  o AI-5, em meio a um cenário de repressão política, censura e tensão
                  institucional. No mundo, conflitos armados, protestos estudantis e
                  movimentos culturais questionavam antigas estruturas de poder.
                </p>
                <p>
                  Esse contexto histórico não é apenas um marco temporal, mas um pano de
                  fundo que ajuda a compreender a formação de valores como atenção ao
                  social, senso crítico e responsabilidade coletiva.
                </p>
              </div>

              <div className="story-media">
                <div className="media-frame">
                  <img src={storyMedia[0][0]} alt="Foto história 1" />
                </div>
              </div>
            </div>

            {/* BLOCO 2 */}
            <div
              className="story-row image-first reveal-up"
              style={{ transitionDelay: "0.08s" }}
            >
              <div className="story-media">
                <div className="media-frame">
                  <img src={storyMedia[1][0]} alt="Foto história 2" />
                </div>
              </div>

              <div className="story-text">
                <h3>Família que formou meus valores</h3>
                <p>
                  Cresci em uma família profundamente conectada ao serviço público, à
                  educação e ao cuidado com as pessoas. Meu pai, Fauez Mahmoud Salmen
                  Hussain, filho de imigrantes libaneses, formou-se em Direito e dedicou
                  sua vida à cidade de Ourinhos/SP, atuando como advogado e vereador por 40
                  anos consecutivos, ao longo de nove legislaturas. Sua trajetória pública
                  foi marcada pelo compromisso com a política, o diálogo e a comunidade.
                </p>
                <p>
                  Minha mãe, Dirce Zaia Salmen, filha de imigrantes italianos, foi professora
                  por vocação. Atuou com amor e dedicação na APAE de Ourinhos, instituição
                  que considerava sua segunda casa. Seu legado permanece vivo, inclusive em
                  uma sala que leva seu nome, em homenagem aos anos dedicados à educação
                  inclusiva. Foi nesse ambiente que aprendi, desde cedo, o valor da empatia,
                  do respeito e da responsabilidade social.
                </p>
              </div>
            </div>

            {/* BLOCO 3 (CAROUSEL) */}
            <div
              className="story-row text-first reveal-up"
              style={{ transitionDelay: "0.12s" }}
            >
              <div className="story-text">
                <h3>Amor, parceria e o centro da minha vida</h3>
                <p>
                  Em 1987, iniciei uma história de amor com Sônia Maria Meneguim, construída
                  em um tempo em que as relações eram fortalecidas por cartas, espera e
                  presença. Após anos de namoro, ficamos noivos em 1993 e nos casamos em 1º
                  de julho de 1994, data simbólica marcada também pelo nascimento do Plano
                  Real no Brasil.
                </p>
                <p>
                  Dessa união nasceram nossas filhas: Beatriz, em 1999, sensível, carinhosa e
                  artista por natureza; e Vitória, em 2004, determinada e de personalidade
                  forte. A família sempre foi e continua sendo um dos pilares centrais da
                  minha trajetória.
                </p>
              </div>

              <div className="story-media">
                <div className="media-frame media-frame-carousel">
                  <img
                    src={storyMedia[2][carouselIndex[2]]}
                    alt={`Foto história 3 - ${carouselIndex[2] + 1}`}
                  />

                  {storyMedia[2].length > 1 && (
                    <>
                      <button
                        aria-label="Anterior"
                        onClick={() =>
                          setCarouselIndex(prev => {
                            const next = [...prev];
                            next[2] =
                              (prev[2] - 1 + storyMedia[2].length) %
                              storyMedia[2].length;
                            return next;
                          })
                        }
                        className="nav-btn left"
                      >
                        ‹
                      </button>

                      <button
                        aria-label="Próxima"
                        onClick={() =>
                          setCarouselIndex(prev => {
                            const next = [...prev];
                            next[2] = (prev[2] + 1) % storyMedia[2].length;
                            return next;
                          })
                        }
                        className="nav-btn right"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* BLOCO 4 (CAROUSEL + FORMAÇÃO) */}
            <div
              className="story-row image-first reveal-up"
              style={{ transitionDelay: "0.16s" }}
            >
              <div className="story-media">
                <div className="media-frame media-frame-carousel">
                  <img
                    src={storyMedia[3][carouselIndex[3]]}
                    alt={`Foto história 4 - ${carouselIndex[3] + 1}`}
                  />

                  {storyMedia[3].length > 1 && (
                    <>
                      <button
                        aria-label="Anterior"
                        onClick={() =>
                          setCarouselIndex(prev => {
                            const next = [...prev];
                            next[3] =
                              (prev[3] - 1 + storyMedia[3].length) %
                              storyMedia[3].length;
                            return next;
                          })
                        }
                        className="nav-btn left"
                      >
                        ‹
                      </button>

                      <button
                        aria-label="Próxima"
                        onClick={() =>
                          setCarouselIndex(prev => {
                            const next = [...prev];
                            next[3] = (prev[3] + 1) % storyMedia[3].length;
                            return next;
                          })
                        }
                        className="nav-btn right"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="story-text">
                <h3>Estudo contínuo para servir melhor</h3>
                <p>
                  Minha trajetória acadêmica foi construída de forma progressiva, unindo
                  prática, técnica, direito e tecnologia, sempre orientada pelo compromisso
                  com a responsabilidade social.
                </p>
                <p>
                  Iniciei com a formação como Técnico Agrícola (1983–1986), que me trouxe
                  disciplina, contato com a realidade prática e respeito ao meio ambiente.
                  Em seguida, cursei Engenharia Agronômica pela UNESP de Botucatu (1987–1991),
                  ampliando a visão estratégica, o planejamento e a compreensão do impacto
                  das decisões humanas no território.
                </p>
                <p>
                  Buscando aprofundar o entendimento sobre leis, instituições e justiça,
                  formei-me Bacharel em Direito (1994–1999), consolidando o Direito como
                  ferramenta de equilíbrio e transformação social. Atento às transformações
                  do mundo contemporâneo, realizei também a formação em Tecnologia em
                  Segurança da Informação pela FATEC de Ourinhos (2017–2019), reforçando a
                  importância do aprendizado contínuo, da proteção da informação e da
                  responsabilidade no ambiente digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== COMO ATUO HOJE (MANTIDO) ===================== */}
        <section className="focus-section">
          <div className="container">
            <div className="focus-wrap reveal-up" style={{ transitionDelay: "0.2s" }}>
              <header className="focus-head">
                <p className="pill">Segurança pública em foco</p>
                <h2>Como atuo hoje</h2>
                <p className="focus-sub">
                  Resultados, decisões e frentes prioritárias apresentados de forma clara e direta.
                </p>
              </header>

              <div className="focus-grid">
                <section className="focus-main">
                  <div className="focus-main-top">
                    <span className="focus-badge">Dado-chave</span>
                    <h3>Resolução de homicídios (2024)</h3>
                  </div>

                  <div className="focus-metric">
                    <div className="focus-metric-number">≈90%</div>
                    <div className="focus-metric-desc">
                      30 de 33 casos solucionados pela equipe.
                    </div>
                  </div>

                  <div className="focus-tags">
                    <span className="tag">Planejamento</span>
                    <span className="tag">Respostas rápidas</span>
                    <span className="tag">Equipe especializada</span>
                  </div>

                  <div className="focus-divider" />

                  <div className="focus-mini-stats">
                    <div className="mini-stat">
                      <span className="mini-stat-label">Operações</span>
                      <span className="mini-stat-value">40+</span>
                    </div>
                    <div className="mini-stat">
                      <span className="mini-stat-label">Frentes</span>
                      <span className="mini-stat-value">3</span>
                    </div>
                    <div className="mini-stat">
                      <span className="mini-stat-label">Foco</span>
                      <span className="mini-stat-value">Resposta</span>
                    </div>
                  </div>
                </section>

                <section className="focus-list">
                  <article className="focus-card">
                    <p className="focus-kicker">Operações</p>
                    <h4>Integração e resposta</h4>
                    <p>
                      Mais de 40 operações conjuntas com forças locais e estaduais para reduzir a criminalidade.
                    </p>
                  </article>

                  <article className="focus-card">
                    <p className="focus-kicker">Delegacia Especializada</p>
                    <h4>Proteção aos Animais</h4>
                    <p>
                      Pioneira na região, ampliando atendimento e combate a maus-tratos com postura humanizada.
                    </p>
                  </article>

                  <article className="focus-card">
                    <p className="focus-kicker">Comando</p>
                    <h4>Coordenação da 12ª SDP</h4>
                    <p>
                      Gestão de equipes, metas claras e transparência para entregar respostas rápidas à sociedade.
                    </p>
                  </article>
                </section>
              </div>

              <footer className="focus-footer">
                <div className="focus-foot-card">
                  <span className="foot-tag">Missão</span>
                  <h3>Segurança com humanidade</h3>
                  <p>Técnica, ética e respeito às pessoas orientam cada investigação.</p>
                </div>

                <div className="focus-foot-card">
                  <span className="foot-tag">Valores</span>
                  <h3>Compromisso diário</h3>
                  <p>
                    Família, serviço público e responsabilidade social unidos para proteger quem mais precisa.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
