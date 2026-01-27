import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../Components/Home/Home";
import HomeMobile from "../Components/Home/HomeMobile";
import NoticiasDesktop from "../Components/Noticias/Noticias";
import NoticiasMobile from "../Components/Noticias/NoticiasMobile";
import MinhaHistoriaDesktop from "../Components/MinhaHistoria/MinhaHistoria";
import MinhaHistoriaMobile from "../Components/MinhaHistoria/MinhaHistoriaMobile";
import NossoTrabalhoDesktop from "../Components/NossoTrabalho/NossoTrabalho";
import NossoTrabalhoMobile from "../Components/NossoTrabalho/NossoTrabalhoMobile";
import BlogMobile from "../Components/Comunicados/BlogMobile";
import BlogDesktop from "../Components/Comunicados/Blog";
import Ajuda from "../Components/Ajuda/Ajuda";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkScreen() {
      setIsMobile(window.innerWidth <= 768); // Define o limite do mobile
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    isMobile ? (
      <Routes>
        <Route path="/" element={<HomeMobile />} />
        <Route path="/minha-historia" element={<MinhaHistoriaMobile />} />
        <Route path="/nosso-trabalho" element={<NossoTrabalhoMobile />} />
        <Route path="/noticias" element={<NoticiasMobile />} />
        <Route path="/blog" element={<BlogMobile />} />
        <Route path="/ajuda" element={<Ajuda />} />
      </Routes>
    ) : (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-historia" element={<MinhaHistoriaDesktop />} />
        <Route path="/nosso-trabalho" element={<NossoTrabalhoDesktop />} />
        <Route path="/noticias" element={<NoticiasDesktop />} />
        <Route path="/blog" element={<BlogDesktop />} />
        <Route path="/ajuda" element={<Ajuda />} />
      </Routes>
    )
  );
}

export default App;
