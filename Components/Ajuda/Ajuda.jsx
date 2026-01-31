import "./Ajuda.css";
import Header from "../Desktop/Desktop-components/Header";
import { useEffect, useState } from "react";
import HeaderMobile from "../Mobile/Mobile-components/HeaderMobile";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";

export default function Ajuda() {
    const [isMobile, setIsMobile] = useState(false);

  const handleWhatsapp = () => {
    window.open(
      "https://wa.me/5543991616441?text=Olá,%20preciso%20de%20orientação%20para%20uma%20denúncia.",
      "_blank"
    );
  };

  useEffect(() => {
      function checkScreen() {
        setIsMobile(window.innerWidth <= 768); // Define o limite do mobile
      }
  
      checkScreen();
      window.addEventListener("resize", checkScreen);
  
      return () => window.removeEventListener("resize", checkScreen);
    }, []);

  return (
    <div id="como-denunciar-page">
    <PageSEO {...seoContent.ajuda} />
    {/* Usa o header correto de acordo com a largura da tela */}
    {isMobile ? <HeaderMobile /> : <Header />}

      {/* HERO */}
      <section className="denuncia-hero">
        <p>Orientações</p>
        <h1>Denúncia de maus-tratos</h1>
        <span>
          Informação clara e acessível para ajudar você a agir com segurança
          e responsabilidade.
        </span>
      </section>

      {/* COMO DENUNCIAR */}
      <section className="denuncia-section">
        <h2>Como denunciar?</h2>
        <p>
          A denúncia pode ser feita de forma simples. Basta entrar em contato
          conosco ou preencher o formulário disponível no site, descrevendo a
          situação da maneira mais detalhada possível.
        </p>
        <p>
          Sempre que possível, informe endereço, data, horários, frequência dos
          fatos e qualquer outra informação que ajude na apuração. Fotos ou
          vídeos também podem ser úteis, mas não são obrigatórios.
        </p>
        <p>
          Todas as informações recebidas são tratadas com responsabilidade e
          sigilo.
        </p>

        <button onClick={handleWhatsapp}>
          Falar pelo WhatsApp
        </button>
      </section>

      {/* COMO IDENTIFICAR */}
      <section className="denuncia-section light">
        <h2>Como identificar maus-tratos?</h2>
        <p>
          Maus-tratos podem se manifestar de diversas formas, nem sempre de
          maneira evidente. É importante estar atento a sinais físicos,
          comportamentais e ao ambiente em que o animal ou a pessoa se encontra.
        </p>
        <p>
          Alguns exemplos incluem abandono, agressões físicas, falta de água ou
          alimentação, ambientes insalubres, confinamento inadequado e ausência
          de cuidados básicos.
        </p>
        <p>
          Em situações envolvendo pessoas vulneráveis, sinais de negligência,
          violência psicológica ou isolamento também merecem atenção.
        </p>

        <button onClick={handleWhatsapp}>
          Pedir orientação pelo WhatsApp
        </button>
      </section>

      {/* ENCERRAMENTO */}
      <section className="denuncia-footer">
        <h3>Em caso de dúvida, denuncie</h3>
        <p>
          Mesmo que você não tenha certeza absoluta, é melhor buscar orientação.
          Sua iniciativa pode evitar sofrimentos e salvar vidas.
        </p>

        <button onClick={handleWhatsapp}>
          Entrar em contato
        </button>
      </section>
    </div>
  );
}
