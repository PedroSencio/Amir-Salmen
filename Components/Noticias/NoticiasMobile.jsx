import "./NoticiasMobile.css";
import HeaderMobile from "../Mobile/Mobile-components/HeaderMobile";
import { useState } from "react";

export default function NoticiasMobile() {
  const handleOpen = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const categorias = {
    1: "Ação Institucional",
    2: "Agenda",
    3: "Podcast"
  };

  const categoriaClass = {
    1: "tag-acao",
    2: "tag-agenda",
    3: "tag-podcast"
  };

  // depois você liga no backend
  const [cards] = useState([]);

  return (
    <div id="noticias-mobile">
      <HeaderMobile />

      {/* HEADER */}
      <section className="news-header-mobile">
        <p>Últimas Notícias</p>
        <h2>Acompanhe nossos projetos</h2>
        <span>
          Transparência e proximidade com a sociedade em cada ação.
        </span>
      </section>

      {/* TOP BAR */}
      <div className="news-top-bar-mobile">
        <div className="news-pill-mobile">Atualizado em tempo real</div>
        <button
          className="news-cta-mobile"
          onClick={() => handleOpen("https://www.instagram.com")}
        >
          Ver todas
        </button>
      </div>

      {/* LISTA / CARROSSEL */}
      <section className="news-list-mobile">
        {cards.length === 0 && (
          <div className="news-empty-mobile">
            <p>Carregando notícias...</p>
          </div>
        )}

        {cards.map(item => (
          <article key={item.id} className="news-card-mobile">
            <div className="news-image-mobile">
              {item.img ? (
                <img
                  src={`https://zayrdvyobajbklsuxupy.supabase.co/storage/v1/object/public/Amir/${item.img}`}
                  alt={item.titulo}
                />
              ) : (
                <div className="news-image-placeholder-mobile">
                  Imagem indisponível
                </div>
              )}

              <span className={`news-tag-mobile ${categoriaClass[item.categoria]}`}>
                {categorias[item.categoria]}
              </span>

              <span className="news-date-chip-mobile">
                {item.data}
              </span>
            </div>

            <div className="news-content-mobile">
              <h3>{item.titulo}</h3>
              <p>{item.desc}</p>
            </div>

            <button
              className="news-read-mobile"
              onClick={() => handleOpen(item.link)}
            >
              Ler matéria
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
