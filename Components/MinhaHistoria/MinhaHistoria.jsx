import "./MinhaHistoria.css";
import Header from "../Desktop/Desktop-components/Header";

export default function MinhaHistoriaDesktop() {
  return (
    <div>
      <Header />

      <section id="trajetoria-desktop">
        {/* HERO */}
        <div className="trajetoria-hero">
          <p>Minha Trajetória</p>
          <h1>Compromisso com a justiça e a sociedade</h1>
          <span>
            Uma caminhada construída com base na segurança pública,
            responsabilidade institucional e dedicação às pessoas.
          </span>
        </div>

        {/* LINHA DO TEMPO */}
        <div className="trajetoria-grid">
          <article className="trajetoria-card">
            <span className="trajetoria-tag">Quem sou</span>
            <h2>Atuação pública com propósito</h2>
            <p>
              Delegado de Polícia Civil do Estado do Paraná, com carreira
              consolidada na segurança pública, exercendo funções
              estratégicas de liderança, investigação e gestão.
            </p>
          </article>

          <article className="trajetoria-card">
            <span className="trajetoria-tag">Formação</span>
            <h2>Base técnica e jurídica sólida</h2>
            <ul>
              <li>Engenharia Agronômica</li>
              <li>Bacharelado em Direito</li>
              <li>Formação em Segurança da Informação</li>
              <li>Especializações em Direito Penal e Gestão Pública</li>
            </ul>
          </article>

          <article className="trajetoria-card destaque">
            <span className="trajetoria-tag">Carreira</span>
            <h2>Polícia Civil do Paraná</h2>
            <p>
              Ingressou na Polícia Civil em 2003, atuando em diversas
              regiões do estado. Exerceu cargos de chefia e coordenação,
              sempre focado em eficiência investigativa, organização
              institucional e proximidade com a população.
            </p>
          </article>

          <article className="trajetoria-card">
            <span className="trajetoria-tag">Reconhecimento</span>
            <h2>Resultados e homenagens</h2>
            <p>
              Reconhecido por resultados expressivos no combate à
              criminalidade e fortalecimento das instituições, recebendo
              homenagens e títulos honorários pelo trabalho prestado.
            </p>
          </article>

          <article className="trajetoria-card">
            <span className="trajetoria-tag">Propósito</span>
            <h2>Visão de futuro</h2>
            <p>
              Acredita que a segurança pública deve ser construída com
              planejamento, dados, transparência e respeito aos direitos
              humanos, fortalecendo a confiança entre Estado e sociedade.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
