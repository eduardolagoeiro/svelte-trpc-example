<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1 class="text-3xl font-bold underline">{data?.hello}</h1>
<h1 class="text-3xl font-bold underline">{data?.greeting.newValue}</h1>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
