<script lang="ts" context="module">
	import { ArrowRight, ClipboardPenLine, Handshake, PiggyBank } from 'lucide-svelte';

	import { image } from '^assets/images';
	import { Picture } from '^components';
	import { Button } from '~ui';
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
		<h2 class="font-display2 text-[30px] tracking-wider text-bc-black1">The Birch Collective</h2>

		<div class="flex items-end gap-4 text-bc-black1">
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

		<div class="mt-8 max-w-[450px] leading-[1.8em] text-bc-black1">
			<p>
				The Birch Collective helps people aged 16-25 in Bristol and surrounding areas who might be
				feeling isolated, overwhelmed, or unsure of their place in the world.
			</p>
			<p class="mt-4">
				If you’re navigating anxiety, depression, or simply seeking a space to belong, we’re here to
				walk alongside you—offering support, connection, and moments of joy along the way.
			</p>
		</div>

		<div class="mt-12">
			<p class="font-sans2 text-xs text-bc-brown1">Interested in getting involved?</p>

			<Button
				class="mt-1 flex items-center gap-1 border-2 border-bc-brown1/80 bg-white text-bc-brown1"
			>
				<span class="text-base text-bc-black1 opacity-90">Find out about our programmes</span>
				<span class=""><ArrowRight size="17" /></span>
			</Button>

			<div class="mt-4 flex items-center gap-3">
				<Button class="relative aspect-square h-[31px] rounded-full bg-bc-yellow1 p-[1px]">
					<span
						class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-bc-green1/90"
					>
						<ClipboardPenLine size="14" />
					</span>
				</Button>

				<Button class="relative aspect-square h-[31px] rounded-full bg-bc-yellow1 p-[1px]">
					<span
						class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-bc-green1/90"
					>
						<PiggyBank size="14" />
					</span>
				</Button>

				<Button class="relative aspect-square h-[31px] rounded-full bg-bc-yellow1 p-[1px]">
					<span
						class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-bc-green1/90"
					>
						<Handshake size="14" />
					</span>
				</Button>
			</div>
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
