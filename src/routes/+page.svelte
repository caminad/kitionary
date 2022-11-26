<script>
	import FilteredWordsList from "$lib/FilteredWordList.svelte";
	import RegExpSearch from "$lib/RegExpSearch.svelte";
	import { fetch_words } from "$lib/wiktionary_data";

	let character_count = 5;
	let regexp = /(?:)/;
</script>

<svelte:head>
	<title>Kitionary</title>
	<meta
		name="description"
		content="A regular expression dictionary search for cheating at Wordle."
	/>
</svelte:head>

<main class="grid gap-3 p-3 text-center">
	<h1 class="text-2xl font-black">Kitionary</h1>
	<form
		class="grid auto-cols-fr gap-3 sm:grid-flow-col"
		autocapitalize="off"
		autocomplete="off"
		spellcheck="false"
	>
		<label class="flex place-items-center gap-1">
			Length
			<input
				class="flex-1 rounded border p-1 shadow-inner"
				type="number"
				min={1}
				max={128}
				step={1}
				placeholder="characters"
				bind:value={character_count}
			/>
		</label>
		<RegExpSearch bind:value={regexp} />
	</form>
	{#await fetch_words({ character_count })}
		<p class="font-light italic text-gray-500">
			Loading {character_count}-character words...
		</p>
	{:then words}
		<FilteredWordsList {character_count} {words} {regexp} />
	{/await}
</main>
