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

<div class="lang-switch-wrap" id="lang-switch-wrap">
	<button
		class="button-locale"
		on:click={() => (isExpanded = !isExpanded)}
		class:is-expanded={isExpanded}
		aria-label="Open languages menu"
	>
		<img src="{base}/images/locales/{currentLocaleObj?.shortname}.svg" alt="" />
		{currentLocaleObj?.title}
		<Arrow />
	</button>

	{#if isExpanded}
		<menu id="lang-switch-menu" class="lang-switch-menu" transition:fade>
			{#each LOCALES_MAP as locale}
				<a class="" href="{base}/{locale.shortname}">
					{locale.title}
				</a>
			{/each}
		</menu>
	{/if}
</div>

<style lang="scss">
	.lang-switch {
		&-wrap {
			position: relative;
		}

		&-menu {
			position: absolute;
			background-color: var(--bgr);
			border-radius: 10px;
			color: var(--main-font-color);
			text-align: start;
			padding: 8px 12px;
			top: 38px;
			left: 0;
			box-shadow: 12px 19px 0px 0px rgba(0, 0, 0, 0.05);
			z-index: 2;

			&::before {
				content: '';
				position: absolute;
				top: -6px;
				left: calc(50% - 6px);
				width: 0;
				height: 0;
				border-left: 6px solid transparent;
				border-right: 6px solid transparent;
				border-bottom: 6px solid var(--bgr);
			}

			a {
				padding: 10px 16px;
				transition: background-color 0.2s ease-in-out;
				display: block;
				border-radius: 10px;
                font-size: 16px;

				&:hover {
					background-color: rgba(255, 255, 255, 0.1);
				}
			}
		}
	}

	.button-locale {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;

		img {
			width: 18px;
			height: 18px;
			border-radius: 18px;
			display: block;
		}
	}

	:global(.button-locale.is-expanded svg) {
		transform: rotate(180deg);
	}
</style>
