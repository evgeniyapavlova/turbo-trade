<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$common/Header';
	import Intro from '$comps/Intro';
	import Crush from '$comps/Crush';
	import Features from '$comps/Features';
	import Steps from '$comps/Steps';
	import Trade from '$comps/Trade';
	import Reviews from '$comps/Reviews';
	import Protection from '$comps/Protection';
	import Footer from '$common/Footer.svelte';
	import Counter from '$comps/Intro/components/Counter.svelte';
	import LoaderHorizontal from '$common/LoaderHorizontal.svelte';

	import { isRedirecting } from '$lib/stores/isRedirecting';

	import { locale } from '$lib/stores/locale.js';
	import { reg, login, searchString } from '$lib/stores/links';

	import '$lib/styles/styles.scss';

	export let data;
	const { translations } = data;
	$locale = data.lang;

	onMount(() => {
		$searchString = window.location.search;
		$reg = $reg + $searchString;
		$login = $login + $searchString;
	});
</script>

{#if $isRedirecting}<LoaderHorizontal />{/if}

<div class="app">
	<div class="gradient-wrap">
		<Header content={translations.header} tradeNow={translations.buttons.tradeNow} />
		<Intro
			content={{
				intro: translations.intro,
				counter: translations.counter,
				tradeNow: translations.buttons.tradeNow
			}}
		/>
	</div>

	<div class="content counter-mobile">
		<Counter content={translations.counter} />
	</div>

	<Crush content={translations.crush} />
	<Features content={translations.features} />
	<Steps content={translations.steps} tradeNow={translations.buttons.tradeNow} />
	<Trade content={translations.trade} tradeNow={translations.buttons.tradeNow} />
	<Reviews content={translations.reviews} tradeNow={translations.buttons.tradeNow} />
	<Protection content={translations.protection} tradeNow={translations.buttons.tradeNow} />
	<Footer content={translations.footer} />
</div>

<style lang="scss">
	.counter-mobile {
		display: none;

		@media screen and (max-width: 990px) {
			display: flex;
			position: relative;
		}
	}
</style>
