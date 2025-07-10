<script>
	import { onMount } from 'svelte';
	import { assets } from './tableData';
	import TradeCard from './TradeCard.svelte';
	export let content, tradeNow;

	let swiper;

	onMount(async () => {
		const { Swiper } = await import('swiper');
		const { Navigation, Mousewheel, Autoplay } = await import('swiper/modules');

		// @ts-ignore
		await import('swiper/css');

		swiper = new Swiper('.swiper-trade', {
			modules: [Mousewheel, Navigation, Autoplay],
			direction: 'horizontal',
			slidesPerView: 'auto',
			centeredSlides: true,
			mousewheel: {
				releaseOnEdges: true,
				thresholdTime: 600,
				forceToAxis: true,
				thresholdDelta: 10
			},
			grabCursor: true,
			loop: true,
			spaceBetween: 20,
			initialSlide: 2,
			navigation: {
				nextEl: '.swiper-trade-button-next',
				prevEl: '.swiper-trade-payments-button-prev'
			},
			autoplay: true
		});
	});
</script>

<section class="trade">
	<div class="content">
		<h2>{content.title}</h2>
		<div class="swiper-trade">
			<div class="swiper-wrapper">
				{#each assets as asset}
					<TradeCard {asset} {tradeNow} {content} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	h2 {
		color: var(--Green-Turbo);
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		margin-bottom: 60px;
	}

	.trade {
		.swiper-trade {
			@media screen and (min-width: 801px) {
				mask-image: linear-gradient(
					270deg,
					rgba(115, 115, 115, 0) 0%,
					#7b7b7b 18%,
					#cccccc 82%,
					rgba(217, 217, 217, 0) 100%
				);
				mask-mode: alpha;
				mask-repeat: no-repeat;
				mask-size: 100% 100%;
				mask-position: center;

				-webkit-mask-image: linear-gradient(
					270deg,
					rgba(115, 115, 115, 0) 0%,
					#7b7b7b 18%,
					#cccccc 82%,
					rgba(217, 217, 217, 0) 100%
				);
				-webkit-mask-mode: alpha;
				-webkit-mask-repeat: no-repeat;
				-webkit-mask-size: 100% 100%;
				-webkit-mask-position: center;
			}
		}
	}
</style>
