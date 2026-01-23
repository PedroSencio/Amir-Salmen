import { useEffect, useState } from "react";
import HomeMobile from "../Components/Mobile/Home";
import HomeDesktop from "../Components/Desktop/Home";
import useSeo from "./hooks/useSeo";


export default function IsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useSeo({
        title: "Delegado Amir Salmen | Defesa dos animais e proteção social",
        description:
            "Acompanhe o trabalho do Delegado Amir Salmen em defesa dos animais e das pessoas vulneráveis em Londrina e região.",
        keywords:
            "Delegado Amir Salmen, defesa animal, proteção social, Londrina, investigação, segurança pública",
        image: "/amir.png",
        url: "/"
    });

    useEffect(() => {
        function checkScreen() {
      setIsMobile(window.innerWidth <= 768); // Define o limite do mobile
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
   
