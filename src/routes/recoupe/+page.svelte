<script lang="ts" context="module">
	import { ArrowLeft, Axe, Hammer, PersonSimpleHike, Tree } from 'phosphor-svelte';

	import { image } from '^assets/images';

	import { Picture } from '^components';
	import { Button, Checkbox, Input, Label } from '~ui';

	// supported/funded by section? -as on the posters
	// main text under title is better with browser default?
	// granulated effect on image?
</script>

<div class="mt-[40px] h-[30px] bg-[#e9eb98]"></div>

<section class="relative">
	<div class="absolute -top-[40px] right-[100px]">
		<div class="w-[100px]">
			<Picture
				imageClass="w-full h-full opacity-40 object-cover"
				sizes="80px"
				data={image.illustration.recoupe_poster_cloud}
				alt=""
			/>
		</div>
	</div>

	<div class="absolute -top-[60px] right-[300px]">
		<div class="w-[100px]">
			<Picture
				imageClass="w-full h-full opacity-40 object-cover"
				sizes="80px"
				data={image.illustration.recoupe_poster_cloud}
				alt=""
			/>
		</div>
	</div>

	<h2
		class="mt-32 flex flex-col items-center text-center font-amatic text-[100px] font-bold leading-[1.3] text-recoupe-light-yellow"
	>
		<span class="two-tone-text-main-title">take part in regenerative</span>
		<span class="relative inline-block text-[#e6b777]"
			>woodland activities — recoupe
			<span
				class="absolute -right-6 bottom-0 -translate-y-full translate-x-full font-mono1 text-sm font-normal text-bc-soft-black/30"
			>
				Sign up
			</span>
		</span>
	</h2>

	<div class="mt-12 flex justify-center">
		<div class="w-[600px]">
			<span class="float-left mb-2 mr-4 font-amatic text-6xl font-bold text-bc-soft-black">R</span
			><span class="">
				ecoupe is a regenerative ecological project breathing new life into Troopers Hill Woods. Our
				focus is to work sensitively with the land to create a thriving and diverse working
				woodland. Recoupe is a regenerative ecological project breathing new life into Troopers Hill
				Woods. Our focus is to work sensitively with the land to create a thriving and diverse
				working woodland.
			</span>
		</div>
	</div>

	<div class="mt-16 px-24">
		<div class="grid grid-cols-2 justify-between gap-x-16 gap-y-16">
			<div class="flex justify-start">
				<div class="relative w-max">
					<Picture
						imageClass="w-[500px]"
						sizes="500px"
						data={image.illustration.hand_drawn_rectangle}
						alt=""
					/>

					<div
						class="absolute left-1/2 top-1/2 flex h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col place-items-center items-center justify-center gap-y-4 overflow-y-auto overflow-x-hidden"
					>
						<div
							class="rounded-full bg-recoupe-light-yellow/50 p-[10px] text-3xl text-recoupe-brown"
						>
							<Axe weight="duotone" />
						</div>
						<p class="">
							Traditional Seasonal Woodland Management: Learn coppicing, charcoal burning, and hedge
							laying to help restore the woodland and encourage biodiversity.
						</p>
					</div>
				</div>
			</div>

			<div class="flex justify-end">
				<div class="relative w-max">
					<Picture
						imageClass="w-[500px]"
						sizes="500px"
						data={image.illustration.hand_drawn_rectangle}
						alt=""
					/>

					<div
						class="absolute left-1/2 top-1/2 flex h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col place-items-center items-center justify-center gap-y-4 overflow-y-auto overflow-x-hidden"
					>
						<div
							class="rounded-full bg-recoupe-light-yellow/50 p-[10px] text-3xl text-recoupe-brown"
						>
							<Tree weight="duotone" />
						</div>
						<p class="">
							Wildlife Habitat Creation and Tree Planting: Identify and map wildlife species,
							learning how to create habitats for birds, bats, and insects.
						</p>
					</div>
				</div>
			</div>

			<div class="flex justify-start">
				<div class="relative w-max">
					<Picture
						imageClass="w-[500px]"
						sizes="500px"
						data={image.illustration.hand_drawn_rectangle}
						alt=""
					/>

					<div
						class="absolute left-1/2 top-1/2 flex h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col place-items-center items-center justify-center gap-y-4 overflow-y-auto overflow-x-hidden"
					>
						<div
							class="rounded-full bg-recoupe-light-yellow/50 p-[10px] text-3xl text-recoupe-brown"
						>
							<PersonSimpleHike weight="duotone" />
						</div>
						<p class="">
							Nature Connection and Seasonal Awareness: Take time to observe and reflect, building a
							deeper connection to the land and its stories.
						</p>
					</div>
				</div>
			</div>

			<div class="flex justify-end">
				<div class="relative w-max">
					<Picture
						imageClass="w-[500px]"
						sizes="500px"
						data={image.illustration.hand_drawn_rectangle}
						alt=""
					/>

					<div
						class="absolute left-1/2 top-1/2 flex h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col place-items-center items-center justify-center gap-y-4 overflow-y-auto overflow-x-hidden"
					>
						<div
							class="rounded-full bg-recoupe-light-yellow/50 p-[10px] text-3xl text-recoupe-brown"
						>
							<Hammer weight="duotone" />
						</div>

						<p class="">
							Practical Conservation Skills: Repair and maintain paths to improve access for
							visitors and protect the woodland.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mt-16 font-maven">
	<div class="flex justify-center">
		<div class="grid w-full grid-cols-4 justify-between gap-y-8 pl-20">
			<div class="flex justify-start">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="">
						<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">When</h3>
					</div>

					<p class="mt-3">Every Tuesday 1pm - 5pm</p>

					<div class="absolute left-1/2 top-[3px] w-[100px] -translate-x-1/2 scale-y-75">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[200px] -translate-x-1/2 scale-y-[0.35]">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-start">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="">
						<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">Where</h3>
					</div>

					<p class="mt-3">Every Tuesday 1pm - 5pm</p>

					<div class="absolute left-1/2 top-[3px] w-[100px] -translate-x-1/2 scale-y-75">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[200px] -translate-x-1/2 scale-y-[0.35]">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-start">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="">
						<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">How Much</h3>
					</div>

					<p class="mt-3">Every Tuesday 1pm - 5pm</p>

					<div class="absolute left-1/2 top-[3px] w-[100px] -translate-x-1/2 scale-y-75">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[200px] -translate-x-1/2 scale-y-[0.35]">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-start">
				<div class="relative flex flex-col items-center rounded-lg p-6">
					<div class="">
						<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">Who For</h3>
					</div>

					<p class="mt-3">Every Tuesday 1pm - 5pm</p>

					<div class="absolute left-1/2 top-[3px] w-[100px] -translate-x-1/2 scale-y-75">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>

					<div class="absolute bottom-[1px] left-1/2 w-[200px] -translate-x-1/2 scale-y-[0.35]">
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <section class="mt-12">
	<div class="flex justify-center gap-20">
		<div class="rounded-full bg-recoupe-light-yellow/30 p-4">
			<Picture
				imageClass="w-[180px] opacity-80 h-[180px] object-cover rounded-full border-4 border-recoupe-light-yellow"
				sizes="80px"
				data={image.illustration.recoupe_poster_main_illustration}
				alt=""
			/>
		</div>
	</div>
</section> -->
<!-- <section class="mt-20 px-20">
	<div class="flex w-full justify-between gap-6 overflow-hidden">
		{#each Array(10) as item}
			<div class="">
				<Picture
					imageClass="h-[60px] opacity-60"
					sizes="80px"
					data={image.illustration.trees_recoupe_colours}
					alt=""
				/>
			</div>
		{/each}
	</div>
</section> -->

<section class="relative mt-10 px-24 pt-20">
	<div class="absolute right-[600px] top-[20px]">
		<div class="w-[100px]">
			<Picture
				imageClass="w-full h-full opacity-40 object-cover"
				sizes="80px"
				data={image.illustration.recoupe_poster_cloud_blue}
				alt=""
			/>
		</div>
	</div>

	<div class="absolute right-[300px] top-[40px]">
		<div class="w-[100px]">
			<Picture
				imageClass="w-full h-full opacity-30 object-cover"
				sizes="80px"
				data={image.illustration.recoupe_poster_cloud_blue}
				alt=""
			/>
		</div>
	</div>

	<div class="flex items-center justify-center gap-60 px-32">
		<div class="relative w-[300px]">
			<Picture
				imageClass="w-full"
				sizes="80px"
				data={image.illustration.hand_drawn_post_it}
				alt=""
			/>

			<div class="absolute left-[9px] top-[48px] h-[170px] w-[95%]">
				<Picture
					imageClass="object-cover overflow-hidden h-[95%] w-[95%] opacity-80"
					sizes="80px"
					data={image.illustration.recoupe_poster_main_illustration}
					alt=""
				/>
			</div>
		</div>
		<div class="relative w-[300px]">
			<Picture
				imageClass="w-full"
				sizes="80px"
				data={image.illustration.hand_drawn_post_it}
				alt=""
			/>

			<div class="absolute left-[9px] top-[48px] h-[170px] w-[95%]">
				<Picture
					imageClass="object-cover overflow-hidden h-[95%] w-[95%] opacity-80"
					sizes="80px"
					data={image.programme.recoupe.four_people_around_campfire}
					alt=""
				/>
			</div>
		</div>
	</div>
</section>

<section class="mt-24 px-24">
	<h2 class="two-tone-text-main-title text-center font-amatic text-5xl font-bold">
		more about recoupe
	</h2>

	<div class="mt-8 flex justify-center">
		<p class="max-w-[700px] font-maven">
			We will mainly use hand tools and apply traditional woodland management techniques such as
			coppicing, charcoal burning, and hedge laying. This allows us to produce local products like:
			Beanpoles, pea sticks, Charcoal and Materials for traditional crafts, ensuring all parts.
		</p>
	</div>

	<div class="mt-10 flex justify-center">
		<div class="flex w-[1200px] items-center gap-4">
			<div class="grid w-[70px] scale-x-[-1] place-items-center rounded-lg p-3">
				<Picture
					imageClass="opacity-80"
					sizes="80px"
					data={image.illustration.right_arrow_light_orange}
					alt=""
				/>
			</div>
			<div class="relative flex-grow">
				<div class="relative rounded-md border-[3px] border-[#e6b777]/50">
					<Picture
						imageClass="w-full p-2 opacity-70 rounded-md aspect-video object-cover"
						sizes="800px"
						data={image.programme.recoupe.four_people_around_campfire}
						alt=""
					/>

					<!-- <div
						class="absolute bottom-[-30px] left-1/2 z-10 w-[800px] -translate-x-1/2 scale-y-[0.1]"
					>
						<Picture
							imageClass="w-full h-full opacity-40 object-cover"
							sizes="80px"
							data={image.illustration.black_line}
							alt=""
						/>
					</div> -->
				</div>

				<p
					class="text-right font-amatic text-[19px] font-bold tracking-[0.017em] text-recoupe-green"
				>
					images from recoupe
				</p>
			</div>
			<div class="w-[50px]">
				<Picture
					imageClass=""
					sizes="80px"
					data={image.illustration.right_arrow_light_orange}
					alt=""
				/>
			</div>
		</div>
	</div>

	<div class="mt-8 flex justify-center">
		<p class="max-w-[700px] font-maven">
			the tree are utilised. By planting a broad range of trees and creating diverse habitats to
			accommodate a breadth of wildlife, we aim to increase the biodiversity and life in the
			woodland. To support this we will build 'dead' hedges, create glades and clearings for ground
			plants to thrive and care for the health of trees and wildlife already present.
		</p>
	</div>
</section>

<section class="mt-24 flex justify-center px-24">
	<div class="w-full max-w-[900px] font-maven">
		<div class="flex items-baseline gap-4">
			<p class="tracking-wide">Fresh Air Thursday? I'm in!</p>
			<p class="font-mono1 text-sm uppercase tracking-wide text-recoupe-green">sign up</p>
		</div>
		<div class="my-5 flex h-[1px] w-[40px] items-center gap-4 bg-bc-soft-green/50"></div>

		<div class="mt-2 flex items-baseline gap-4">
			<p class="tracking-wide">I'm interested and would like to know more...</p>
		</div>

		<div>
			<div class="mt-5 flex items-center gap-4">
				<Checkbox class="border-bc-soft-green" id="young" />

				<Label
					for="young"
					class="font-mono1 text-sm font-medium leading-none tracking-wide text-bc-soft-black/70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					I'm a participant
				</Label>
			</div>

			<div class="mt-5 flex items-center gap-4">
				<Checkbox class="border-bc-soft-green" id="caregiver" />

				<Label
					for="caregiver"
					class="font-mono1 text-sm font-medium leading-none tracking-wide text-bc-soft-black/70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					I'm a caregiver
				</Label>
			</div>
		</div>

		<div class="mt-6 flex justify-between border-b border-dashed border-b-bc-soft-black">
			<Input
				type="email"
				placeholder="Enter email"
				class="rounded-none border-none pl-0 font-mono1 text-sm tracking-wide"
			/>
			<Button
				class="bg-transparent px-0 font-mono1 text-sm  uppercase tracking-wide text-bc-pastel-red"
				>Submit</Button
			>
		</div>
	</div>
</section>

<!-- <section class="mt-32">
	<div class="flex justify-center">
		<div class="w-[800px]">
			<Picture
				imageClass="w-full border-[10px] border-[#655210]/20 rounded-md aspect-video object-cover"
				sizes="800px"
				data={image.new_and_pro.fresh_air_thursday_art}
				alt=""
			/>
		</div>
	</div>
</section> -->

<!-- <section class="mt-24">
	<div class="grid grid-cols-3 gap-x-3 px-24">
		<Picture
			imageClass="w-full border-[8px] border-recoupe-light-yellow/50 rounded-md aspect-video object-cover"
			sizes="800px"
			data={image.illustration.recoupe_poster_main_illustration}
			alt=""
		/>

		<Picture
			imageClass="w-full border-[8px] border-recoupe-light-yellow/50 rounded-md aspect-video object-cover"
			sizes="800px"
			data={image.new_and_pro.fresh_air_thursday_art}
			alt=""
		/>

		<Picture
			imageClass="w-full border-[8px] border-recoupe-light-yellow/50 rounded-md aspect-video object-cover"
			sizes="800px"
			data={image.new_and_pro.cooking_pot}
			alt=""
		/>
	</div>
</section> -->

<!-- <section class="relative mt-8 h-[400px]">
	<h1
		class="text-border-2 scale-x-110 pt-16 text-center font-amatic text-[110px] font-bold leading-none tracking-wide text-recoupe-green"
	>
		Recoupe
	</h1>

	<div class="mt-10 flex justify-center">
		<div class="grid max-w-[1100px] grid-cols-2 gap-x-10 font-maven">
			<p>
				Recoupe is a regenerative ecological project breathing new life into Troopers Hill Woods.
				Our focus is to work sensitively with the land to create a thriving and diverse working
				woodland.
				<br /><br />
				We will mainly use hand tools and apply traditional woodland
			</p>

			<p>
				management techniques such as coppicing, charcoal burning, and hedge laying. This allows us
				to produce local products like: Beanpoles, pea sticks, Charcoal and Materials for
				traditional crafts, ensuring all parts of the tree are utilised.
			</p>
		</div>
	</div>
</section> -->

<style>
	.two-tone-text-main-title {
		background: linear-gradient(to bottom, #e18a2f 50%, #e6b777 50%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* For Firefox */
		background-clip: text;
		color: transparent;
	}
</style>
