<script lang="ts" context="module">
	import { image } from '^assets/images';
	import { Picture } from '^components';
</script>

<!-- <div class="flex items-center gap-2 px-8 py-3">
	<div class="flex items-center gap-2">
		<div class="w-[48px]">
			<Picture
				loading="eager"
				imageClass="w-full h-full object-cover"
				sizes="50px"
				data={image.birch.logo}
				alt="The Birch Collective logo"
			/>
		</div>
	</div>

	<div class="flex flex-grow justify-between">
		<h2 class="font-display3 text-[30px] tracking-wider text-bc-black1">The Birch Collective</h2>

		<div class="flex items-end gap-4 text-bc-black1">
			<p class="">About Us</p>

			<p class="">Programmes</p>
		</div>
	</div>
</div> -->

<div class="">
	<div class="relative aspect-video w-full">
		<Picture
			imageClass="w-full h-full object-cover"
			sizes="800px"
			data={image.programme.camp_birch.lying_in_grass}
			alt=""
		/>

		<div class="absolute inset-0 border-[10px] border-bc-yellow1">
			<div class="flex w-full items-center justify-between px-8 pt-4">
				<!-- <div class="w-[48px]">
					<Picture
						loading="eager"
						imageClass="w-full h-full object-cover"
						sizes="50px"
						data={image.birch.logo_2}
						alt="The Birch Collective logo"
					/>
				</div> -->
			</div>

			<div class="px-8">
				<h1 class="font-display3 text-[40px] leading-[1.2] tracking-wider text-white">
					The Birch<br />Collective
				</h1>
			</div>

			<div class="mt-[160px] px-6">
				<h2 class="px-8 font-sans3 text-[40px] font-bold text-white">
					Nature, Community & Connection
				</h2>

				<p class="mt-12 max-w-[620px] px-8 text-[22px] font-bold text-white">
					The Birch Collective helps people aged 16-25 in Bristol and surrounding areas who might be
					feeling isolated, overwhelmed, or unsure of their place in the world.
				</p>
			</div>
		</div>
	</div>
</div>

<div class="mb-32 mt-24 px-16">
	<div class="flex items-center gap-8">
		<h2 class="font-display3 text-4xl tracking-wide text-bc-green1">What's on</h2>

		<p class="mt-4 text-sm font-bold uppercase text-bc-black1/70">See all</p>
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
				class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-yellow1 p-6"
			>
				<h4 class="font-display3 text-xl text-bc-brown1">Fresh Air Thursdays</h4>

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
				class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-[#d0f5ff] p-6"
			>
				<h4 class="font-display3 text-xl text-bc-black1">Camp Birch</h4>

				<p class="mt-2 text-base text-bc-black1">
					A free 5 day residential in the Dartmoor wilderness!
				</p>
			</div>
		</div>
	</div>
</div>
