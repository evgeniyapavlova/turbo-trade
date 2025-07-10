<script>
	import { base } from '$app/paths';
	import Logo from '$common/Logo.svelte';
	import { searchString } from '$lib/stores/links';

	export let content;

	const socialLinks = [
		{ link: 'https://www.instagram.com/turbotradepro/', name: 'Instagram', icon: '' },
		{ link: 'https://t.me/turbotrade', name: 'Telegram', icon: '' },
		{ link: 'https://discord.com/users/turbotradepro', name: 'Discord', icon: '' },
		{ link: 'https://x.com/turbotradepro', name: 'X', icon: '' }
	];

	const legalLinks = [
		'aml',
		'general-fees',
		'order-execution',
		'payment-policy',
		'privacy',
		'terms',
		'cookies',
		'demo-accounts',
		'risk-disclosure',
		'withdrawal-policy'
	];
</script>

<footer>
	<div class="content">
		<div class="footer-logo">
			<Logo />
		</div>
		<div class="footer-middle">
			<div class="footer-middle-left">
				<div class="footer-rw">
					{content.rw}
				</div>
				<ul class="footer-social-links">
					{#each socialLinks as item}
						<li>
							<a href={item.link} target="_blank" title="Go to Turbo.Trade page on {item.name}">
								<img src="{base}/images/footer/{item.name.toLowerCase()}.svg" alt="" />
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<ul class="footer-legal-links">
				{#each legalLinks as item, idx}
					<li>
						<a href="https://turbo.trade.com/legal/{item}{$searchString}" target="_blank">
							{content.links[idx]}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="footer-bottom">
			© 2025 Turbo.Trade. {content.copyright}
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		padding: 40px 0 20px;

		@media screen and (max-width: 1150px) {
			font-size: 16px;
		}

		@media screen and (max-width: 600px) {
			text-align: center;
			font-size: 14px;
		}
	}

	.footer {
		&-bottom {
			text-align: center;
		}

		&-rw {
			margin-bottom: 18px;
		}

		&-middle {
			display: flex;
			margin-top: 18px;
			align-items: flex-start;
			justify-content: space-between;
			gap: 48px;
			padding-bottom: 24px;
			margin-bottom: 24px;
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);

			@media screen and (max-width: 1150px) {
				flex-direction: column;
				gap: 32px;
			}

			&-left {
				width: 50%;

				@media screen and (max-width: 1150px) {
					width: 100%;
				}
			}
		}

		&-logo {
			width: 100%;
			text-align: start;

			@media screen and (max-width: 600px) {
				text-align: center;
			}
		}

		&-legal-links {
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;
			gap: 18px;
			width: 50%;
			margin-top: -44px;

			a {
				position: relative;
				transition: color 0.2s ease-in-out;

				&::after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: -4px;
					width: 0;
					height: 1px;
					background-color: currentColor;
					transition:
						width 0.3s ease,
						left 0.3s ease;
				}

				&:hover {
					color: var(--Green-Turbo);

					&::after {
						width: 100%;
						left: 0;
					}
				}
			}

			@media screen and (max-width: 1150px) {
				margin-top: 0;
				width: 100%;
			}

			@media screen and (max-width: 600px) {
				flex-direction: column;
			}

			li {
				width: calc(50% - 24px);

				@media screen and (max-width: 600px) {
					width: 100%;
				}
			}
		}

		&-social {
			&-links {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: 16px;

				@media screen and (max-width: 600px) {
					justify-content: center;
				}

				a {
					display: block;
					border-radius: 34px;
					background-color: var(--Green-Turbo);
					display: flex;
					width: 34px;
					height: 34px;
					justify-content: center;
					align-items: center;
					transition: transform 0.2s ease-in-out;

					&:hover {
						transform: translateY(-2px);
					}
				}
			}
		}
	}
</style>
