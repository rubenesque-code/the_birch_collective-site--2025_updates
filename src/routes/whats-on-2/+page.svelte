<script lang="ts" context="module">
	import { Cactus, CookingPot, Footprints } from 'phosphor-svelte';

	import { image } from '^assets/images';
	import { Picture } from '^components';
</script>

<div class="">
	<div class="polygon-1 absolute left-0 top-0 -z-10 h-[250px] w-full bg-bc-yellow1"></div>

	<div class="mt-12 flex items-center gap-[9px] px-12">
		<div class="w-[48px]">
			<Picture
				imageClass="w-full h-full object-cover"
				sizes="80px"
				data={image.birch.logo_og_colours_img_only}
				alt=""
			/>
		</div>

		<h1 class="scale-y-90 font-amatic text-[28px] font-bold tracking-[0.02em]">
			The Birch Collective
		</h1>
	</div>

	<section class="mt-20 flex gap-20 px-24">
		<div>
			<h1 class="font-bebas text-5xl">What's On</h1>

			<p class="mt-10 max-w-[550px] text-lg leading-relaxed">
				Looking for something different? We’ve got a range of programs designed to fit whatever vibe
				you're after. Whether you’re up for hands-on projects, chilling in nature, or looking to
				make a real impact, we’ve got you covered.
			</p>

			<div class="mt-8 flex flex-col gap-5">
				<div class="flex items-center gap-4">
					<div class="leading-none text-bc-og-light-green">
						<CookingPot weight="fill" />
					</div>
					<div>
						<p class="font-medium leading-none text-[#bb742a]">
							Weekly hangouts involving crafting, planting, cooking and more.
						</p>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="leading-none text-bc-og-light-green">
						<Footprints weight="fill" />
					</div>
					<div>
						<p class="font-medium leading-none text-[#bb742a]">5-day woodland adventures.</p>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="leading-none text-bc-og-light-green">
						<Cactus weight="fill" />
					</div>
					<div>
						<p class="font-medium leading-none text-[#bb742a]">
							Leadership programmes if you're 26+.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="h-[400px] flex-grow rounded-lg border-[24px] border-bc-og-light-green/80">
			<Picture
				imageClass="w-full h-full object-cover rounded-lg"
				sizes="800px"
				data={image.new_and_pro.stay_calm_and_listen_to_nature}
				alt=""
			/>
		</div>
	</section>
</div>

<style>
	.polygon-1 {
		clip-path: polygon(0 0, 100% 0%, 100% 75%, 0% 100%);
	}
</style>
