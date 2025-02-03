<script lang="ts" context="module">
	import { image } from '^assets/images';
	import { Picture } from '^components';
</script>

<div class="flex items-center gap-2 px-4 py-3">
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
		<h2 class="font-display2 text-[30px] tracking-wider">The Birch Collective</h2>

		<div class="flex items-end gap-4 font-sans4">
			<p class="">About Us</p>

			<p class="">Programmes</p>
		</div>
	</div>
</div>

<div class="mt-[100px] flex justify-between px-3">
	<div>
		<h1 class="font-display3 text-[45px] tracking-wider text-[#4c803f]">The Birch Collective</h1>
	</div>

	<div class="w-[700px]">
		<Picture
			loading="eager"
			imageClass="w-full h-full object-cover"
			sizes="800px"
			data={image.birch.group}
			alt=""
		/>
	</div>
</div>
