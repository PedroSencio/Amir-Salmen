import { useEffect, useState } from "react";
import HeaderMobile from "../Mobile/Mobile-components/HeaderMobile";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";
import "./MinhaHistoriaMobile.css";

const storyMedia = [
  ["/foto-historia1.png"],
  ["/foto-historia2.png"],
  ["/foto-historia3.png", "/foto-historia3.1.png"],
  ["/foto-historia4.png", "/foto-historia4.1.png", "/foto-historia4.2.png"]
];

export default function MinhaHistoriaMobile() {
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
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handlePrev = idx => {
    setCarouselIndex(prev => {
      const next = [...prev];
      const length = storyMedia[idx].length;
      next[idx] = (prev[idx] - 1 + length) % length;
      return next;
    });
  };

  const handleNext = idx => {
    setCarouselIndex(prev => {
      const next = [...prev];
      const length = storyMedia[idx].length;
      next[idx] = (prev[idx] + 1) % length;
      return next;
    });
  };

  return (
    <div id="minha-historia-mobile">
      <PageSEO {...seoContent.historia} />
      <HeaderMobile />

      {/* HERO */}
      <section className="hero-mobile reveal-up">
        <div className="hero-mobile-copy">
          <p className="pill">Minha Trajetória</p>
          <h1>Uma jornada guiada por valores, família e serviço público</h1>
          <span>
            Da infância marcada por movimentos sociais à liderança na segurança
            pública, cada decisão foi moldada por responsabilidade coletiva,
            empatia e compromisso com a justiça.
          </span>
          <div className="hero-chips">
            <span className="chip">Serviço público desde 1968</span>
            <span className="chip">Formação multidisciplinar</span>
            <span className="chip">Foco em pessoas</span>
          </div>
        </div>

      </section>

      {/* HISTÓRIA */}
      <section className="story-mobile">
        {/* BLOCO 1 */}
        <article className="story-card row reveal-up">
          <div className="story-photo">
            <img
              src={storyMedia[0][0]}
              alt="Infância em um Brasil em ebulição"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="story-text">
            <h3>Infância em um Brasil em ebulição</h3>
            <p>
              Nasci em 10 de novembro de 1968, em um domingo marcado por profundas
              transformações no Brasil e no mundo. O país vivia os dias que antecederiam
              o AI-5, em meio a um cenário de repressão política, censura e tensão
              institucional.
            </p>
            <p>
              Esse contexto histórico não é apenas um marco temporal, mas um pano de
              fundo que ajuda a compreender a formação de valores como atenção ao
              social, senso crítico e responsabilidade coletiva.
            </p>
          </div>
        </article>

        {/* BLOCO 2 */}
        <article className="story-card row reveal-up">
          <div className="story-photo">
            <img
              src={storyMedia[1][0]}
              alt="Família que formou meus valores"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="story-text">
            <h3>Família que formou meus valores</h3>
            <p>
              Cresci em uma família profundamente conectada ao serviço público, à
              educação e ao cuidado com as pessoas. Meu pai, Fauez Mahmoud Salmen
              Hussain, filho de imigrantes libaneses, formou-se em Direito e dedicou
              sua vida à cidade de Ourinhos/SP, atuando como advogado e vereador por 40
              anos consecutivos, ao longo de nove legislaturas.
            </p>
            <p>
              Minha mãe, Dirce Zaia Salmen, filha de imigrantes italianos, foi professora
              por vocação e atuou com amor na APAE de Ourinhos. Foi nesse ambiente que
              aprendi, desde cedo, o valor da empatia, do respeito e da responsabilidade
              social.
            </p>
          </div>
        </article>

        {/* BLOCO 3 (CARROSSEL) */}
        <article className="story-card row reveal-up">
          <div className="story-photo">
            <img
              src={storyMedia[2][carouselIndex[2]]}
              alt={`Amor, parceria e o centro da minha vida - ${carouselIndex[2] + 1}`}
              loading="lazy"
              decoding="async"
            />
            {storyMedia[2].length > 1 && (
              <div className="story-controls">
                <button onClick={() => handlePrev(2)} aria-label="Anterior">‹</button>
                <div className="story-dots">
                  {storyMedia[2].map((_, i) => (
                    <span
                      key={i}
                      className={i === carouselIndex[2] ? "dot active" : "dot"}
                    />
                  ))}
                </div>
                <button onClick={() => handleNext(2)} aria-label="Próxima">›</button>
              </div>
            )}
          </div>
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
        </article>

        {/* BLOCO 4 (CARROSSEL + FORMAÇÃO) */}
        <article className="story-card row reveal-up">
          <div className="story-photo">
            <img
              src={storyMedia[3][carouselIndex[3]]}
              alt={`Estudo contínuo para servir melhor - ${carouselIndex[3] + 1}`}
              loading="lazy"
              decoding="async"
            />
            {storyMedia[3].length > 1 && (
              <div className="story-controls">
                <button onClick={() => handlePrev(3)} aria-label="Anterior">‹</button>
                <div className="story-dots">
                  {storyMedia[3].map((_, i) => (
                    <span
                      key={i}
                      className={i === carouselIndex[3] ? "dot active" : "dot"}
                    />
                  ))}
                </div>
                <button onClick={() => handleNext(3)} aria-label="Próxima">›</button>
              </div>
            )}
          </div>
          <div className="story-text">
            <h3>Estudo contínuo para servir melhor</h3>
            <p>
              Minha trajetória acadêmica foi construída de forma progressiva, unindo
              prática, técnica, direito e tecnologia, sempre orientada pelo compromisso
              com a responsabilidade social.
            </p>
            <p>
              Iniciei com a formação como Técnico Agrícola (1983–1986). Em seguida, cursei
              Engenharia Agronômica pela UNESP de Botucatu (1987–1991).
            </p>
            <p>
              Buscando aprofundar o entendimento sobre leis e justiça, formei-me Bacharel
              em Direito (1994–1999). Para acompanhar as transformações do mundo
              contemporâneo, realizei também a formação em Tecnologia em Segurança da
              Informação pela FATEC de Ourinhos (2017–2019).
            </p>
          </div>
        </article>
      </section>

      {/* COMO ATUO HOJE */}
      <section className="story-mobile reveal-up">
        <article className="story-card row">
          <div className="story-photo">
            <img
              src="/amir.png"
              alt="Delegado Amir Salmen em serviço"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="story-text">
            <p className="pill">Como atuo hoje</p>
            <h3>Delegado Amir Salmen: presença, estratégia e cuidado</h3>
            <p>
              À frente das frentes de proteção a pessoas vulneráveis e animais, Amir
              Salmen combina investigação técnica com presença em campo. Lidera equipes,
              orienta a coleta de provas e articula com Judiciário, Ministério Público,
              assistência social e saúde para garantir proteção imediata e
              responsabilização de agressores.
            </p>
            <p>
              A rotina inclui acompanhamento de operações prioritárias, definição de
              fluxos que evitam revitimização e ações educativas que aproximam a
              população dos canais de denúncia.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
