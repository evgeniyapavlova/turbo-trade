<script lang="ts">
	import { onMount } from 'svelte';

	export let content: {
		title: string;
		in: string;
		just: string;
		result: string;
		periods: {
			m1: string;
			m2: string;
			y1: string;
		};
	};

	let investment = 2500;
	let selectedCoin = 'bitcoin';
	let selectedPeriod = 'm1';

	const historicalPrices = {
		bitcoin: { m1: 30000, m2: 27000, y1: 18000 },
		ethereum: { m1: 1900, m2: 1800, y1: 1100 },
		solana: { m1: 85, m2: 70, y1: 35 }
	};

	const currentPrices = {
		bitcoin: 60000,
		ethereum: 3200,
		solana: 140
	};

	$: result = (() => {
		const pastPrice = historicalPrices[selectedCoin][selectedPeriod];
		const currentPrice = currentPrices[selectedCoin];
		const coinsBought = investment / pastPrice;
		return (coinsBought * currentPrice).toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		});
	})();

	$: progressPercent = `${(investment / 5000) * 100}%`;
</script>

<div class="counter">
	<p class="counter-title">{content.title}</p>
	<div style="width: 100%;">
		<div class="counter-amount">${investment}</div>
		<div class="input-wrap" style="--progress: {progressPercent};">
			<input type="range" min="0" max="5000" bind:value={investment} />
		</div>
	</div>

	<div class="counter-block">
		<div class="counter-label">{content.in}</div>
		<div class="counter-buttons">
			{#each ['Bitcoin', 'Ethereum', 'Solana'] as asset}
				<button
					class:selected={selectedCoin === asset.toLowerCase()}
					on:click={() => (selectedCoin = asset.toLowerCase())}>{asset}</button
				>
			{/each}
		</div>
	</div>

	<div class="counter-block">
		<div class="counter-label">{content.just}</div>
		<div class="counter-buttons">
			{#each ['m1', 'm2', 'y1'] as period}
				<button
					class:selected={selectedPeriod === period}
					on:click={() => (selectedPeriod = period)}
				>
					{content.periods[period]}
				</button>
			{/each}
		</div>
	</div>

	<div class="counter-result">
		{content.result}
		<p class="counter-result-amount">{result}</p>
	</div>
</div>

<style lang="scss">
	@mixin thumb {
		-webkit-appearance: none;
		appearance: none;
		width: var(--thumb-size);
		height: var(--thumb-size);
		background: #4cb200;
		border-radius: var(--thumb-size);
		cursor: pointer;
		position: relative;
		z-index: 2;
	}

	.counter {
		border-radius: 20px;
		background: #fff;
		box-shadow: 12px 19px 0px 0px rgba(0, 0, 0, 0.05);
		padding: 20px 24px;
		display: flex;
		gap: 24px;
		flex-direction: column;
		color: #000;
		--thumb-size: 30px;
        margin-bottom: -100px;

		@media screen and (max-width: 1100px) {
			gap: 16px;
		}

		@media screen and (max-width: 990px) {
			max-width: 400px;
			width: 100%;
			margin: 50px auto;
		}

		@media screen and (max-width: 600px) {
			padding: 12px 18px;
		}

		.input-wrap {
			position: relative;
			background-color: #f3f3f3;
			border-radius: 20px;
			--progress: 10%;
			margin-bottom: 5px;

			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 100%;
				width: var(--progress);
				background: #4cb200;
				height: 8px;
				border-radius: 20px 0 0 20px;
			}
		}

		input[type='range'] {
			width: 100%;
			position: relative;
			display: block;
			z-index: 0;
			background: transparent;
			-webkit-appearance: none;
			appearance: none;
			height: 8px;

			&::-webkit-slider-thumb {
				@include thumb;
			}

			&::-moz-range-thumb {
				@include thumb;
			}
		}

		&-amount {
			font-size: 24px;
			font-weight: 700;
			margin-bottom: 15px;

			@media screen and (max-width: 600px) {
				font-size: 16px;
			}
		}

		&-result {
			font-size: 24px;
			text-align: center;

			@media screen and (max-width: 600px) {
				font-size: 16px;
			}

			&-amount {
				text-align: center;
				color: #4cb200;
				font-size: 38px;
				font-weight: 700;

				@media screen and (max-width: 600px) {
					font-size: 24px;
				}
			}
		}

		&-buttons {
			display: flex;
			align-items: stretch;
			justify-content: space-between;
			gap: 16px;

			@media screen and (max-width: 600px) {
				gap: 8px;
			}
		}

		button {
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.1);
			color: rgba(0, 0, 0, 0.3);
			padding: 10px 5px;
			width: calc(33% - 10px);
			font-size: 16px;
			font-weight: 700;
			transition:
				color 0.2s ease-in-out,
				background-color 0.2s ease-in-out;

			@media screen and (max-width: 1100px) {
				font-size: 14px;
			}

			@media screen and (max-width: 600px) {
				width: calc(33% - 6px);
			}

			&.selected {
				background-color: #000;
				color: #fff;
			}
		}

		&-title {
			text-align: center;
			font-size: 38px;
			font-weight: 700;

			@media screen and (max-width: 600px) {
				font-size: 23px;
			}
		}

		&-label {
			margin-bottom: 8px;

			@media screen and (max-width: 600px) {
				font-size: 12px;
			}
		}
	}
</style>
