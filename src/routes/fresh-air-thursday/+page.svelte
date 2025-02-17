<script lang="ts" context="module">
	import { image } from '^assets/images';
	import { Picture } from '^components';
	import { ArrowRight } from 'lucide-svelte';
	import { Button } from '~ui';

	// click on sign up -> choose whether to just send interest or properly sign up.
</script>

<div class="flex justify-center">
	<div class="relative w-full max-w-[1050px]">
		<section class="relative">
			<div class="polygon absolute left-0 top-0 -z-10 h-[300px] w-full bg-bc-soft-green"></div>

			<div class="relative aspect-[17/9] w-full px-8 pt-[50px]">
				<div class="polygon2 h-[600px]">
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="800px"
						data={image.new_and_pro.fresh_air_thursday_art}
						alt=""
					/>
				</div>

				<div class="absolute inset-0 translate-y-[50px]">
					<div class="mt-[50px] px-12">
						<div class="flex items-center gap-[9px] px-8">
							<h1
								class="text-center font-display3 text-[25px] font-extrabold uppercase leading-[1.2] tracking-[0.08em] text-white"
							>
								The Birch<br /> Collective
							</h1>
						</div>

						<h2 class="mt-32 px-8 font-sans3 text-[33px] font-bold text-white">
							Fresh<br />Air<br />Thursday
						</h2>

						<div class="mt-16 px-8">
							<Button
								class="flex items-center gap-2 rounded-full bg-bc-sky-blue px-10 py-4 font-sans2 text-lg font-semibold "
								><span>Sign Up</span>
								<span><ArrowRight /></span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="flex justify-center px-20">
			<section class="mt-24 max-w-[800px] font-sans3">
				<p class="font-sans3 text-xl font-semibold">
					Fresh Air Thursday is a FREE weekly group for 16-25 year olds, just a 5-minute walk from
					St George's Park!
				</p>
				<p class="mt-6 font-sans3 text-xl">
					We offer a range of activities designed at a pace to make learning accessible and to draw
					out your creativity.
				</p>
				<p class="mt-6 font-sans3 text-xl">
					There is no fixed time limit to attendance, attend all year round, once a month or just
					one off, totally up to you. You can attend until your 26 birthday. If you are older the 26
					or reach that age there are opportunities to return as peer mentor to support others, if
					this is of interest to you.
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
