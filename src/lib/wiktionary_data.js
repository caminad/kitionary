const BASE_URL = 'https://caminad.github.io/wiktionary-data/';

/** @type {Map<number, string[]>} */
const words_cache = new Map();

/**
 * @param {{ characterLength: number }} opts
 * @returns {Promise<string[]>}
 */
export async function fetch_words(opts) {
	const cached = words_cache.get(opts.characterLength);
	if (cached) {
		return cached;
	}
	const path = String(opts.characterLength).padStart(3, '0') + '.txt';
	const res = await fetch(new URL(path, BASE_URL));
	if (!res.ok) {
		return [];
	}
	const text = await res.text();
	const words = text.match(/.+/g);
	if (!words) {
		return [];
	}
	words_cache.set(opts.characterLength, words);
	return words;
}
