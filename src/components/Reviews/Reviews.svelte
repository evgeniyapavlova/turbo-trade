<script>
	import { base } from '$app/paths';
	import { localeFull } from '$lib/stores/locale';
	import { reg } from '$lib/stores/links';

	export let content, tradeNow;

	const reviewers = [
		{ name: 'Roberto G.', country: 'Argentina', profit: 7340 },
		{ name: 'Fahad S.', country: 'Saudi Arabia', profit: 37388 },
		{ name: 'David D.', country: 'Brazil', profit: 5845 },
		{ name: 'Amit T.', country: 'India', profit: 18493 },
		{ name: 'Daniel G.', country: 'Australia', profit: 17380 },
		{ name: 'Jorge L.', country: 'Chile', profit: 47182 }
	];

	const numbersListText = [content.traders, content.tradingVolume, content.countries];
</script>

<section class="reviews" id="reviews">
	<div class="content">
		<h2 class="title-2-main">{@html content.title}</h2>

		<div class="reviews-content">
			<a href={$reg} class="button-primary button-size-l button-mobile">
				{tradeNow}
			</a>

			<div class="reviews-list">
				{#each content.list as text, idx}
					<div class="reviews-item-wrap reviews-item-wrap-{idx + 1}">
						<div class="reviews-item reviews-item-{idx + 1}">
							<div class="reviews-item-title">
								<img
									src="{base}/images/reviews/{idx + 1}.webp"
									class="reviews-avatar"
									alt="Review author"
								/>
								<div class="reviews-author">
									<div class="reviews-author-name">
										<span>{reviewers[idx].name},</span>
										<span>{reviewers[idx].country}</span>
									</div>

									<div class="reviews-author-profit">
										<span>+${reviewers[idx].profit.toLocaleString($localeFull)}</span>
										<span>
											{content.profit}
										</span>
									</div>
								</div>
							</div>
							<div class="reviews-item-text">
								{@html text}
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="reviews-numbers">
				{#each ['36,351', '$1,484,84', '100+'] as item, idx}
					<div class="reviews-number">
						<p class="reviews-number-title">
							{item}
						</p>
						<p class="reviews-number-caption">
							{numbersListText[idx]}
						</p>
					</div>
				{/each}
				<a href="#" class="button-primary button-size-l button-desktop">
					{tradeNow}
				</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	h2 {
		margin-bottom: 48px;

		@media screen and (max-width: 960px) {
			margin-bottom: 32px;
		}
	}

	.reviews-list {
		display: flex;
		margin: 0 auto;
		flex-wrap: wrap;

		@media screen and (max-width: 960px) {
			flex-wrap: nowrap;
			gap: 18px;
			scroll-snap-type: x mandatory;
			overflow-x: auto;
			scroll-behavior: smooth;

			&::-webkit-scrollbar {
				display: none;
			}

			& {
				-ms-overflow-style: none;
				scrollbar-width: none;
			}
		}
	}

	.reviews {
		background-image: url(/images/map.webp);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 1400px auto;

		@media screen and (max-width: 960px) {
			background-size: 900px auto;
		}

		.button-desktop {
			display: none;

			@media screen and (min-width: 961px) {
				display: block;
			}
		}

		.button-mobile {
			display: block;

			@media screen and (min-width: 961px) {
				display: none;
			}
		}

		&-numbers {
			display: flex;
			flex-direction: column;
			gap: 48px;
			align-items: center;
		}

		&-number {
			text-align: center;

			&-title {
				color: var(--Green-Turbo);
				font-size: 64px;
				font-weight: 700;

				@media screen and (max-width: 960px) {
					font-size: 32px;
				}
			}

			&-caption {
				font-size: 36px;

				@media screen and (max-width: 960px) {
					font-size: 24px;
				}
			}
		}

		&-content {
			display: flex;
			align-items: center;
			justify-content: space-between;

			@media screen and (max-width: 960px) {
				flex-direction: column-reverse;
				gap: 32px;
			}
		}

		&-list {
			@media screen and (min-width: 961px) {
				width: calc(100% - 400px);
			}

			@media screen and (min-width: 1401px) {
				width: calc(100% - 550px);
			}

			@media screen and (max-width: 960px) {
				width: calc(100% + 48px);
				margin-left: -24px;
				margin-right: -24px;
				padding: 0 40px;
				position: relative;

				mask-image: linear-gradient(
					270deg,
					rgba(115, 115, 115, 0) 0%,
					#7b7b7b 20%,
					#cccccc 80%,
					rgba(217, 217, 217, 0) 100%
				);
				mask-mode: alpha;
				mask-repeat: no-repeat;
				mask-size: 100% 100%;
				mask-position: center;

				-webkit-mask-image: linear-gradient(
					270deg,
					rgba(115, 115, 115, 0) 0%,
					#7b7b7b 20%,
					#cccccc 80%,
					rgba(217, 217, 217, 0) 100%
				);
				-webkit-mask-mode: alpha;
				-webkit-mask-repeat: no-repeat;
				-webkit-mask-size: 100% 100%;
				-webkit-mask-position: center;
			}
		}

		&-numbers {
			width: 560px;

			@media screen and (max-width: 1400px) {
				width: 400px;
			}
		}

		&-item {
			padding: 16px;
			border-radius: 20px;
			background: rgba(255, 255, 255, 0.05);
			backdrop-filter: blur(25px);

			@media screen and (max-width: 960px) {
				background: none;
				backdrop-filter: none;
				border-radius: 0;
				padding: 24px 12px;
			}

			&-text {
				@media screen and (min-width: 961px) {
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
					line-height: 22px;
					height: calc(22px * 2);
				}

				@media screen and (min-width: 960px) and (max-width: 1200px) {
					font-size: 16px;
				}
			}

			&-wrap {
				@media screen and (max-width: 960px) {
					scroll-snap-align: center;
					width: 250px;
					min-width: 250px;
					border-radius: 15px;
					border: 1px solid rgba(255, 255, 255, 0.2);
					background: #10111b;
				}

				@media screen and (min-width: 961px) {
					padding: 9px;

					&-1 {
						width: 100%;
						.reviews-item {
							max-width: 380px;
						}
					}
					&-2 {
						width: 60%;
					}
					&-3 {
						width: 40%;
					}
					&-4 {
						width: 45%;
					}
					&-5 {
						width: 55%;
						.reviews-item {
							max-width: 290px;
						}
					}
					&-6 {
						width: 100%;
						.reviews-item {
							max-width: 420px;
						}
					}
				}
			}

			&-title {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: 14px;
				margin-bottom: 14px;

				@media screen and (max-width: 960px) {
					flex-direction: column;
					gap: 18px;
				}
			}
		}

		&-avatar {
			width: 68px;
			height: 68px;
			border-radius: 68px;
			display: block;
		}

		&-author {
			@media screen and (max-width: 960px) {
				text-align: center;
			}

			&-name {
				color: rgba(255, 255, 255, 0.5);
				font-size: 18px;
				font-weight: 400;
				margin-bottom: 8px;

				span:first-child {
					color: white;
					font-weight: 700;
				}

				@media screen and (min-width: 960px) and (max-width: 1200px) {
					span:last-child {
						display: block;
						font-size: 14px;
					}
				}
			}

			&-profit {
				color: var(--Green-Turbo);
				font-size: 18px;
				font-weight: 400;

				span:first-child {
					font-weight: 700;
				}

				@media screen and (min-width: 960px) and (max-width: 1200px) {
					font-size: 16px;
					span:last-child {
						display: none;
					}
				}
			}
		}
	}
</style>
