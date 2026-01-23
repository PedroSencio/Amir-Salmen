import { Routes, Route } from "react-router-dom";
import IsMobile from "./IsMobile";
import IsMobileMinhaHistoria from "./IsMobileMinhaHistoria.jsx";
import IsMobileNoticias from "./IsMobileNoticias.jsx";
import IsMobileNossoTrabalho from "./IsMobileNossoTrabalho.jsx";
import IsMobileBlog from "./IsMobileBlog.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<IsMobile />} />
      <Route path="/minha-historia" element={<IsMobileMinhaHistoria />} />
      <Route path="/nosso-trabalho" element={<IsMobileNossoTrabalho />} />
      <Route path="/noticias" element={<IsMobileNoticias />} />
      <Route path="/blog" element={<IsMobileBlog/>} />
    </Routes>
  );
}

export default App;
