import "./MinhaHistoriaMobile.css";
import HeaderMobile from "../Mobile/Mobile-components/HeaderMobile";
import { useEffect, useState } from "react";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";

const storyMedia = [
  ["/foto-historia1.png"],
  ["/foto-historia2.png"],
  ["/foto-historia3.png", "/foto-historia3.1.png"],
  ["/foto-historia4.png", "/foto-historia4.1.png", "/foto-historia4.2.png"]
];

const storyBlocks = [
  {
    title: "🌍 Um nascimento em um mundo em ebulição",
    paragraphs: [
      "Nasci em 10 de novembro de 1968, em um domingo marcado por profundas transformações no Brasil e no mundo. O país vivia os dias que antecederiam o AI-5, em meio a repressão, censura e tensão institucional.",
      "Esse contexto histórico formou valores como atenção ao social, senso crítico e responsabilidade coletiva."
    ]
  },
  {
    title: "👨‍👩‍👦 Família: onde tudo começou",
    paragraphs: [
      "Cresci em uma família ligada ao serviço público, educação e cuidado com pessoas. Meu pai, Fauez Mahmoud Salmen Hussain, advogado e vereador por 40 anos em Ourinhos/SP, guiou-se pelo diálogo e pela comunidade.",
      "Minha mãe, Dirce Zaia Salmen, professora na APAE, deixou um legado de educação inclusiva e empatia."
    ]
  },
  {
    title: "❤️ Família, amor e construção de vida",
    paragraphs: [
      "Em 1987 comecei a história com Sônia Maria Meneguim; noivamos em 1993 e casamos em 1º de julho de 1994, mesma data do Plano Real.",
      "Dessa união nasceram Beatriz (1999) e Vitória (2004), pilares da minha trajetória."
    ]
  },
  {
    title: "🎓 Formações: conhecimento em constante evolução",
    paragraphs: [
      "Técnico Agrícola (1983–1986), Engenharia Agronômica/UNESP (1987–1991) e Bacharel em Direito (1994–1999).",
      "Tecnologia em Segurança da Informação/FATEC (2017–2019), reforçando aprendizado contínuo e responsabilidade digital."
    ]
  }
];

const techCards = [
  {
    tag: "👮‍♂️ Segurança Pública",
    title: "A escolha pela segurança pública",
    text:
      "Como Delegado da Polícia Civil do Paraná, uno técnica, equilíbrio emocional e liderança para garantir justiça e proteção."
  },
  {
    tag: "🏛️ Liderança",
    title: "Responsabilidade institucional",
    text:
      "Delegado-Chefe da 12ª SDP de Jacarezinho (PR), liderando equipes, estruturando investigações e entregando respostas rápidas."
  },
  {
    tag: "📊 Resultados",
    title: "Justiça em números",
    text:
      "Em 2024, cerca de 90% dos homicídios solucionados (30 de 33), traduzindo confiança e eficiência investigativa."
  },
  {
    tag: "🐾 Proteção animal",
    title: "Delegacia de Proteção aos Animais",
    text:
      "Implantação da primeira unidade da região para ampliar o combate aos maus-tratos com uma atuação mais humana."
  },
  {
    tag: "✨ Missão",
    title: "Segurança pública como missão",
    text:
      "Cada decisão é guiada por técnica, ética e humanidade, consciente do impacto direto na vida das pessoas."
  },
  {
    tag: "✨ Valores",
    title: "Trajetória guiada por valores",
    text:
      "Família, estudo, serviço público e compromisso social sustentam cada etapa dessa caminhada."
  }
];

const imageBoxStyle = {
  position: "relative",
  width: "100%",
  aspectRatio: "4 / 3",
  borderRadius: "14px",
  overflow: "hidden",
  background:
    "radial-gradient(circle at 20% 20%, rgba(255,143,0,0.16), transparent 35%), rgba(20,20,20,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const navBtnStyle = side => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [side]: "10px",
  background: "rgba(12,12,12,0.7)",
  color: "#ffb35f",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  fontSize: "18px",
  lineHeight: "1",
  display: "grid",
  placeItems: "center",
  transition: "background 0.2s ease, transform 0.2s ease",
  backdropFilter: "blur(4px)"
});

export default function MinhaHistoriaMobile() {
  const [carouselIndex, setCarouselIndex] = useState(
    storyMedia.map(() => 0)
  );
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-up");
    if (!elements.length) return;

    // Desliga animações de entrada para eliminar travadas no primeiro scroll
    elements.forEach(el => el.classList.add("show"));
  }, []);

  return (
    <div id="minha-historia-mobile">
      <PageSEO {...seoContent.historia} />
      <HeaderMobile />

      <section className="hero-mobile reveal-up">
        <p className="pill">Minha Trajetória</p>
        <h1>Serviço público guiado por valores</h1>
        <span>
          Uma jornada construída com família, estudo e segurança pública, sempre
          orientada pela responsabilidade com a sociedade.
        </span>
      </section>

      <section className="story-mobile">
        {storyBlocks.map((block, index) => (
          <article
            key={block.title}
            className="story-card reveal-up"
            style={{ transitionDelay: `${0.08 * index}s` }}
          >
            <div className="story-photo" style={imageBoxStyle}>
              <img
                src={storyMedia[index][carouselIndex[index]]}
                alt={`Foto história ${index + 1}-${carouselIndex[index] + 1}`}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.2s ease" }}
              />
              {storyMedia[index].length > 1 && (
                <>
                  <button
                    aria-label="Anterior"
                    onClick={() =>
                      setCarouselIndex(prev => {
                        const next = [...prev];
                        next[index] = (prev[index] - 1 + storyMedia[index].length) % storyMedia[index].length;
                        return next;
                      })
                    }
                    style={navBtnStyle("left")}
                  >
                    ‹
                  </button>
                  <button
                    aria-label="Próxima"
                    onClick={() =>
                      setCarouselIndex(prev => {
                        const next = [...prev];
                        next[index] = (prev[index] + 1) % storyMedia[index].length;
                        return next;
                      })
                    }
                    style={navBtnStyle("right")}
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            <div className="story-text">
              <h3>{block.title}</h3>
              {block.paragraphs.map(text => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="tech-mobile reveal-up" style={{ transitionDelay: "0.32s" }}>
        <p className="pill">Segurança pública em foco</p>
        <h2>Resultados e missão</h2>
        <div className="metric-mobile">
          <div>
            <small>Resolução de homicídios (2024)</small>
            <strong>≈90%</strong>
          </div>
          <p>30 de 33 ocorrências solucionadas.</p>
        </div>

        <div className="tech-list">
          {techCards.map(card => (
            <div key={card.title} className="tech-card-mobile">
              <span className="tag">{card.tag}</span>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
