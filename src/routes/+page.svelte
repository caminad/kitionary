<script>
	import FilteredWordsList from './FilteredWordList.svelte';

	const { format } = new Intl.NumberFormat();

	let pattern = '';

	/** @type {RegExp} */
	let regexp;
	/** @type {SyntaxError | undefined} */
	let error;
	$: try {
		regexp = new RegExp(pattern, 'iu');
		error = undefined;
	} catch (e) {
		// keep previous regexp on syntax error
		if (e instanceof SyntaxError) {
			error = e;
		} else {
			throw e;
		}
	}
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
		class="relative grid"
		autocapitalize="off"
		autocomplete="off"
		spellcheck="false"
	>
		<input
			class="border-b-2 p-1 text-center"
			class:border-red-600={error}
			placeholder="search by regex"
			bind:value={pattern}
		/>
		{#if error}
			<p
				class="absolute top-full rounded-b bg-red-600 px-1 text-sm font-medium text-white shadow"
			>
				{error.message}
			</p>
		{/if}
	</form>
	{#await import('./words.json') then { default: words }}
		{#if pattern === ''}
			<p class="italic text-gray-500 tabular-nums font-light">
				{format(words.length)} words loaded
			</p>
		{:else}
			<FilteredWordsList
				{words}
				predicate={(word) => regexp.test(word)}
				limit={500}
			/>
		{/if}
	{/await}
</main>
