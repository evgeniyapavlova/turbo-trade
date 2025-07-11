<div class="loader-horizontal"></div>

<style>
	.loader-horizontal {
		position: fixed;
		height: 4px;
		width: 30%;
		top: 0;
		left: 0;
		background: var(--Turbo_Gradient);
		animation: grow-shrink 5s ease-in-out alternate;
	}

	@keyframes grow-shrink {
		from {
			width: 30%;
		}
		to {
			width: 70%;
		}
	}

	:global(body[dir='rtl'] .loader-horizontal) {
		left: auto;
		right: 0;
	}
</style>
