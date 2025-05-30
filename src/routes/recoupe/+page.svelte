<script lang="ts" context="module">
	import { SmilePlus, Sprout } from 'lucide-svelte';
	import {
		ArrowLeft,
		ArrowRight,
		Axe,
		CookingPot,
		Hammer,
		PersonSimpleHike,
		Scissors,
		Tree
	} from 'phosphor-svelte';
	import { Button } from '~ui';

	import { image } from '^assets/images';

	import { Picture } from '^components';

	// supported/funded by section? -as on the posters
</script>

<section class="relative mt-8 h-[400px]">
	<div class="mt-[40px] h-[30px] bg-[#e9eb98]"></div>

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
</section>

<section class="mt-12">
	<div class="grid grid-cols-3 gap-x-6 pl-52">
		<Picture
			imageClass="w-full border-[10px] border-[#655210]/20 rounded-md aspect-video object-cover"
			sizes="800px"
			data={image.illustration.recoupe_poster_main_illustration}
			alt=""
		/>

		<Picture
			imageClass="w-full border-[10px] border-[#655210]/20 rounded-md aspect-video object-cover"
			sizes="800px"
			data={image.new_and_pro.fresh_air_thursday_art}
			alt=""
		/>

		<Picture
			imageClass="w-full border-[10px] border-[#655210]/20 rounded-md aspect-video object-cover"
			sizes="800px"
			data={image.new_and_pro.cooking_pot}
			alt=""
		/>
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
		<span class="two-tone-text">take part in regenerative</span>
		<span class="text-[#e6b777]">woodland activities </span>
	</h2>

	<div class="mt-20 px-24">
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

<style>
	.text-border-2 {
		text-shadow:
			-2px -2px 0 #e9eb98,
			2px -2px 0 #e9eb98,
			-2px 2px 0 #e9eb98,
			2px 2px 0 #e9eb98;
		-webkit-text-stroke: 2px #e9eb98;
	}
	.two-tone-text {
		background: linear-gradient(to bottom, #e18a2f 50%, #e6b777 50%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* For Firefox */
		background-clip: text;
		color: transparent;
	}
</style>
