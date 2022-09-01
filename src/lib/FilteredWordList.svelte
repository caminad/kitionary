<script>
	import WiktionaryLink from '$lib/WiktionaryLink.svelte';

	const { format } = new Intl.NumberFormat();

	/** @type {number} */
	export let characterLength;
	/** @type {readonly string[]} */
	export let words;
	/** @type {RegExp} */
	export let regexp;

	$: limit = Math.floor(2048 / characterLength);
	$: filtered_words = words.filter((word) => regexp.test(word));
</script>

{#if regexp.source === '(?:)'}
	<p class="font-light italic tabular-nums text-gray-500">
		{format(words.length)} words loaded
	</p>
{:else}
	<p class="font-light tabular-nums">
		{format(filtered_words.length)}
		<i class="text-sm text-gray-500"> of {format(words.length)}</i>
	</p>
	<ul
		style="--character-length: {characterLength}ic"
		class="grid grid-cols-[repeat(auto-fill,minmax(var(--character-length),1fr))] empty:hidden"
	>
		{#each filtered_words.slice(0, limit) as word (word)}
			<li class="text-center font-mono"><WiktionaryLink {word} /></li>
		{/each}
	</ul>
	{#if filtered_words.length > limit}
		<p class="font-light italic tabular-nums text-gray-500">
			{format(filtered_words.length - limit)} more not shown
		</p>
	{/if}
{/if}
