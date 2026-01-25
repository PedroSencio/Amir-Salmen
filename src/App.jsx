import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../Components/Desktop/Home";
import HomeMobile from "../Components/Mobile/Home";
import NoticiasDesktop from "../Components/Desktop/Noticias";
import NoticiasMobile from "../Components/Mobile/Noticias";
import MinhaHistoriaDesktop from "../Components/Desktop/MinhaHistoria";
import MinhaHistoriaMobile from "../Components/Mobile/MinhaHistoria";
import NossoTrabalhoDesktop from "../Components/Desktop/NossoTrabalho";
import NossoTrabalhoMobile from "../Components/Mobile/NossoTrabalho";
import BlogMobile from "../Components/Mobile/Blog";
import BlogDesktop from "../Components/Desktop/Blog";

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
      </Routes>
    ) : (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-historia" element={<MinhaHistoriaDesktop />} />
        <Route path="/nosso-trabalho" element={<NossoTrabalhoDesktop />} />
        <Route path="/noticias" element={<NoticiasDesktop />} />
        <Route path="/blog" element={<BlogDesktop />} />
      </Routes>
    )
  );
}

export default App;
