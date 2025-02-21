<script lang="ts" context="module">
	import { image } from '^assets/images';

	import { Picture } from '^components';

	// click on sign up -> choose whether to just send interest or properly sign up.
	// could have overhead shot as map and then activities with pics coming off it.
</script>

<div class="flex justify-center">
	<div class="relative w-full max-w-[1050px]">
		<div class="absolute left-4 top-4 z-10 flex items-center gap-[9px]">
			<div class="w-[38px]">
				<Picture
					imageClass="w-full h-full object-cover"
					sizes="80px"
					data={image.birch.logo_image_white_yellow}
					alt=""
				/>
			</div>

			<h1 class="font-yuji-boku text-[19px] tracking-tight text-white">The Birch Collective</h1>
		</div>
		<section class="relative">
			<div class="w-full">
				<Picture
					imageClass="w-full h-full object-cover"
					sizes="80px"
					data={image.new_and_pro.drone_trees_and_sitting_circle_very_far}
					alt=""
				/>
			</div>

			<h1
				class="absolute left-[240px] top-[220px] text-center font-lora text-[50px] tracking-wide text-white"
			>
				Fresh Air<br />
				<span class="font-lora text-[42px] tracking-wide text-white">Thursday</span>
			</h1>
			<!-- <h1 class="absolute left-[100px] top-[400px] font-lora text-[50px] tracking-wide text-white">
				Thursday
			</h1> -->

			<p class="absolute left-[270px] top-[390px] text-center font-lora text-[18px] text-white">
				Join us! We're a 5 minutes walk from St George's Park
			</p>
		</section>
	</div>
</div>
