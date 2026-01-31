import HeaderMobile from "../Mobile/Mobile-components/HeaderMobile";
import "./HomeMobile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";
import { carregarNoticiasFiltradas } from "../../src/lib/api";

export default function HomeMobile() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");
    const [desc, setDesc] = useState("");
    const [noticias, setNoticias] = useState([]);
    const [loadingNoticias, setLoadingNoticias] = useState(true);
    const [erroNoticias, setErroNoticias] = useState("");
    const navigate = useNavigate();

    const openExternal = url =>
        window.open(url, "_blank", "noopener,noreferrer");

    function handleSubmit(e) {
    e.preventDefault();
    console.log({ nome, email, num, desc });
    // backend entra depois
  }

    useEffect(() => {
        async function loadNoticias() {
            try {
                const data = await carregarNoticiasFiltradas();
                setNoticias(data || []);
            } catch (error) {
                console.error(error);
                setErroNoticias("Não foi possível carregar as notícias agora.");
            } finally {
                setLoadingNoticias(false);
            }
        }
        loadNoticias();
    }, []);

  useEffect(() => {
    carregarNoticiasFiltradas()
        .then((data) => {
            console.log("Notícias carregadas:", data);
        })
        .catch((error) => {
            console.error("Erro ao carregar notícias:", error);
        });
  }, []);

    return (
        <div id="all-mobile">
            <PageSEO
                {...seoContent.home}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Delegado Amir Salmen",
                    jobTitle: "Delegado de Polícia",
                    description:
                        "Delegado Amir Salmen atua na proteção animal e na defesa de pessoas vulneráveis em Londrina e região.",
                    address: {
                        "@type": "PostalAddress",
                        addressRegion: "Paraná",
                        addressLocality: "Londrina",
                        addressCountry: "BR"
                    },
                    sameAs: [
                        "https://www.instagram.com/delegadoamirsalmen/",
                        "https://www.facebook.com/amir.salmen/"
                    ]
                }}
            />
            <HeaderMobile />
            <div id="view1">
                <img
                    src="background-mobile.png"
                    alt="Delegado Amir Salmen em ação comunitária"
                    loading="lazy"
                />
                <div id="mensagem-view1">
                    <h2 id="up">Cuidado, respeito e responsabilidade</h2>
                    <h2 id="mid">"Protegendo quem não pode se defender"</h2>
                    <h2 id="down">Atuamos todos os dias para garantir segurança e dignidade àqueles que mais precisam.</h2>
                </div>
                <button
                    id="btn-denuncia"
                    onClick={() => navigate("/ajuda")}
                >
                    Denuncie maus tratos
                </button>
                <div id="midia">
                    <button
                        id="whats"
                        onClick={() =>
                            openExternal("https://wa.me/5543991616441?text=Olá,%20vim%20pelo%20site!")
                        }
                    >
                        <img src="/whatsapp-3.png" alt="Contato pelo WhatsApp" />
                    </button>
                    <button
                        id="insta"
                        onClick={() =>
                            openExternal("https://www.instagram.com/delegadoamirsalmen/")
                        }
                    >
                        <img src="/instagram.png" alt="Instagram do Delegado Amir Salmen" />
                    </button>
                    <button
                        id="face"
                        onClick={() =>
                            openExternal("https://www.facebook.com/amir.salmen")
                        }
                    >
                        <img src="/facebook.png" alt="Facebook do Delegado Amir Salmen" />
                    </button>
                </div>
            </div>
            <div id="view2">
                <div id="top-view2">
                    <p className="pill">Quem é</p>
                </div>
                <h1>Delegado Amir Salmen?</h1>
                <img src="/amir.png" alt="Retrato do Delegado Amir Salmen" loading="lazy" />
                <h2>Amir Salmen é uma figura dedicada à proteção dos direitos dos <strong>animais</strong> e das pessoas <strong>vulneráveis.</strong></h2>
                <h2>Com uma trajetória marcada por ações humanitárias e campanhas de conscientização, Amir tem se destacado como um defensor incansável daqueles que não podem se defender por si mesmos.</h2>
                <h2>Sua paixão pela justiça social e pelo bem-estar animal resultou na criação e apoio a iniciativas que resgatam vidas, fortalecem comunidades e inspiram o engajamento social.</h2>
                <div id="buttons-view2-mobile">
                    <button
                        id="leia-mobile"
                        onClick={() => navigate("/minha-historia")}
                    >
                        Leia mais
                    </button>
                    <button
                        id="fale-mobile"
                        onClick={() =>
                            openExternal("https://wa.me/5543991616441?text=Olá,%20vim%20pelo%20site!")
                        }
                    >
                        <img src="/whatsapp.png" alt="Ícone do WhatsApp" />
                        Fale comigo
                    </button>
                </div>
            </div>
            <div id="view3">
                <div className="mission-card">
                    <p className="pill">Nossa missão</p>
                    <h1>Proteção e proximidade com a sociedade</h1>
                    <p className="mission-copy">
                        Minha missão é <strong>proteger</strong> os direitos dos animais e das pessoas vulneráveis,
                        promovendo conscientização e ação para um mundo mais justo e compassivo.
                    </p>
                    <div className="mission-tags">
                        <span className="tag">Denúncia acolhida</span>
                        <span className="tag">Ação investigativa</span>
                        <span className="tag">Comunidade segura</span>
                    </div>
                </div>

                <div className="mission-stats">
                    <div className="stat-card">
                        <div className="stat-head">
                            <span className="dot" />
                            <span className="label">Denúncias atendidas</span>
                        </div>
                        <strong>999</strong>
                    </div>
                    <div className="stat-card">
                        <div className="stat-head">
                            <span className="dot green" />
                            <span className="label">Campanhas realizadas</span>
                        </div>
                        <strong>999</strong>
                    </div>
                </div>

                <button
                    id="btn-missao"
                    onClick={() => navigate("/nosso-trabalho")}
                >
                    <span>Saiba mais</span>
                    <span id="seta">➤</span>
                </button>
            </div>
            <div id="view4">
                <div className="mission-card" id="head-view4">
                    <p className="pill">Últimas notícias</p>
                    <h1 className="news-title">Atualizadas em tempo real</h1>
                    <p className="news-copy">
                    Fique por dentro das ações, comunicados e atualizações mais recentes.
                    </p>
                </div>
                <div className="carrossel-noticias">
                    {loadingNoticias && (
                        <div className="card-noticia placeholder">
                            <p>Carregando notícias...</p>
                        </div>
                    )}
                    {!loadingNoticias && erroNoticias && (
                        <div className="card-noticia placeholder">
                            <p>{erroNoticias}</p>
                        </div>
                    )}
                    {!loadingNoticias && !erroNoticias && noticias.length === 0 && (
                        <div className="card-noticia placeholder">
                            <p>Nenhuma notícia encontrada.</p>
                        </div>
                    )}
                    {!loadingNoticias && !erroNoticias && noticias.map(item => (
                        <div className="card-noticia" key={item.id}>
                            {item.img ? (
                                <img
                                    src={`https://zayrdvyobajbklsuxupy.supabase.co/storage/v1/object/public/Amir/${item.img}`}
                                    alt={item.titulo}
                                    loading="lazy"
                                />
                            ) : (
                                <div className="news-image-placeholder">Imagem indisponível</div>
                            )}
                            <h2>{item.titulo}</h2>
                            <button onClick={() => {
                                navigate(`/noticias`);
                            }} id="button-card">Ver post</button>
                        </div>
                    ))}
                </div>

                <button
                    id="mais-noticia"
                    onClick={() => navigate("/noticias")}
                >
                    Mais notícias
                </button>
            </div>
            <section id="view5">
                <div className="form-copy-mobile">
                    <p>Contato</p>
                    <h1>Fale conosco</h1>
                    <span>
                    Compartilhe seu caso, dúvida ou denúncia. Respondemos pessoalmente cada mensagem recebida.
                    </span>
                    <span>
                        Precisa de ajuda?{" "}
                        <a
                            href="/ajuda"
                            onClick={(e) => {
                            e.preventDefault();
                            navigate("/ajuda");
                            }}
                        >
                            clique aqui
                        </a>
                    </span>
                </div>

                <form className="contact-form-mobile" onSubmit={handleSubmit}>
                    <div className="input-group-mobile">
                    <label>Nome completo</label>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    </div>

                    <div className="input-group-mobile">
                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder="voce@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>

                    <div className="input-group-mobile">
                    <label>Telefone</label>
                    <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                    />
                    </div>

                    <div className="input-group-mobile">
                    <label>Mensagem</label>
                    <textarea
                        rows="5"
                        placeholder="Descreva como podemos ajudar"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    </div>

                    <button type="submit" className="btn-submit-mobile">
                    Enviar mensagem
                    </button>
                </form>
                </section>
        </div>
    )
}
