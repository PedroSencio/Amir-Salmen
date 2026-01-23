import "./View4.css"

export default function View4() {

    const noticia1 = {
        titulo : "Delegado Amir Salmen e policiais da PCPR recebem menção honrosa em Bandeirantes-PR",
        categoria : "Mérito",
        imagem : "/noticia1.png",
        data : "18/06/2025"
    }

    const noticia2 = {
        titulo : "Delegado Amir Salmen realiza palestra sobre ECA no Colégio Cívico Militar Anesio de Almeida Leite",
        categoria : "Ação Institucional",
        imagem : "/noticia2.png",
        data : "12/02/2025"
    }

    return(
        <div id="box-view4-noticias">
            <h1>Últimas notícias</h1>
            <div id="line-1"></div>
            <div id="box-noticias">
                <div className="tema">
                    <div className="box-noticias">
                        <img src={noticia1.imagem} alt="" />
                        <div className="categoria-box">
                            {noticia1.categoria}
                        </div>
                    </div>
                    <div className="data-box">{noticia1.data}</div>
                    <h2>{noticia1.titulo}</h2>
                </div>
                <div className="tema">
                    <div className="box-noticias">
                        <img src={noticia2.imagem} alt="" />
                        <div className="categoria-box">
                            {noticia2.categoria}
                        </div>
                    </div>
                    <div className="data-box">{noticia2.data}</div>
                    <h2>{noticia2.titulo}</h2>
                </div>
                <div className="box-noticias">
                </div>
            </div>
        </div>
    )
}