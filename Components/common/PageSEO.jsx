import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSeo from "../../src/hooks/useSeo";

const fallbackSiteUrl =
  (import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ||
    (typeof window !== "undefined" ? window.location.origin : "")) ||
  "https://delegadoamir.com";

const defaultImage = `${fallbackSiteUrl}/amir.png`;

export default function PageSEO({
  title,
  description,
  path,
  image = defaultImage,
  type = "website",
  keywords = [],
  jsonLd
}) {
  const { pathname } = useLocation();
  const resolvedPath = path || pathname;
  const normalizedPath = resolvedPath.startsWith("/")
    ? resolvedPath
    : `/${resolvedPath}`;
  const canonical = `${fallbackSiteUrl}${normalizedPath}`;

  useSeo({
    title,
    description,
    keywords,
    image,
    url: canonical,
    type
  });

  useEffect(() => {
    if (!jsonLd) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [jsonLd]);

  return null;
}
