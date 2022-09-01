<script>
	import WiktionaryLink from '$lib/WiktionaryLink.svelte';

	const { format } = new Intl.NumberFormat();

	/** @type {readonly string[]} */
	export let words;
	/** @type {(word: string, index: number, words: readonly string[]) => unknown} */
	export let predicate;
	/** @type {number} */
	export let limit;

	$: filtered_words = words.filter(predicate);
</script>

<p class="font-light tabular-nums">
	{format(filtered_words.length)}
	<i class="text-sm text-gray-500"> of {format(words.length)}</i>
</p>
<ul class="grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] empty:hidden">
	{#each filtered_words.slice(0, limit) as word (word)}
		<li class="text-center font-mono"><WiktionaryLink {word} /></li>
	{/each}
</ul>
{#if filtered_words.length > limit}
	<p class="font-light italic tabular-nums text-gray-500">
		{format(filtered_words.length - limit)} more not shown
	</p>
{/if}
