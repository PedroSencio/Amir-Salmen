import { useEffect } from "react";

function upsertMeta(name, content, attr = "name") {
    if (!content) return;

    const selector = `meta[${attr}="${name}"]`;
    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
    }

    element.setAttribute("content", content);
}

function upsertLink(rel, href) {
    if (!href) return;

    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
    }

    link.setAttribute("href", href);
}

export default function useSeo({
    title,
    description,
    keywords,
    image,
    url,
    type = "website"
}) {
    useEffect(() => {
        if (typeof document === "undefined") return;

        const origin = typeof window !== "undefined" ? window.location.origin : "";
        const pathname =
            typeof window !== "undefined" ? window.location.pathname : "";

        const normalizedUrl = url
            ? url.startsWith("http")
                ? url
                : `${origin}${url}`
            : origin
                ? `${origin}${pathname}`
                : undefined;

        const normalizedImage = image
            ? image.startsWith("http")
                ? image
                : `${origin}${image}`
            : undefined;

        if (title) document.title = title;
        upsertMeta("description", description);
        upsertMeta("keywords", keywords);

        upsertMeta("og:title", title, "property");
        upsertMeta("og:description", description, "property");
        upsertMeta("og:type", type, "property");
        upsertMeta("og:url", normalizedUrl, "property");
        upsertMeta("og:image", normalizedImage, "property");

        upsertMeta("twitter:card", normalizedImage ? "summary_large_image" : "summary");
        upsertMeta("twitter:title", title);
        upsertMeta("twitter:description", description);
        upsertMeta("twitter:image", normalizedImage);

        upsertLink("canonical", normalizedUrl);
    }, [title, description, keywords, image, url, type]);
}
