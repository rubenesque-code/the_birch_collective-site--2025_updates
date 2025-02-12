<script lang="ts" context="module">
	import { image } from '^assets/images';
	import { Picture } from '^components';
</script>

<div class="relative">
	<div class="fixed left-0 top-0 -z-10 h-[250px] w-full bg-bc-yellow1"></div>

	<div class="relative mt-[50px] aspect-[17/9] w-full overflow-hidden">
		<div class="px-8">
			<Picture
				imageClass="w-full h-full object-cover"
				sizes="800px"
				data={image.new_and_pro.stay_calm_and_listen_to_nature}
				alt=""
			/>
		</div>

		<div class="absolute inset-0">
			<div class="mt-[50px] px-12">
				<div class="flex items-center gap-3 px-8">
					<div class="w-[60px]">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="80px"
							data={image.birch.logo_2}
							alt=""
						/>
					</div>
					<h1
						class="font-display3 text-[25px] font-extrabold uppercase leading-[1.2] tracking-wide text-bc-sky-blue"
					>
						The Birch<br /> Collective
					</h1>
				</div>
				<h2 class="mt-12 px-8 font-sans3 text-[33px] font-bold text-white">
					Nature, Community<br /> & Connection
				</h2>

				<p class="mt-12 max-w-[520px] px-8 text-[21px] font-semibold text-white">
					Are you 16 — 25 years old and from in or around Bristol?
				</p>
				<p class="mt-2 max-w-[520px] px-8 text-[21px] font-semibold text-white">
					Get involved this week!
				</p>
				<p class="mt-2 max-w-[520px] px-8 text-[21px] font-semibold text-white">
					We run nature based courses to help mental health, anxiety, or just to connect to nature!
				</p>

				<!-- <p class="mt-12 max-w-[320px] px-8 text-[21px] text-white">
					The Birch Collective helps people aged 16-25 in Bristol and surrounding areas who might be
					feeling isolated, overwhelmed, or unsure of their place in the world.
				</p> -->
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
