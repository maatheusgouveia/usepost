const BASE_URL =
	process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com";

export async function api<T>(
	path: string,
	options: RequestInit = {},
	config: { revalidate?: number; noCache?: boolean } = {}
): Promise<T> {
	const headers = {
		"Content-Type": "application/json",
		...(options.headers || {}),
	};

	const url = `${BASE_URL}${path}`;

	const res = await fetch(url, {
		...options,
		headers,
		cache: config.noCache ? "no-store" : "force-cache",
		next: config.revalidate ? { revalidate: config.revalidate } : undefined,
	});

	if (!res.ok) {
		throw new Error(`Erro ao buscar ${url}`);
	}

	return res.json();
}
