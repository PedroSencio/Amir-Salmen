import { useEffect, useState } from "react";
import BlogMobile from "../Components/Mobile/Blog";
import BlogDesktop from "../Components/Desktop/Blog";
import useSeo from "./hooks/useSeo";


export default function IsMobileBlog() {
    const [isMobile, setIsMobile] = useState(false);
    useSeo({
        title: "Blog do Delegado Amir Salmen | Artigos e novidades",
        description:
            "Leia artigos e atualizações sobre proteção animal, segurança pública e ações sociais lideradas pelo Delegado Amir Salmen.",
        keywords:
            "blog Amir Salmen, artigos proteção animal, segurança pública Londrina, notícias delegado",
        image: "/amir.png",
        url: "/blog"
    });

    useEffect(() => {
        function checkScreen() {
      setIsMobile(window.innerWidth <= 768); // Define o limite do mobile
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile ? <BlogMobile /> : <BlogDesktop />;
}
   
