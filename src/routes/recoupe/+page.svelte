<script lang="ts" context="module">
	import { image } from '^assets/images';
	import { Picture } from '^components';
</script>

<section class="relative mt-8 h-[400px]">
	<!-- <div class="flex">
		{#each Array(5) as item}
			<div class="">
				<Picture
					imageClass="w-[300px] h-[50px] object-cover"
					sizes="800px"
					data={image.illustration.birch_trees}
					alt=""
				/>
			</div>
		{/each}
	</div> -->
	<div class="mt-[40px] h-[30px] bg-[#e9eb98]"></div>

	<h1
		class="pt-16 text-center font-bebas text-[100px] font-bold leading-none tracking-wide text-border"
	>
		Recoupe
	</h1>

	<div class="mt-10 flex justify-center">
		<div class="grid max-w-[1100px] grid-cols-2 gap-x-10">
			<p>
				Recoupe is a regenerative ecological project breathing new life into Troopers Hill Woods.
				Our focus is to work sensitively with the land to create a thriving and diverse working
				woodland.
				<br /><br />
				We will mainly use hand tools and apply traditional woodland
			</p>

			<p>
				management techniques such as coppicing, charcoal burning, and hedge laying. This allows us
				to produce local products like: Beanpoles, pea sticks, Charcoal and Materials for
				traditional crafts, ensuring all parts of the tree are utilised.
			</p>
		</div>
	</div>

	<div class="mt-12 grid grid-cols-3 gap-x-6 pl-52">
		<Picture
			imageClass="w-full border-[10px] border-[#655210]/20 rounded-md aspect-video object-cover"
			sizes="800px"
			data={image.illustration.recoupe_poster_main_illustration}
			alt=""
		/>

		<Picture
			imageClass="w-full border-[10px] border-[#655210]/20 rounded-md aspect-video object-cover"
			sizes="800px"
			data={image.new_and_pro.fresh_air_thursday_art}
			alt=""
		/>

		<Picture
			imageClass="w-full border-[10px] border-[#655210]/20 rounded-md aspect-video object-cover"
			sizes="800px"
			data={image.new_and_pro.cooking_pot}
			alt=""
		/>
	</div>

	<!-- <div class="flex justify-center">
		<p class="mt-10 max-w-[600px] leading-[2]">
			<span
				class="float-left mb-2 block h-[50px] w-[30px] font-amatic text-6xl font-bold text-bc-coral-pink"
				>R</span
			>
			<span class="font-maven">
				ecoupe is a regenerative ecological project breathing new life into Troopers Hill Woods. Our
				focus is to work sensitively with the land to create a thriving and diverse working
				woodland.
			</span>
		</p>
	</div> -->

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
