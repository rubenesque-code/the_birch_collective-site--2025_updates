<script lang="ts" module>
	import '../app.css';

	import { image } from '^assets/images';

	import { Picture } from '^components';
</script>

<script lang="ts">
	let { children } = $props();
</script>

<main class="min-h-screen px-20 pb-[200px] pt-6">
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

			<a class="scale-y-90 font-amatic text-[30px] font-bold tracking-[0.02em]" href="/">
				The Birch Collective
			</a>
		</div>

		<div>
			<div>
				<p class="font-amatic text-2xl font-bold">menu</p>
				<div class="w-[40px]">
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="80px"
						data={image.illustration.black_line}
						alt=""
					/>
				</div>
			</div>
		</div>
	</header>

	{@render children()}
</main>

<!-- <style>
	.text-border {
		color: white;
		text-shadow:
			-0.5px -0.5px 0 rgb(11 154 236),
			0.5px -0.5px 0 rgb(11 154 236),
			-0.5px 0.5px 0 rgb(11 154 236),
			0.5px 0.5px 0 rgb(11 154 236);
		-webkit-text-stroke: 0.5px rgb(11 154 236);
	}
</style> -->
