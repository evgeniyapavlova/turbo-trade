<script lang="ts">
	import Image from '$common/Image.svelte';

	export let content;
	const { intro, counter, tradeNow } = content;
</script>

<section class="intro">
	<Image path="intro/rocket" classes="intro-rocket" />
	<div class="content">
		<div class="intro-left">
			<h1>{@html intro.h1}</h1>
			<h2>{intro.h2}</h2>
			<div class="text">{intro.caption}</div>
			<a href="" class="button-secondary button-size-l">{tradeNow}</a>
		</div>

		<div class="intro-right">
			<div class="counter"></div>
		</div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/_constants.scss' as var;

	.content {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;

		@media screen and (max-width: 990px) {
			display: block;
		}
	}

	.intro {
		position: relative;

		@media screen and (max-width: var.$tab) {
			padding-top: 60px;
		}

		@media screen and (max-width: 990px) {
			padding-top: 90px;
			padding-bottom: 60px;
		}

		@media screen and (max-width: 600px) {
			padding-top: 30px;
			padding-bottom: 0;
		}

		&-left {
			display: flex;
			flex-direction: column;
			gap: 20px;
			max-width: 480px;

			@media screen and (max-width: 1200px) {
				max-width: 40%;
			}

			@media screen and (max-width: 990px) {
				max-width: calc(100% - 200px);
			}

			@media screen and (max-width: 600px) {
				gap: 10px;
				max-width: 350px;
				width: calc(100% - 100px);
			}
		}

		&-right {
			width: 440px;
			max-width: 35%;

			@media screen and (max-width: 990px) {
				position: absolute;
				display: none;
			}
		}
	}
	.text {
		font-size: 20px;

		@media screen and (max-width: 600px) {
			font-size: 14px;
		}
	}
	.counter {
		border-radius: 20px;
		background: #fff;
		box-shadow: 12px 19px 0px 0px rgba(0, 0, 0, 0.05);
		height: 400px;
	}

	:global(.intro-rocket) {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: -32%;
		width: 444px;

		@media screen and (max-width: 1200px) {
			width: 300px;
			top: -85px;
		}

		@media screen and (max-width: var.$tab) {
			top: 25px;
		}

		@media screen and (max-width: 990px) {
			left: auto;
			width: 440px;
			right: -416px;
			top: -105px;
		}

		@media screen and (max-width: 600px) {
			width: 250px;
			right: -237px;
			top: -60px;
		}
	}

	:global(.intro-rocket img) {
		display: block;
		max-width: 100%;
	}
</style>
