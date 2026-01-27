import HeaderMobile from "../Mobile/Mobile-components/HeaderMobile";
import "./HomeMobile.css"
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeMobile() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
    e.preventDefault();
    console.log({ nome, email, num, desc });
    // backend entra depois
  }

    return (
        <div id="all-mobile">
            <HeaderMobile />
            <div id="view1">
                <img src="Screenshot 2026-01-25 at 11.04.37 PM.png" alt="" />
                <div id="mensagem-view1">
                    <h2 id="up">Cuidado, respeito e responsabilidade</h2>
                    <h2 id="mid">"Protegendo quem não pode se defender"</h2>
                    <h2 id="down">Atuamos todos os dias para garantir segurança e dignidade àqueles que mais precisam.</h2>
                </div>
                <button id="btn-denuncia">
                    Denuncie maus tratos
                </button>
                <div id="midia">
                    <button id="whats">
                        <img src="/whatsapp-3.png" alt="Contato pelo WhatsApp" />
                    </button>
                    <button id="insta">
                        <img src="/instagram.png" alt="Instagram do Delegado Amir Salmen" />
                    </button>
                    <button id="face">
                        <img src="/facebook.png" alt="Facebook do Delegado Amir Salmen" />
                    </button>
                </div>
            </div>
            <div id="view2">
                <h1>Quem é o Delegado Amir Salmen?</h1>
                <div id="line-mobile"></div>
                <img src="/amir.png" alt="" />
                <h2>Amir Salmen é uma figura dedicada à proteção dos direitos dos <strong>animais</strong> e das pessoas <strong>vulneráveis.</strong></h2>
                <h2>Com uma trajetória marcada por ações humanitárias e campanhas de conscientização, Amir tem se destacado como um defensor incansável daqueles que não podem se defender por si mesmos.</h2>
                <h2>Sua paixão pela justiça social e pelo bem-estar animal resultou na criação e apoio a iniciativas que resgatam vidas, fortalecem comunidades e inspiram o engajamento social.</h2>
                <div id="buttons-view2-mobile">
                    <button id="leia-mobile">Leia mais</button>
                    <button id="fale-mobile">
                        <img src="/whatsapp.png" alt="" />
                        Fale comigo
                    </button>
                </div>
            </div>
            <div id="view3">
                <h1>Nossa missão</h1>
                <div id="line-mobile"></div>
                <div id="missao-mobile">
                    <h2>Minha missão é <strong>proteger</strong> os direitos dos animais e das pessoas vulneráveis, promovendo a conscientização e a ação em prol de um mundo mais justo e compassivo.</h2>
                </div>
                <div id="blocos">
                    <div className="bloco">
                        <h2>Denuncias Atendidas:</h2>
                        <h1>999</h1>
                    </div>
                    <div className="bloco">
                        <h2>Campanhas Realizadas:</h2>
                        <h1>999</h1>
                    </div>
                    <button id="btn-missao">
                        <h2>Saiba mais</h2>
                        <h2 id="seta">➤</h2>
                    </button>
                </div>
            </div>
            <div id="view4">
                <h1>Últimas Notícias</h1>
                <div id="line-mobile"></div>

                <div className="carrossel-noticias">
                    <div className="card-noticia">
                    <img src="/noticia1.jpg" />
                    <h2>Título da notícia</h2>
                    <p>Descriçao</p>
                    </div>

                    <div className="card-noticia">
                    <img src="/noticia2.jpg" />
                    <h2>Título da notícia</h2>
                    <p>Descriçao</p>
                    </div>

                    <div className="card-noticia">
                    <img src="/noticia3.jpg" />
                    <h2>Título da notícia</h2>
                    <p>Descriçao</p>
                    </div>
                </div>
                
                <button id="mais-noticia">
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
                            href="#"
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
