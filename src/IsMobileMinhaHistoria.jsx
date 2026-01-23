import { useEffect, useState } from "react";
import MinhaHistoriaMobile from "../Components/Mobile/MinhaHistoria";
import MinhaHistoriaDesktop from "../Components/Desktop/MinhaHistoria";
import useSeo from "./hooks/useSeo";


export default function IsMobileMinhaHistoria() {
    const [isMobile, setIsMobile] = useState(false);
    useSeo({
        title: "Quem é o Delegado Amir Salmen | Trajetória e valores",
        description:
            "Conheça a história do Delegado Amir Salmen, seu compromisso com justiça social e a defesa dos animais.",
        keywords:
            "história Amir Salmen, biografia delegado, defesa animal, justiça social",
        image: "/amir.png",
        url: "/minha-historia"
    });

    useEffect(() => {
        function checkScreen() {
      setIsMobile(window.innerWidth <= 768); // Define o limite do mobile
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile ? <MinhaHistoriaMobile /> : <MinhaHistoriaDesktop />;
}
   
