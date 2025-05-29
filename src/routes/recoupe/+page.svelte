<script lang="ts" context="module">
	import { SmilePlus, Sprout } from 'lucide-svelte';
	import { ArrowLeft, ArrowRight, CookingPot, Scissors } from 'phosphor-svelte';
	import { Button } from '~ui';

	import { image } from '^assets/images';

	import { Picture } from '^components';

	// supported/funded by section? -as on the posters
</script>

<section class="relative mt-8 h-[400px]">
	<div class="mt-[40px] h-[30px] bg-[#e9eb98]"></div>

	<h1
		class="text-border-2 pt-16 text-center font-bebas text-[100px] font-bold leading-none tracking-wide text-recoupe-green"
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
</section>

<section class="mt-12">
	<div class="grid grid-cols-3 gap-x-6 pl-52">
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
</section>

<section class="mt-16">
	<div class="flex justify-center">
		<div class="grid w-full grid-cols-4 justify-between gap-y-8 pl-20">
			<div class="flex justify-start">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="">
						<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">When</h3>
					</div>

					<p class="mt-3">Every Tuesday 1pm - 5pm</p>

					<div class="absolute left-1/2 top-[3px] w-[100px] -translate-x-1/2 scale-y-75">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[200px] -translate-x-1/2 scale-y-[0.35]">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-start">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="">
						<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">Where</h3>
					</div>

					<p class="mt-3">Every Tuesday 1pm - 5pm</p>

					<div class="absolute left-1/2 top-[3px] w-[100px] -translate-x-1/2 scale-y-75">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[200px] -translate-x-1/2 scale-y-[0.35]">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-start">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="">
						<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">How Much</h3>
					</div>

					<p class="mt-3">Every Tuesday 1pm - 5pm</p>

					<div class="absolute left-1/2 top-[3px] w-[100px] -translate-x-1/2 scale-y-75">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[200px] -translate-x-1/2 scale-y-[0.35]">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-start">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="">
						<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">Who For</h3>
					</div>

					<p class="mt-3">Every Tuesday 1pm - 5pm</p>

					<div class="absolute left-1/2 top-[3px] w-[100px] -translate-x-1/2 scale-y-75">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[200px] -translate-x-1/2 scale-y-[0.35]">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <div class="mt-24 flex justify-end">
	<div class="h-[15px] w-[800px] bg-recoupe-light-yellow/50"></div>
</div> -->

<style>
	.text-border-2 {
		text-shadow:
			-2px -2px 0 #e9eb98,
			2px -2px 0 #e9eb98,
			-2px 2px 0 #e9eb98,
			2px 2px 0 #e9eb98;
		-webkit-text-stroke: 2px #e9eb98;
	}
</style>
