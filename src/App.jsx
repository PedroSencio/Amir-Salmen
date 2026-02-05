import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../Components/Home/Home";
import HomeMobile from "../Components/Home/HomeMobile";
import NoticiasDesktop from "../Components/Noticias/Noticias";
import NoticiasMobile from "../Components/Noticias/NoticiasMobile";
import MinhaHistoriaDesktop from "../Components/MinhaHistoria/MinhaHistoria";
import MinhaHistoriaMobile from "../Components/MinhaHistoria/MinhaHistoriaMobile";
import BlogMobile from "../Components/Comunicados/BlogMobile";
import BlogDesktop from "../Components/Comunicados/Blog";
import Ajuda from "../Components/Ajuda/Ajuda";
import DelegaciaAnimaisDesktop from "../Components/NossoTrabalho/DelegaciaAnimais";
import DelegaciaAnimaisMobile from "../Components/NossoTrabalho/DelegaciaAnimaisMobile";
import DelegaciaPessoasDesktop from "../Components/NossoTrabalho/DelegaciaPessoas";
import DelegaciaPessoasMobile from "../Components/NossoTrabalho/DelegaciaPessoasMobile";

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
        <Route path="/delegacia-dos-animais" element={<DelegaciaAnimaisMobile />} />
        <Route path="/delegacia-das-pessoas" element={<DelegaciaPessoasMobile />} />
        <Route path="/noticias" element={<NoticiasMobile />} />
        <Route path="/blog" element={<BlogMobile />} />
        <Route path="/ajuda" element={<Ajuda />} />
      </Routes>
    ) : (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-historia" element={<MinhaHistoriaDesktop />} />
        <Route path="/delegacia-dos-animais" element={<DelegaciaAnimaisDesktop />} />
        <Route path="/delegacia-das-pessoas" element={<DelegaciaPessoasDesktop />} />
        <Route path="/noticias" element={<NoticiasDesktop />} />
        <Route path="/blog" element={<BlogDesktop />} />
        <Route path="/ajuda" element={<Ajuda />} />
      </Routes>
    )
  );
}

export default App;
