<script>
	import { base } from '$app/paths';
	import { isDesktop } from '$lib/stores/device';
	export let content;

	const { list, devices } = content;
</script>

<section class="features">
	<div class="content">
		<div class="features-wrap">
			<div class="features-list">
				{#each list as { title, caption }, idx}
					<div class="features-item">
						<div class="features-img">
							<img src="{base}/images/features/icon{idx + 1}.svg" alt="Features icon" />
						</div>
						<div>
							<h4 class="title-3">{title}</h4>
							<p>{caption}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="features-devices">
				<div>
					<div class="features-devices-title">
						{devices.title}
					</div>

					<div class="features-devices-caption">
						{devices.caption}
					</div>
				</div>
				{#if $isDesktop}
					<div class="features-devices-qr-code">
						<img src="{base}/images/features/qr-code.svg" alt="QR code" />
					</div>
				{:else}
					<div class="features-devices-apps-list">
						<a class="apps-item" href="#">
							<img src="{base}/images/features/android-app.svg" alt="Android App" />
							<div>
								<p>Android App</p>
								<p>{devices.instantAccess}</p>
							</div>
						</a>

						<a class="apps-item" href="#">
							<img src="{base}/images/features/android-apk.svg" alt="Android Apk" />
							<div>
								<p>Android APK</p>
								<p>{devices.emailOnly}</p>
							</div>
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.features {
		.apps-item {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			text-align: start;
			border-radius: 20px;
			background:
				radial-gradient(438.35% 122.68% at 0% 0%, rgba(153, 233, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%),
				rgba(255, 255, 255, 0.02);
			padding: 24px 16px;
			gap: 16px;

			p:first-child {
				font-size: 21px;
				font-weight: 700;
				margin-bottom: 8px;
			}
			p:last-child {
				font-size: 14px;
				opacity: 0.7;
			}
		}

		&-wrap {
			border-radius: 20px;
			background:
				radial-gradient(438.35% 122.68% at 0% 0%, rgba(153, 233, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
				rgba(255, 255, 255, 0.02);
			backdrop-filter: blur(26.25px);
			padding: 40px;
			display: flex;
			gap: 40px;
			align-items: center;
			justify-content: space-between;

			@media screen and (max-width: 1150px) {
				display: block;
				backdrop-filter: none;
				padding: 0;
				background: none;
			}
		}

		&-devices {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 24px;
			min-width: 28%;
			flex-direction: row-reverse;
			&-apps-list {
				display: flex;
				flex-direction: column;
				gap: 24px;
			}

			@media screen and (max-width: 1150px) {
				flex-direction: column;
				max-width: 100%;
				text-align: center;
			}

			&-qr-code {
				padding: 10px;
				border-radius: 10px;
				background-color: #fff;

				img {
					display: block;
				}
			}

			&-title {
				font-size: 20px;
				font-weight: 700;
				margin-bottom: 8px;

				@media screen and (max-width: 1150px) {
					font-size: 32px;
				}
			}

			&-caption {
				font-size: 14px;

				@media screen and (max-width: 1150px) {
					font-size: 16px;
				}
			}
		}

		&-list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 20px 44px;

			@media screen and (max-width: 1150px) {
				background:
					radial-gradient(
						438.35% 122.68% at 0% 0%,
						rgba(153, 233, 0, 0.2) 0%,
						rgba(0, 0, 0, 0) 100%
					),
					rgba(255, 255, 255, 0.02);
				backdrop-filter: blur(26.25px);
				border-radius: 20px;
				margin-left: 0;
				padding: 32px;
				margin-bottom: 40px;
			}

			@media screen and (max-width: 800px) {
				grid-template-columns: repeat(1, 1fr);
				gap: 18px;
			}

			.title-3 {
				margin-bottom: 8px;

				@media screen and (max-width: 600px) {
					margin-bottom: 4px;
				}
			}
		}

		&-item {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			gap: 24px;

			@media screen and (max-width: 600px) {
				align-items: center;
				p {
					font-size: 13px;
				}
			}
		}

		&-img {
			min-width: 100px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: -20px;
			margin-right: -20px;

			@media screen and (max-width: 600px) {
				max-width: 70px;
				min-width: 70px;
				img {
					max-width: 100%;
				}
			}
		}
	}
</style>
