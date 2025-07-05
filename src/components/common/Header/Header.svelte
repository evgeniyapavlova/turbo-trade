<script lang="ts">
	import Logo from './components/Logo.svelte';
	import LoginIcon from './components/LoginIcon.svelte';
	import LangSwitcher from './components/LangSwitcher.svelte';
	export let content, tradeNow: string;

	let isExpanded = false;
</script>

<header>
	<div class="content">
		<Logo />

		<div class="header-menu header-menu-sections">
			<a href="#" class="header-link header-link-highlight">{tradeNow}</a>
			<a href="#" class="header-link">{content.about}</a>
			<a href="#" class="header-link">{content.howToStart}</a>
			<a href="#" class="header-link">{content.reviews}</a>
		</div>

		<div class="header-menu header-menu-actions">
			<LangSwitcher />
			<a href="#" class="button-tertiary button-size-m button-with-icon">
				<LoginIcon />
				{content.logIn}
			</a>
			<a class="button-secondary button-size-m" href="#">{tradeNow}</a>
		</div>

		<button
			class="header-menu-burger"
			on:click={() => (isExpanded = !isExpanded)}
			class:is-expanded={isExpanded}
			aria-label="Open mobile menu"
		>
			<div class="header-menu-burger-icon"></div>
		</button>
	</div>
</header>

<style lang="scss">
	@use '$lib/styles/_constants.scss' as var;

	header {
		padding: 38px 0;

		@media screen and (max-width: var.$tab) {
			padding: 12px 0;
			background: rgba(0, 0, 0, 0.10);
		}
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
	}

	.header {
		&-menu {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			gap: 16px;

			&-burger {
				width: 30px;
				height: 30px;
				border-radius: 10px;
				background: rgba(0, 0, 0, 0.1);
				align-items: center;
				justify-content: center;
				display: none;

				@media screen and (max-width: var.$tab) {
					display: flex;
				}

				&.is-expanded {
					.header-menu-burger-icon {
						background-color: transparent;

						&::before {
							top: 0;
							transform: rotate(45deg);
						}

						&::after {
							top: 0;
							transform: rotate(-45deg);
						}
					}
				}

				&-icon {
					width: 16px;
					height: 2px;
					position: relative;
					background-color: rgba(0, 0, 0, 0.3);

					&::after,
					&::before {
						content: '';
						position: absolute;
						left: 0;
						width: 100%;
						height: 2px;
						background-color: rgba(0, 0, 0, 0.3);
						transition:
							transform 0.3s ease,
							top 0.3s ease,
							opacity 0.3s ease;
					}

					&::after {
						top: 5px;
					}

					&::before {
						top: -5px;
					}
				}
			}

			&-sections {
				flex-grow: 1;
			}

			@media screen and (max-width: var.$tab) {
				display: none;
			}
		}
		&-link {
			color: var(--black);
			font-family: var(--secondary-font);
			font-size: 18px;
			font-weight: 400;

			&-highlight {
				font-weight: 700;
			}
		}
	}
</style>
