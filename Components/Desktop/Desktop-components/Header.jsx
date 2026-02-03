import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div id="header-box" className={scrolled ? "scrolled" : ""}>
            <div onClick={() => navigate("/")} id="logo-header">
                <img src="/ff68a751-411c-4560-b36f-4e3ea0f7b093.png" alt="Logotipo do Delegado Amir Salmen" />
                <h2>Delegado Amir Salmen</h2>
            </div>
            <div id="botoes-header">
                <button onClick={() => navigate("/minha-historia")}>Minha Trajetória</button>
                <div className="line"></div>
                <button onClick={() => navigate("/nosso-trabalho")}>Nosso Trabalho</button>
                <div className="line"></div>
                <button onClick={() => navigate("/noticias")}>Notícias</button>
            </div>
        </div>
    )
}
