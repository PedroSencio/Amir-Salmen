import { useEffect, useState } from "react";
import NossoTrabalhoMobile from "../Components/Mobile/NossoTrabalho";
import NossoTrabalhoDesktop from "../Components/Desktop/NossoTrabalho";
import useSeo from "./hooks/useSeo";

export default function IsMobileNossoTrabalho() {
    const [isMobile, setIsMobile] = useState(false);
    useSeo({
        title: "Nosso Trabalho | Projetos liderados pelo Delegado Amir Salmen",
        description:
            "Veja os projetos de proteção animal e apoio a pessoas vulneráveis coordenados pelo Delegado Amir Salmen.",
        keywords:
            "projetos Amir Salmen, resgate animal, apoio social, causas sociais Londrina",
        image: "/amir.png",
        url: "/nosso-trabalho"
    });

    useEffect(() => {
        function checkScreen() {
            setIsMobile(window.innerWidth <= 768);
        }

        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return isMobile ? <NossoTrabalhoMobile /> : <NossoTrabalhoDesktop />;
}
