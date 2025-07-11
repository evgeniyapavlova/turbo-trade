<script lang="ts">
	import { onMount } from 'svelte';
	import { LOCALES_MAP } from '$lib/translations/utils/locales';
	import { locale } from '$lib/stores/locale.js';
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import Arrow from './Arrow.svelte';

	let isExpanded = false;

	const currentLocaleObj = LOCALES_MAP.find(({ shortname }) => shortname === $locale);

	onMount(() => {
		function handleClick(event: Event) {
			const targetElement = event.target;
			if (!(targetElement instanceof Node)) return;

			const wrapElement = document.getElementById('lang-switch-wrap');
			const menuElement = document.getElementById('lang-switch-menu');

			if (!wrapElement?.contains(targetElement) && !menuElement?.contains(targetElement)) {
				isExpanded = false;
			}
		}

		document.body.addEventListener('click', handleClick);

		return () => {
			document.body.removeEventListener('click', handleClick);
		};
	});
</script>

<div class="lang-switch-wrap dropdown-wrap" id="lang-switch-wrap" class:is-expanded={isExpanded}>
	<button
		class="button-locale"
		on:click={() => (isExpanded = !isExpanded)}
		aria-label="Open languages menu"
	>
		<img src="{base}/images/locales/{currentLocaleObj?.shortname}.svg" alt="" />
		<span>{currentLocaleObj?.title}</span>
		<Arrow />
	</button>

	{#if isExpanded}
		<menu id="lang-switch-menu" class="lang-switch-menu dropdown-menu" transition:fade>
			{#each LOCALES_MAP as locale}
				<a class="#" href="{base}/{locale.shortname}">
					{locale.title}
				</a>
			{/each}
		</menu>
	{/if}
</div>

<style lang="scss">
	@use '$lib/styles/_constants.scss' as var;

	.button-locale {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		color: var(--black);

		img {
			width: 18px;
			height: 18px;
			border-radius: 18px;
			display: block;
		}
	}

	@media screen and (max-width: var.$tab) {
		.button-locale {
			span {
				display: none;
			}
		}
	}
</style>
