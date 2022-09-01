<script>
	/** @type {string} */
	export let word;
</script>

<a
	class="text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-2"
	href={`https://en.wiktionary.org/wiki/${word}`}>{word.replace(/_/g, ' ')}</a
>
