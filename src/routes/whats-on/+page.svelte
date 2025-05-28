<script lang="ts" context="module">
	import { ArrowRight, Cactus, CookingPot, Footprints } from 'phosphor-svelte';

	import { image } from '^assets/images';
	import { Picture } from '^components';
</script>

<section class="mt-20 px-20">
	<div class="flex items-end justify-between">
		<div class="mt-10">
			<h1 class="font-fjalla text-6xl text-bc-soft-black">What's on</h1>

			<p class="mt-10 max-w-[550px] text-[17px] leading-relaxed">
				Looking for something different? We’ve got a range of programs designed to fit whatever vibe
				you're after. Whether you’re up for hands-on projects, chilling in nature, or looking to
				make a real impact, we’ve got you covered.
			</p>
		</div>

		<div>
			<div class="w-[100px] rounded-lg">
				<Picture imageClass="w-full" sizes="800px" data={image.illustration.trees} alt="" />
			</div>
		</div>
	</div>
</section>

<section class="px-20">
	<div class="mt-16 flex items-center gap-12">
		<a class="group/card relative aspect-square w-[400px]" href="/fresh-air-thursday">
			<Picture
				imageClass="w-full h-full object-cover object-left"
				sizes="800px"
				data={image.new_and_pro.james_and_helper_talking_to_participant}
				alt=""
			/>

			<div
				class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-ai-warmer-light-red p-6 transition-all duration-300 ease-in-out group-hover/card:translate-y-1/3"
			>
				<h4 class="font-fjalla text-[22px] tracking-wide text-bc-black1">Fresh Air Thursdays</h4>

				<div class="flex items-center gap-4">
					<p class="mt-2 font-montserrat text-[15px] font-medium text-bc-black1">
						Get stuck in at our weekly meet-up.
					</p>

					<span
						class="rounded-full border border-bc-soft-black p-1 text-bc-soft-black transition-transform duration-300 ease-in-out group-hover/card:translate-x-[6px] group-hover/card:bg-bc-soft-black group-hover/card:text-white"
					>
						<ArrowRight />
					</span>
				</div>
			</div>
		</a>

		<a class="relative block aspect-square w-[400px]" href="/recoupe">
			<Picture
				imageClass="w-full h-full object-cover"
				sizes="800px"
				data={image.programme.camp_birch.lying_in_grass}
				alt=""
			/>

			<div
				class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-ai-cooler-light-blue p-6 transition-all duration-300 ease-in-out group-hover/card:translate-y-1/3"
			>
				<h4 class="font-fjalla text-[22px] tracking-wide text-bc-black1">Recoupe</h4>

				<div class="flex items-center gap-4">
					<p class="mt-2 font-montserrat text-[15px] font-medium text-bc-black1">
						<!-- A free 5 day residential in the Dartmoor wilderness! -->
						Regenerative woodland management.
					</p>

					<span
						class="rounded-full border border-bc-soft-black p-1 text-bc-soft-black transition-colors duration-300 ease-in-out group-hover/card:bg-bc-soft-black group-hover/card:text-white"
					>
						<ArrowRight size="17" />
					</span>
				</div>
			</div>
		</a>

		<a class="group/card relative aspect-square w-[400px]" href="/fresh-air-thursday">
			<Picture
				imageClass="w-full h-full object-cover object-left"
				sizes="800px"
				data={image.new_and_pro.picking_leaves}
				alt=""
			/>

			<div
				class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-yellow1 p-6 transition-all duration-300 ease-in-out group-hover/card:translate-y-1/3"
			>
				<h4 class="font-fjalla text-[22px] tracking-wide text-bc-black1">Cooking Class</h4>

				<div class="flex items-center gap-4">
					<p class="mt-2 font-montserrat text-[15px] font-medium text-bc-black1">
						Get stuck in at our weekly meet-up.
					</p>

					<span
						class="rounded-full border border-bc-soft-black p-1 text-bc-soft-black transition-transform duration-300 ease-in-out group-hover/card:translate-x-[6px] group-hover/card:bg-bc-soft-black group-hover/card:text-white"
					>
						<ArrowRight />
					</span>
				</div>
			</div>
		</a>
	</div>
</section>
