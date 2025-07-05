<script lang="ts">
	import Image from '$common/Image.svelte';

	export let content;
</script>

<section class="crush">
	<div class="content">
		<div class="crush-left">
			<h2 class="title-2">
				{content.title}
			</h2>
			<p class="text">
				{content.caption}
			</p>
		</div>
		<div class="crush-right">
			<Image path="crush/img" classes="crush-img" />
			<Image path="crush/img-mobile" classes="crush-img-mobile" />
		</div>
	</div>
</section>

<style lang="scss">
	.title-2 {
		margin-bottom: 24px;
	}
	.text {
		color: #fff;
		font-size: 28px;

        @media screen and (max-width: 800px) {
            font-size: 16px;
        }
	}
	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media screen and (max-width: 800px) {
			display: block;
            text-align: center;
		}
	}
	.crush {
		overflow: hidden;

		&-left {
			min-width: 50%;
		}
	}

	:global(.crush-img-mobile) {
        display: block;
            margin-top: 24px;

        @media screen and (min-width: 600px) {
            display: none;
        }
    }

	:global(.crush-img) {
		margin-left: -380px;
        display: none;

		@media screen and (max-width: 1200px) {
			margin-left: -280px;
		}

        @media screen and (min-width: 600px) {
            display: block;
        }
	}

	:global(.crush-img img) {
		width: 1182px;
		height: 565px;

		@media screen and (max-width: 1200px) {
			width: 1000px;
			height: 478px;
		}
	}
</style>
