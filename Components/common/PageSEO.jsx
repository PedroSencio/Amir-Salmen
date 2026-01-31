import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

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

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
      <meta name="author" content="Delegado Amir Salmen" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd ? (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      ) : null}
    </Helmet>
  );
}
