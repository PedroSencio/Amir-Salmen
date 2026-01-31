import Header from "../Desktop/Desktop-components/Header";
import View1 from "../Desktop/Desktop-components/View1";
import View2 from "../Desktop/Desktop-components/View2";
import View3 from "../Desktop/Desktop-components/View3";
import View4 from "../Desktop/Desktop-components/View4";
import View5 from "../Desktop/Desktop-components/View5";
import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";
import "./Home.css";

function HomeDesktop() {
  const schema = {
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
  };

  return (
    <div id="all">
      <PageSEO {...seoContent.home} jsonLd={schema} />
      <div id="head">
        <Header />
      </div>
      <View1 />
      <View2 />
      <View3 />
      <View4 />
      <View5 />
    </div>
  );
}

export default HomeDesktop;
