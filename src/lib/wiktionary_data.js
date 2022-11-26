const BASE_URL = "https://caminad.github.io/wiktionary-data/";

/** @type {Map<number, string[]>} */
const words_cache = new Map();

/**
 * @param {{ character_count: number }} opts
 * @returns {Promise<string[]>}
 */
export async function fetch_words(opts) {
	const cached = words_cache.get(opts.character_count);
	if (cached) {
		return cached;
	}
	const path = String(opts.character_count).padStart(3, "0") + ".txt";
	const res = await fetch(new URL(path, BASE_URL));
	if (!res.ok) {
		return [];
	}
	const text = await res.text();
	const words = text.match(/.+/g);
	if (!words) {
		return [];
	}
	words_cache.set(opts.character_count, words);
	return words;
}
