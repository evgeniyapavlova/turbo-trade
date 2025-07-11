<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Logo from './components/Logo.svelte';
	import LoginIcon from './components/LoginIcon.svelte';
	import LangSwitcher from './components/LangSwitcher.svelte';
	import { reg, login } from '$lib/stores/links';
	export let content, tradeNow: string;

	let isExpanded = false;

	export function scrollToSection(e: Event) {
		const id = (e?.currentTarget as HTMLElement)?.dataset?.targetId;
		if (!id) return;

		const el = document.getElementById(id);
		if (el) {
			isExpanded = false;
			const top = el.getBoundingClientRect().top + window.pageYOffset - 50;
			window.scrollTo({ top, behavior: 'smooth' });
		}
	}

	const menuLinks = ['about', 'how-to-start', 'reviews'];

	onMount(() => {
		function handleClick(event: Event) {
			const targetElement = event.target;
			if (!(targetElement instanceof Node)) return;

			const wrapElement = document.getElementById('actions-wrap');
			const menuElement = document.getElementById('actions-menu');

			if (!wrapElement?.contains(targetElement) && !menuElement?.contains(targetElement)) {
				isExpanded = false;
			}
		}

		document.body.addEventListener('click', handleClick);

		return () => {
			document.body.removeEventListener('click', handleClick);
		};
	});
</script>

<header>
	<div class="content" style="overflow: visible;">
		<Logo />

		<div class="header-menu header-menu-sections">
			<a href={$reg} class="header-link header-link-highlight">{tradeNow}</a>
			{#each menuLinks as link}
				<button on:click={scrollToSection} class="header-link" data-target-id={link}>
					{content[link]}
				</button>
			{/each}
		</div>

		<div class="header-menu header-menu-actions">
			<LangSwitcher />
			<a href={$login} class="button-tertiary button-size-m button-with-icon">
				<LoginIcon />
				<span>{content.logIn}</span>
			</a>
			<a class="button-secondary button-size-m" href={$reg}>{tradeNow}</a>
		</div>

		<div class="dropdown-wrap" id="actions-wrap">
			<button
				class="header-menu-burger"
				on:click={() => (isExpanded = !isExpanded)}
				class:is-expanded={isExpanded}
				aria-label="Open mobile menu"
			>
				<div class="header-menu-burger-icon"></div>
			</button>

			{#if isExpanded}
				<menu class="dropdown-menu" transition:fade id="actions-menu">
					<a href={$reg} style="font-weight: 700;">{tradeNow}</a>
					{#each menuLinks as link}
						<button on:click={scrollToSection} data-target-id={link}>
							{content[link]}
						</button>
					{/each}
				</menu>
			{/if}
		</div>
	</div>
</header>

<style lang="scss">
	@use '$lib/styles/_constants.scss' as var;

	.dropdown-wrap {
		display: block;

		@media screen and (min-width: (var.$tab + 1px)) {
			display: none;
		}
	}

	header {
		padding: 38px 0;
		position: relative;
		z-index: 1;

		@media screen and (max-width: var.$tab) {
			padding: 12px 0;
			background: rgba(0, 0, 0, 0.1);
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
				&-sections {
					display: none;
				}
			}
		}
		&-link {
			color: rgba(0, 0, 0, 0.3);
			font-family: var(--secondary-font);
			font-size: 18px;
			font-weight: 400;
			transition: color 0.2s ease-in-out;
			position: relative;

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
				color: var(--black);

				&::after {
					width: 100%;
					left: 0;
				}
			}

			&-highlight {
				color: var(--black);
				font-weight: 700;
			}
		}
	}

	@media screen and (max-width: var.$tab) {
		.button-secondary {
			display: none;
		}

		.header-menu-actions {
			flex-grow: 1;
			flex-direction: row-reverse;
		}

		.button-with-icon {
			border-radius: 10px;
			background: rgba(0, 0, 0, 0.1);
			padding: 8px;

			span {
				display: none;
			}
		}

		.content {
			gap: 16px;
		}
	}
</style>
