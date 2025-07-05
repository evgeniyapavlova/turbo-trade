<script lang="ts">
	import Header from '$common/Header';
	import Intro from '$comps/Intro';
	import Crush from '$comps/Crush';
	import Features from '$comps/Features';
	import '$lib/styles/styles.scss';
	import { locale } from '$lib/stores/locale.js';

	export let data;
	const { translations } = data;
	$locale = data.lang;
</script>

<!-- <div class="gradient-wrap">
	<Header content={translations.header} tradeNow={translations.buttons.tradeNow} />
	<Intro
		content={{
			intro: translations.intro,
			counter: translations.counter,
			tradeNow: translations.buttons.tradeNow
		}}
	/>
	
</div> -->

<Crush content={translations.crush} />
<Features content={translations.features} />
