<script>
	import { base } from '$app/paths';
	import { reg } from '$lib/stores/links';

	export let content, tradeNow;
</script>

<section class="protection">
	<div class="content">
		<h2 class="title-2-main">{@html content.title}</h2>
		<div class="caption">
			{content.caption}
		</div>
		<div class="protection-list">
			{#each content.list as item, idx}
				<div class="protection-item">
					<div class="protection-item-icon">
						<img src="{base}/images/protection/icon{idx + 1}.svg" alt="" />
					</div>
					<p class="protection-item-title">{@html item.title}</p>
					<p class="protection-item-caption">{item.caption}</p>
				</div>
			{/each}
		</div>
		<a href={$reg} class="button-primary button-size-l button-desktop">
			{tradeNow}
		</a>
	</div>
</section>

<style lang="scss">
	.button-primary {
		margin: 0 auto;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 48px;

		@media screen and (max-width: 800px) {
			gap: 32px;
		}
	}

	.caption {
		text-align: center;
		font-size: 28px;
		max-width: 1070px;
		margin: 0 auto;

		@media screen and (max-width: 800px) {
			font-size: 16px;
		}
	}

	.protection {
		&-list {
			display: flex;
			align-items: stretch;
			gap: 48px;
			justify-content: space-between;

			@media screen and (max-width: 1150px) {
				flex-wrap: wrap;
			}

			@media screen and (max-width: 800px) {
				gap: 16px;
				flex-direction: column;
				margin: 0 auto;
				align-items: center;
			}
		}

		&-item {
			padding: 32px 16px;
			border-radius: 20px;
			background: rgba(255, 255, 255, 0.05);
			backdrop-filter: blur(25px);
			display: flex;
			flex-direction: column;
			gap: 24px;
			align-items: center;
			text-align: center;
			width: calc(25% - 36px);

			@media screen and (max-width: 1150px) {
				width: calc(50% - 24px);
			}

			@media screen and (max-width: 800px) {
				gap: 8px 16px;
				align-items: start;
				padding: 24px 16px;
				text-align: start;
				width: 100%;
				max-width: 400px;
				background:
					radial-gradient(
						438.35% 122.68% at 0% 0%,
						rgba(153, 233, 0, 0.1) 0%,
						rgba(0, 0, 0, 0) 100%
					),
					rgba(255, 255, 255, 0.02);
			}

			&-icon {
				margin-top: -30px;
				margin-bottom: -54px;

				@media screen and (max-width: 800px) {
					width: 25%;
					margin: 0;
					position: absolute;
					left: 16px;
					top: 0;
					height: 100%;

					img {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						width: 130px;
					}
				}
			}

			&-title {
				font-size: 28px;
				font-weight: 700;

				@media screen and (max-width: 800px) {
					font-size: 21px;
					padding-left: calc(25% + 16px);
				}
			}

			&-caption {
				@media screen and (max-width: 800px) {
					font-size: 14px;
					color: rgba(255, 255, 255, 0.7);
					padding-inline-end: 16px;
					padding-left: calc(25% + 16px);
				}
			}
		}
	}
</style>
