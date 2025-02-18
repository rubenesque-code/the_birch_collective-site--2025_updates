<script lang="ts" context="module">
	import { image } from '^assets/images';
	import { Picture } from '^components';
	import { ArrowRight } from 'lucide-svelte';
	import { Button } from '~ui';

	// click on sign up -> choose whether to just send interest or properly sign up.
	// could have overhead shot as map and then activities with pics coming off it.
</script>

<div class="flex justify-center">
	<div class="relative w-full max-w-[1050px]">
		<section class="relative">
			<div class="polygon absolute left-0 top-0 -z-10 h-[300px] w-full bg-bc-coral-pink"></div>

			<div class="relative aspect-[17/9] w-full px-8 pt-[50px]">
				<div class="polygon2 relative h-[600px]">
					<div class="absolute inset-0">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.fresh_air_thursday_art}
							alt=""
						/>
					</div>

					<div
						class="absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t from-bc-soft-black to-transparent"
					></div>
				</div>

				<div class="absolute inset-0 translate-y-[50px]">
					<div class="mt-[50px] px-12">
						<div class="flex items-center gap-[9px] px-8">
							<div class="w-[48px]">
								<Picture
									imageClass="w-full h-full object-cover"
									sizes="80px"
									data={image.birch.logo_image_white_yellow}
									alt=""
								/>
							</div>

							<h1
								class="text-center font-display3 text-[30px] font-[600] leading-[1.2] tracking-[-0.13em] opacity-90"
							>
								<span class="text-bc-sky-blue">T</span>
								<span class="text-bc-coral-pink">h</span>
								<span class="mr-2 text-bc-pastel-red">e</span>
								<span class="text-bc-soft-green">B</span>
								<span class="text-bc-lime-green">i</span>
								<span class="text-white">r</span>
								<span class="text-bc-golden-yellow">c</span>
								<span class="mr-2 text-bc-bright-orange">h </span>
								<span class="text-bc-warm-brown">C</span>
								<span class="text-bc-sky-blue">o</span>
								<span class="text-bc-pastel-red">l</span>
								<span class="text-bc-lime-green">l</span>
								<span class="text-bc-golden-yellow">e</span>
								<span class="text-bc-soft-green">c</span>
								<span class="text-bc-vivid-green">t</span>
								<span class="text-bc-coral-pink">i</span>
								<span class="text-bc-golden-yellow">v</span>
								<span class="text-bc-soft-yellow">e</span>
							</h1>
							<!-- <h1
 								class="image-text text-center font-display3 text-[24px] font-[400] uppercase leading-[1.2] tracking-wide"
 							>
 								The Birch Collective
 							</h1> -->
						</div>

						<h2 class="mt-20 px-8 font-display3 text-[34px] tracking-wide text-white">
							Fresh Air<br />Thursday
						</h2>

						<div class="mt-16 max-w-[528px] px-8 font-sans3 text-[21px] text-white">
							<p>
								Fresh Air Thursday is a FREE weekly group for 16-25 year olds, just a 5-minute walk
								from St George's Park!
							</p>
						</div>

						<div class="mt-10 px-8">
							<Button
								class="flex items-center gap-[10px] rounded-full bg-bc-soft-green px-10 py-4 font-sans2 text-white "
								><span class="font-sans3 text-[17px] font-[600] uppercase tracking-[0.06em]"
									>Sign Up</span
								>
								<span><ArrowRight size="19" /></span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="polygon3 mx-10 mt-12 flex justify-center px-10 py-12">
			<section class="max-w-[800px] font-sans3">
				<p class="font-sans3 text-xl font-semibold">
					Fresh, is our weekly group for 16-25 year olds. We offer a range of activities designed at
					a pace to make learning accessible and to draw out your creativity.
				</p>

				<p class="mt-6 font-sans3 text-xl">
					There is no fixed time limit to attendance, attend all year round, once a month or just
					one off, totally up to you. You can attend until your 26 birthday. If you are older the 26
					or reach that age there are opportunities to return as peer mentor to support others, if
					this is of interest to you.
				</p>
			</section>
		</div>

		<section class="mt-20 px-16">
			<div class="flex gap-2">
				<h2 class="font-display3 text-[31px] tracking-wide text-bc-black1">Activities</h2>
			</div>

			<div class="mt-8 grid grid-cols-2 gap-x-16 gap-y-24">
				<div class="relative">
					<div class="relative aspect-square overflow-hidden">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.craft_1}
							alt=""
						/>
					</div>

					<div
						class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-vivid-green p-6"
					>
						<h4 class="font-display3 text-xl text-bc-black1">Nature based craft</h4>

						<p class="mt-2 text-base text-bc-black1">
							Have a desire to help young people and nature? We want you!
						</p>
					</div>
				</div>

				<div class="relative">
					<div class="relative aspect-square overflow-hidden">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.picking_leaves}
							alt=""
						/>
					</div>

					<div
						class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-bright-orange p-6"
					>
						<h4 class="font-display3 text-xl text-bc-black1">Horticulture & permaculture</h4>

						<p class="mt-2 text-base text-bc-black1">
							Have a desire to help young people and nature? We want you!
						</p>
					</div>
				</div>

				<div class="relative">
					<div class="relative aspect-square overflow-hidden">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.cooking_pot}
							alt=""
						/>
					</div>

					<div
						class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-lime-green p-6"
					>
						<h4 class="font-display3 text-xl text-bc-black1">Cookery</h4>

						<p class="mt-2 text-base text-bc-black1">
							Have a desire to help young people and nature? We want you!
						</p>
					</div>
				</div>

				<div class="relative">
					<div class="relative aspect-square overflow-hidden">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.stay_calm_and_listen_to_nature}
							alt=""
						/>
					</div>

					<div
						class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-sky-blue p-6"
					>
						<h4 class="font-display3 text-xl text-bc-black1">Awareness & mindfulness</h4>

						<p class="mt-2 text-base text-bc-black1">
							Have a desire to help young people and nature? We want you!
						</p>
					</div>
				</div>
			</div>
		</section>

		<div class="relative mx-10 mt-40 flex justify-center px-10 py-12">
			<!-- <div class="polygon absolute left-0 top-0 -z-10 h-[300px] w-full bg-bc-coral-pink"></div> -->

			<section class="max-w-[800px] font-sans3">
				<p class="font-sans3 text-xl font-semibold">
					Come along to Fresh Air Thursday for any reason. But we know it can help if you're feeling
					or struggling with any of the following.
				</p>
			</section>
		</div>
	</div>
</div>

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
