import { useEffect, useState } from "react";
import NoticiasMobile from "../Components/Mobile/Noticias";
import NoticiasDesktop from "../Components/Desktop/Noticias";
import useSeo from "./hooks/useSeo";


export default function IsMobileNoticias() {
    const [isMobile, setIsMobile] = useState(false);
    useSeo({
        title: "Notícias | Atuação do Delegado Amir Salmen",
        description:
            "Fique por dentro das últimas notícias e ações do Delegado Amir Salmen na defesa dos animais e da população.",
        keywords:
            "notícias Amir Salmen, novidades delegado, proteção animal notícias, segurança pública Londrina",
        image: "/amir.png",
        url: "/noticias"
    });

    useEffect(() => {
        function checkScreen() {
      setIsMobile(window.innerWidth <= 768); // Define o limite do mobile
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile ? <NoticiasMobile /> : <NoticiasDesktop />;
}
   
