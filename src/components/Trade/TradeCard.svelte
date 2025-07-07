<script>
	import { getRandomNames, names, getRandomProfit } from './tableData';

	export let asset, tradeNow, content;

	const amount = [
		getRandomProfit(30000, 50000),
		getRandomProfit(10000, 30000),
		getRandomProfit(5000, 10000)
	];
</script>

<div class="swiper-slide">
	<div class="trade-card-title">
		<img src="https://static.cdnroute.io/files/{asset.logo}" alt="" />
		<div style="max-width: calc(100% - 56px - 13px)">
			<div class="trade-card-asset-name">{asset.name}</div>
			<div class="trade-card-asset-desc">{content.top3}</div>
		</div>
	</div>
	<div class="trade-card-table">
		{#each getRandomNames(names) as name, idx}
			<div class="trade-card-table-row">
				<span>
					{name}
				</span>
				<span> +${amount[idx]}</span>
			</div>
		{/each}
	</div>
	<p>
		{content.caption
			.replace('{{amountTraders}}', getRandomProfit(500, 5000))
			.replace('{{amountMoney}}', getRandomProfit(100000, 500000))
			.replace('{{asset}}', asset.name)}
	</p>
	<a class="button-primary button-size-l" href="#">
		{tradeNow}
	</a>
</div>

<style lang="scss">
	:global(.trade .swiper-slide:not(.swiper-slide-active)) {
		opacity: 0.6;
		transform: scale(0.95);
	}

	:global(.trade .swiper-slide.swiper-slide-active) {
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.swiper-slide {
		width: 300px;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(25px);
		display: flex;
		padding: 30px 20px;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		transition:
			transform 0.2s ease-in-out,
			opacity 0.2s ease-in-out,
			border-color 0.2s ease-in-out;
	}

	.trade {
		&-card {
			&-title {
				display: flex;
				gap: 13px;
				align-items: center;
				width: 100%;
				text-align: left;
				pointer-events: none;

				img {
					width: 56px;
					height: 56px;
					border-radius: 56px;
					display: block;
				}
			}

			&-table {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 18px;
				pointer-events: none;
			}

			&-table-row {
				display: flex;
				width: 100%;
				align-items: center;
				justify-content: space-between;

				span:last-child {
					color: #6cce80;
				}
			}

			&-asset-name {
				font-size: 28px;
				font-weight: 700;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			&-asset-desc {
				font-size: 18px;
			}
		}
	}

	.button-primary {
		min-width: 100%;
	}
</style>
