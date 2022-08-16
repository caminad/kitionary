<script>
	import words from './words.json';

	const MATCH_NOTHING = /(?!)/;

	let pattern = '';

	let re = MATCH_NOTHING;
	$: {
		if (pattern) {
			try {
				re = new RegExp(pattern);
			} catch {
				// postpone update on syntax error
			}
		} else {
			re = MATCH_NOTHING;
		}
	}
	$: filteredWords = words.filter((w) => re.test(w));
</script>

<svelte:head>
	<title>Kitionary</title>
</svelte:head>

<main>
	<h1>Kitionary</h1>
	<input bind:value={pattern} placeholder="search by regex" />
	{#if pattern}
		<p>{filteredWords.length} / {words.length}</p>
		<ul>
			{#each filteredWords.slice(0, 100) as word}
				<li>
					<a href={`https://en.wiktionary.org/wiki/${word}`}>{word}</a>
				</li>
			{/each}
		</ul>
	{/if}
</main>

<style>
	main {
		@apply grid place-content-center place-items-center gap-3 p-3;
	}
	h1 {
		@apply text-2xl font-black;
	}
	input {
		@apply border-b-2 text-center;
	}
	p {
		@apply font-thin tabular-nums;
	}
	li {
		@apply font-mono;
	}
	a {
		@apply text-blue-600;
	}
	a:hover {
		@apply text-blue-800 underline underline-offset-2;
	}
</style>
