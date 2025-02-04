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

<div class="mt-[100px] flex justify-between gap-12 px-3">
	<div>
		<h1 class="font-display3 text-[45px] tracking-wider text-[#4c803f]">The Birch Collective</h1>

		<h3 class="mt-4 font-display3 text-[24px] tracking-widest text-[#ffeba0]">
			Nature, Community & Connection
		</h3>

		<div class="text-bc-black1 mt-8 max-w-[450px] font-sans3 leading-[1.8em]">
			<p>
				The Birch Collective helps people aged 16-25 in Bristol and the surrounding areas who might
				be feeling isolated, overwhelmed, or unsure of their place in the world.
			</p>
			<p class="mt-4">
				If you’re navigating anxiety, depression, or simply seeking a space to belong, we’re here to
				walk alongside you—offering support, connection, and moments of joy along the way.
			</p>
		</div>
	</div>

	<div class="w-[700px] shrink-0">
		<Picture
			loading="eager"
			imageClass="w-full h-full object-cover"
			sizes="800px"
			data={image.birch.group}
			alt=""
		/>
	</div>
</div>
