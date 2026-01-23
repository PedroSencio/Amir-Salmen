import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./HeaderMobile.css";

const links = [
    { label: "Início", path: "/" },
    { label: "Minha História", path: "/minha-historia" },
    { label: "Nosso Trabalho", path: "/nosso-trabalho" },
    { label: "Notícias", path: "/noticias" }
];

export default function HeaderMobile() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    function handleNavigate(path) {
        navigate(path);
        setMenuOpen(false);
    }

    return (
        <>
            <header id="header-mobile">
                <button className="logo" onClick={() => handleNavigate("/")}>
                    <img src="/ff68a751-411c-4560-b36f-4e3ea0f7b093.png" alt="Logo Amir Salmen" />
                    <span>Amir Salmen</span>
                </button>
                <button
                    id="barra-funcoes"
                    aria-label="Abrir menu"
                    onClick={() => setMenuOpen(true)}
                >
                    <span className="line-funcao"></span>
                    <span className="line-funcao"></span>
                    <span className="line-funcao"></span>
                </button>
            </header>

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <div className="menu-header">
                    <p>Navegação</p>
                    <button aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
                        ×
                    </button>
                </div>
                <nav>
                    {links.map(link => (
                        <button
                            key={link.path}
                            className={location.pathname === link.path ? "active" : ""}
                            onClick={() => handleNavigate(link.path)}
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
                <a
                    className="menu-whatsapp"
                    href="https://wa.me/5543991959633?text=Olá,%20vim%20pelo%20site!"
                    target="_blank"
                    rel="noreferrer"
                >
                    Falar no WhatsApp
                </a>
            </div>
            {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
        </>
    );
}
