<script lang="ts" context="module">
	import { Cactus, CookingPot, Footprints } from 'phosphor-svelte';

	import { image } from '^assets/images';
	import { Picture } from '^components';
</script>

<main class="min-h-screen px-20 pt-6">
	<header class="flex items-center justify-between p-2">
		<div class="flex items-center gap-2">
			<div class="w-[40px]">
				<Picture
					imageClass="w-full h-full object-cover"
					sizes="80px"
					data={image.birch.logo_og_colours_img_only}
					alt=""
				/>
			</div>

			<h1
				class="text-my-light-blue 154, 236)] scale-y-90 font-amatic text-[28px] font-bold tracking-[0.02em]"
			>
				The Birch Collective
			</h1>
		</div>

		<div>
			<div>
				<p class="text-my-light-blue font-amatic text-2xl font-bold">menu</p>
				<div class="w-[40px]">
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="80px"
						data={image.illustration.blue_line}
						alt=""
					/>
				</div>
			</div>
		</div>
	</header>

	<section class="mt-20 px-20">
		<div class="flex justify-between">
			<div class="mt-10">
				<h1 class="font-amatic text-7xl font-bold text-[#071633]">What's on</h1>
			</div>

			<div class="w-[600px] rounded-lg">
				<Picture
					imageClass="w-full h-full object-cover rounded-lg border-[8px] border-my-light-blue"
					sizes="800px"
					data={image.new_and_pro.stay_calm_and_listen_to_nature}
					alt=""
				/>
			</div>
		</div>
	</section>
</main>
