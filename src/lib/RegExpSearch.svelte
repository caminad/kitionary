<script>
	/** @type {RegExp} */
	export let value;

	/** @type {SyntaxError | undefined} */
	let error;

	let pattern = value.source === '(?:)' ? '' : value.source.replace(/_/g, ' ');

	$: try {
		value = new RegExp(pattern.replace(/ /g, '_'), 'iu');
		error = undefined;
	} catch (e) {
		if (e instanceof SyntaxError) {
			error = e;
		} else {
			throw e;
		}
	}
</script>

<div class="relative grid">
	<input
		class="appearance-none rounded border p-1 shadow-inner"
		class:border-red-600={error}
		class:rounded-bl-none={error}
		type="search"
		placeholder="search by regex"
		bind:value={pattern}
	/>
	{#if error}
		<p
			class="absolute top-full mr-2 rounded-b bg-red-600 px-1 text-sm font-medium text-white shadow"
		>
			{error.message}
		</p>
	{/if}
</div>
