import "./MinhaHistoriaMobile.css";
import HeaderMobile from "../Mobile/Mobile-components/HeaderMobile";

export default function MinhaHistoriaMobile() {
  return (
    <div id="trajetoria-mobile">
      <HeaderMobile />

      {/* HERO */}
      <section className="trajetoria-hero-mobile">
        <p>Minha Trajetória</p>
        <h1>Compromisso com a justiça e a sociedade</h1>
        <span>
          Uma caminhada construída com base na segurança pública,
          responsabilidade institucional e dedicação às pessoas.
        </span>
      </section>

      {/* CARDS */}
      <section className="trajetoria-list-mobile">
        <article className="trajetoria-card-mobile">
          <span>Quem sou</span>
          <h2>Atuação pública com propósito</h2>
          <p>
            Delegado de Polícia Civil do Paraná, com atuação voltada à
            investigação, gestão pública e fortalecimento institucional.
          </p>
        </article>

        <article className="trajetoria-card-mobile">
          <span>Formação</span>
          <h2>Base técnica e jurídica</h2>
          <ul>
            <li>Engenharia Agronômica</li>
            <li>Direito</li>
            <li>Segurança da Informação</li>
            <li>Direito Penal e Gestão Pública</li>
          </ul>
        </article>

        <article className="trajetoria-card-mobile destaque">
          <span>Carreira</span>
          <h2>Polícia Civil do Paraná</h2>
          <p>
            Desde 2003 na Polícia Civil, atuando em diferentes regiões
            do estado, exercendo funções estratégicas de comando,
            coordenação e investigação.
          </p>
        </article>

        <article className="trajetoria-card-mobile">
          <span>Reconhecimento</span>
          <h2>Resultados alcançados</h2>
          <p>
            Reconhecido pelo trabalho no combate à criminalidade,
            modernização institucional e aproximação com a sociedade.
          </p>
        </article>

        <article className="trajetoria-card-mobile">
          <span>Propósito</span>
          <h2>Visão de futuro</h2>
          <p>
            Defesa de uma segurança pública moderna, humana,
            transparente e baseada em dados, planejamento e
            responsabilidade social.
          </p>
        </article>
      </section>
    </div>
  );
}
