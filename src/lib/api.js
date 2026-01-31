const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5001";

export async function carregarNoticias() {
    const res = await fetch(`${API_URL}/posts`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    if (!res.ok) {
        const error = await res.text();
        console.error("Erro ao carregar notícias:", error);
        throw new Error("Erro ao carregar notícias");
    } else {
        let data = await res.json();
        return data;
    }
}


export async function carregarNoticiasFiltradas() {
    const res = await fetch(`${API_URL}/last_posts`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    if (!res.ok) {
        const error = await res.text();
        console.error("Erro ao carregar notícias:", error);
        throw new Error("Erro ao carregar notícias");
    } else {
        let data = await res.json();
        return data;
    }
}

