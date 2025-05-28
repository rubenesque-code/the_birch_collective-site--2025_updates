<script lang="ts" context="module">
	import { ArrowRight, Cactus, CookingPot, Footprints } from 'phosphor-svelte';

	import { image } from '^assets/images';
	import { Picture } from '^components';
</script>

<section class="relative mt-8 h-[400px]">
	<h1
		class="pt-20 text-center font-bebas text-[100px] font-bold leading-none tracking-wide text-border"
	>
		Recoupe
	</h1>

	<!-- <div class="absolute left-0 top-0 w-[300px]">
		<Picture
			imageClass="w-full"
			sizes="800px"
			data={image.illustration.recoupe_poster_main_illustration}
			alt=""
		/>
	</div> -->
</section>

<style>
	.text-border {
		color: #627d48;
		text-shadow:
			-2px -2px 0 #e9eb98,
			2px -2px 0 #e9eb98,
			-2px 2px 0 #e9eb98,
			2px 2px 0 #e9eb98;
		-webkit-text-stroke: 2px #e9eb98;
	}
</style>
