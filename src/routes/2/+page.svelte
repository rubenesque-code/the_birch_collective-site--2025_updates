<script lang="ts" context="module">
	import { image } from '^assets/images';
	import { Picture } from '^components';
	import { ArrowRight, TreeDeciduous, TreesIcon } from 'lucide-svelte';
	import { Button } from '~ui';

	// SECTIONS
	// a place of community + care; link to theory of change/about us/data/etc.
	// reviews/quotes; including non-participants;
	// supporters/partners;
	// section aimed at colleges, etc where they book a block;
	// other ways to get involved: graduates of the programme; volunteer; donate;
</script>

<section class="relative">
	<!-- <div class="absolute left-0 top-0 -z-10 h-[250px] w-full bg-bc-yellow1"></div> -->
	<div class="polygon absolute left-0 top-0 -z-10 h-[300px] w-full bg-bc-soft-green"></div>

	<div class="relative aspect-[17/9] w-full px-8 pt-[50px]">
		<div class="polygon2 h-[600px]">
			<Picture
				imageClass="w-full h-full object-cover"
				sizes="800px"
				data={image.new_and_pro.stay_calm_and_listen_to_nature}
				alt=""
			/>
		</div>

		<div class="absolute inset-0 translate-y-[50px]">
			<div class="mt-[50px] px-12">
				<div class="flex items-center gap-[9px] px-8">
					<!-- <div class="w-[58px]">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="80px"
							data={image.birch.logo_image_white}
							alt=""
						/>
					</div> -->

					<h1
						class="text-center font-display3 text-[25px] font-extrabold uppercase leading-[1.2] tracking-[0.08em] text-white"
					>
						The Birch<br /> Collective
					</h1>
				</div>

				<h2 class="mt-32 px-8 font-sans3 text-[33px] font-bold text-white">
					Nature, Community & Connection
				</h2>

				<p class="mt-6 max-w-[520px] px-8 text-[18px] font-semibold text-white">
					Are you 16 — 25 years old and from in or around Bristol?
				</p>
				<p class="mt-2 max-w-[520px] px-8 text-[18px] font-semibold text-white">
					Get involved this week!
				</p>
				<p class="mt-2 max-w-[520px] px-8 text-[18px] font-semibold text-white">
					We run nature based courses to help mental health, anxiety, or just to connect to nature!
				</p>

				<div class="mt-10 px-8">
					<Button
						class="flex items-center gap-2 rounded-full bg-bc-sky-blue px-10 py-4 font-sans2 text-lg font-semibold "
						><span>Get Connected</span>
						<span><ArrowRight /></span>
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mb-32 mt-24 px-16">
	<div class="flex items-center gap-8">
		<h2 class="font-display3 text-4xl tracking-wide text-bc-black1">What's on</h2>

		<div class="relative">
			<p class="mt-4 flex items-center gap-2 text-sm font-bold uppercase text-bc-black1/70">
				<span>See all</span><span>
					<!-- <TreesIcon size="16" fill="#C6E86F" /> -->
				</span>
			</p>

			<!-- <div class="absolute bottom-0 h-[8px] w-[110%] translate-y-[95%] bg-bc-warm-brown"></div> -->
		</div>
	</div>

	<div class="mt-12 flex items-center gap-12">
		<div class="relative aspect-[9/13] w-[400px]">
			<Picture
				imageClass="w-full h-full object-cover"
				sizes="800px"
				data={image.programme.fresh_air_thursdays.digging_and_planting}
				alt=""
			/>

			<div
				class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-sky-blue p-6"
			>
				<h4 class="font-display3 text-xl text-bc-black1">Fresh Air Thursdays</h4>

				<p class="mt-2 text-base text-bc-black1">Get stuck in at our weekly meet-up.</p>
			</div>
		</div>

		<div class="relative aspect-[9/13] w-[400px]">
			<Picture
				imageClass="w-full h-full object-cover"
				sizes="800px"
				data={image.programme.camp_birch.lying_in_grass}
				alt=""
			/>

			<div
				class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-coral-pink p-6"
			>
				<h4 class="font-display3 text-xl text-bc-black1">Camp Birch</h4>

				<p class="mt-2 text-base text-bc-black1">
					A free 5 day residential in the Dartmoor wilderness!
				</p>
			</div>
		</div>
	</div>
</section>

<section class="mb-32 mt-[200px] px-16">
	<div class="flex items-center gap-8">
		<h2 class="font-display3 text-4xl tracking-wide text-bc-black1">Help out</h2>

		<div class="relative">
			<p class="mt-4 flex items-center gap-2 text-sm font-bold uppercase text-bc-black1/70">
				<span>View more</span><span> </span>
			</p>
		</div>
	</div>

	<div class="mt-12 flex items-center gap-12">
		<div class="relative aspect-square w-[400px]">
			<div class="polygon3 aspect-square w-full">
				<Picture
					imageClass="w-full h-full object-cover"
					sizes="800px"
					data={image.new_and_pro.helper_foreground_smiling}
					alt=""
				/>
			</div>

			<div
				class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-vivid-green p-6"
			>
				<h4 class="font-display3 text-xl text-bc-black1">Volunteer</h4>

				<p class="mt-2 text-base text-bc-black1">
					Have a desire to help young people and nature? We want you!
				</p>
			</div>
		</div>

		<div class="relative aspect-square w-[400px]">
			<div class="polygon3 aspect-square w-full">
				<Picture
					imageClass="w-full h-full object-cover"
					sizes="800px"
					data={image.new_and_pro.drone_sitting_in_circle_close}
					alt=""
				/>
			</div>

			<div
				class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-pastel-red p-6"
			>
				<h4 class="font-display3 text-xl text-bc-black1">Donate</h4>

				<p class="mt-2 text-base text-bc-black1">Help us keep going and reach more young people.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.polygon {
		clip-path: polygon(0% 0%, 100% 0%, 100% 66.67%, 0% 100%);
	}

	.polygon2 {
		clip-path: polygon(0% 4%, 97% 0%, 100% 95%, 2% 100%);
	}

	.polygon3 {
		clip-path: polygon(0% 0%, 100% 2%, 100% 100%, 2% 100%);
	}
</style>
