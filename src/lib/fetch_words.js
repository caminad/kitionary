/** @returns {Promise<string[]>} */
export async function fetch_words() {
	const { default: words } = await import('$lib/words.json');
	return words;
}
