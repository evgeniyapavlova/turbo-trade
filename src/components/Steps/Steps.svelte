<script>
	import Image from '$common/Image.svelte';

	export let content, tradeNow;
	const { list } = content;
</script>

<section class="steps">
	<div class="content">
		<h2>
			{@html content.title}
		</h2>

		<div class="steps-list">
			{#each list as item, idx}
				<div class="steps-item">
					<div class="steps-number">
						{idx + 1}
					</div>
					<div class="steps-block">
						<Image path="steps/step{idx + 1}" classes="steps-img" />
						<p>{item.title}</p>
						<span>{item.caption}</span>
					</div>
				</div>
			{/each}
		</div>

		<div class="btn-wrap">
			<a class="button-primary button-size-l" href="#">
				{tradeNow}
			</a>
		</div>
	</div>
</section>

<style lang="scss">
	:global(.steps-img) {
		@media screen and (max-width: 800px) {
			display: none;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 48px;

		@media screen and (max-width: 800px) {
			gap: 32px;
		}
	}

	.btn-wrap {
		margin: 0 auto;
	}

	.steps {
		text-align: center;
		padding: 153px 0;

		@media screen and (max-width: 1100px) {
			padding: 80px 0;
		}

		&-item {
			display: flex;
			flex-direction: column;
			width: calc(33% - 27px);

			@media screen and (max-width: 800px) {
				flex-direction: row;
				gap: 16px;
				align-items: center;
				padding: 16px;
				border-radius: 20px;
				background:
					radial-gradient(
						438.35% 122.68% at 0% 0%,
						rgba(153, 233, 0, 0.1) 0%,
						rgba(0, 0, 0, 0) 100%
					),
					rgba(255, 255, 255, 0.02);

				width: auto;
				min-width: 300px;
			}
		}

		&-block {
			border-radius: 20px;
			background:
				radial-gradient(438.35% 122.68% at 0% 0%, rgba(153, 233, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%),
				rgba(255, 255, 255, 0.02);
			padding: 32px 16px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 14px;

			@media screen and (max-width: 1100px) {
				gap: 8px;
			}

			@media screen and (max-width: 800px) {
				padding: 0;
				background: none;
				align-items: flex-start;
			}

			p {
				color: #fff;
				text-align: center;
				font-size: 28px;
				font-weight: 700;

				@media screen and (max-width: 1100px) {
					font-size: 21px;
				}
			}

			span {
				display: block;
				opacity: 0.7;
				color: #fff;
				text-align: center;
				font-size: 18px;

				@media screen and (max-width: 1100px) {
					font-size: 14px;
				}
			}
		}

		&-number {
			opacity: 0.3;
			background: linear-gradient(180deg, #9aea19 0%, rgba(18, 24, 31, 0) 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			text-align: center;
			font-size: 150px;
			font-weight: 700;
			text-align: center;
			margin-bottom: -30px;

			@media screen and (max-width: 800px) {
				font-size: 70px;
				margin-bottom: 0;
			}
		}

		&-list {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: flex-start;
			max-width: 1130px;
			margin: 0 auto;
			gap: 40px;

			@media screen and (max-width: 1100px) {
				gap: 24px;
			}

			@media screen and (max-width: 800px) {
				gap: 16px;
				flex-direction: column;
				align-items: center;
			}
		}
	}

	h2 {
		color: #fff;
		font-size: 48px;
		font-weight: 700;

		@media screen and (max-width: 800px) {
			font-size: 32px;
		}
	}

	:global(.steps h2 span) {
		color: var(--Green-Turbo);
		display: block;
	}
</style>
