<script lang="ts" context="module">
	import { Axe, Hammer, PersonSimpleHike, Tree } from 'phosphor-svelte';

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

<section class="mt-16">
	<h2 class="two-tone-text-main-title text-center font-amatic text-5xl font-bold">
		more about recoupe
	</h2>

	<div class="mt-16 flex justify-between gap-20 px-44">
		<div>
			<p class="max-w-[500px] font-maven">
				We will mainly use hand tools and apply traditional woodland management techniques such as
				coppicing, charcoal burning, and hedge laying. This allows us to produce local products
				like: Beanpoles, pea sticks, Charcoal and Materials for traditional crafts, ensuring all
				parts.
			</p>
		</div>

		<div>
			<h3 class="font-maven font-bold text-recoupe-green/70">
				Recoupe is suitable for anyone who...
			</h3>

			<div class="mt-5 flex flex-col gap-3">
				<div class="flex items-center gap-4">
					<span class="rounded-full bg-recoupe-light-yellow/50 p-[8px] text-lg text-recoupe-brown">
						<PersonSimpleHike weight="duotone" />
					</span>
					<p>Enjoys being outdoors and learning practical skills</p>
				</div>

				<div class="flex items-center gap-4">
					<span class="rounded-full bg-recoupe-light-yellow/50 p-[8px] text-lg text-recoupe-brown">
						<Tree weight="duotone" />
					</span>
					<p>People keen to restore nature and boost biodiversity.</p>
				</div>

				<div class="flex items-center gap-4">
					<span class="rounded-full bg-recoupe-light-yellow/50 p-[8px] text-lg text-recoupe-brown">
						<Axe weight="duotone" />
					</span>
					<p>Those interested in traditional woodland crafts.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mt-16">
	<div class="flex justify-center">
		<div class="flex justify-center gap-20">
			<div class="relative flex flex-col items-center rounded-lg p-4">
				<div class="">
					<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">
						click here to book a place
					</h3>
				</div>

				<div class="absolute left-1/2 top-[3px] w-[120px] -translate-x-1/2 scale-y-50">
					<Picture
						imageClass="w-full h-full opacity-40 object-cover"
						sizes="80px"
						data={image.illustration.black_line}
						alt=""
					/>
				</div>

				<div class="absolute bottom-[1px] left-1/2 w-[120px] -translate-x-1/2 scale-y-[0.50]">
					<Picture
						imageClass="w-full h-full opacity-40 object-cover"
						sizes="80px"
						data={image.illustration.black_line}
						alt=""
					/>
				</div>
			</div>

			<div class="relative flex flex-col items-center rounded-lg p-4">
				<div class="">
					<h3 class=" font-amatic text-3xl font-bold text-recoupe-green">
						click here to register interest
					</h3>
				</div>

				<div class="absolute left-1/2 top-[3px] w-[120px] -translate-x-1/2 scale-y-50">
					<Picture
						imageClass="w-full h-full opacity-40 object-cover"
						sizes="80px"
						data={image.illustration.black_line}
						alt=""
					/>
				</div>

				<div class="absolute bottom-[1px] left-1/2 w-[120px] -translate-x-1/2 scale-y-[0.50]">
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
</section>

<section class="relative mt-12 px-44 pt-16">
	<div class="absolute left-1/2 top-0 w-[920px] -translate-x-1/2 scale-y-[0.08]">
		<Picture
			imageClass="w-full h-full opacity-60 object-cover"
			sizes="80px"
			data={image.illustration.black_line}
			alt=""
		/>
	</div>

	<div class="w-full rounded-md border-[4px] border-recoupe-light-orangey-brown/30 p-[6px]">
		<Picture
			imageClass="w-full h-full object-cover "
			sizes="80px"
			data={image.new_and_pro.drone_trees_and_sitting_circle_very_far}
			alt=""
		/>
	</div>

	<div class="my-4">
		<p class="two-tone-text-other font-amatic text-3xl font-bold">@thebirchcollectivebristol</p>
	</div>

	<div class="grid grid-cols-3 gap-8">
		<div
			class="aspect-square w-full rounded-md border-4 border-recoupe-light-orangey-brown/30 p-[6px]"
		>
			<Picture
				imageClass="w-full h-full object-cover"
				sizes="80px"
				data={image.new_and_pro.cooking_pot}
				alt=""
			/>
		</div>

		<div
			class="aspect-square w-full rounded-md border-4 border-recoupe-light-orangey-brown/30 p-[6px]"
		>
			<Picture
				imageClass="w-full h-full object-cover"
				sizes="80px"
				data={image.new_and_pro.fresh_air_thursday_art}
				alt=""
			/>
		</div>

		<div
			class="aspect-square w-full rounded-md border-4 border-recoupe-light-orangey-brown/30 p-[6px]"
		>
			<Picture
				imageClass="w-full h-full object-cover"
				sizes="80px"
				data={image.new_and_pro.stay_calm_and_listen_to_nature}
				alt=""
			/>
		</div>
	</div>
</section>

<!-- <section class="mt-16 flex justify-center px-24">
	<div class="w-full max-w-[800px] font-maven">
		<div class="flex items-baseline gap-4">
			<p class="tracking-wide">Recoupe? I'm in!</p>
			<button
				class="two-tone-text-main-title relative rounded-sm font-amatic text-xl font-bold tracking-wide text-white underline decoration-recoupe-light-orangey-brown underline-offset-4"
				type="button"
			>
				sign up
			</button>
		</div>
		<div class="my-5 flex h-[1px] w-[40px] items-center gap-4 bg-recoupe-light-yellow/70"></div>

		<div class="mt-2 flex items-baseline gap-4">
			<p class="tracking-wide">I'm interested and would like to know more...</p>
		</div>

		<div>
			<div class="mt-5 flex items-center gap-4">
				<Checkbox class="border-recoupe-light-orangey-brown" id="young" />

				<Label
					for="young"
					class="font-maven text-base leading-none text-recoupe-green peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					I'm a participant
				</Label>
			</div>

			<div class="mt-5 flex items-center gap-4">
				<Checkbox class="border-recoupe-light-orangey-brown" id="caregiver" />

				<Label
					for="caregiver"
					class="font-maven text-base leading-none text-recoupe-green peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					I'm a caregiver
				</Label>
			</div>
		</div>

		<div class="mt-6 flex justify-between border-b border-dashed border-b-bc-soft-black">
			<Input
				type="email"
				placeholder="Enter email"
				class="rounded-none border-none pl-0 font-mono1 text-[13px]"
			/>
			<Button
				class="bg-transparent font-amatic text-[21px] font-bold tracking-wider text-recoupe-green"
				>submit</Button
			>
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

	.two-tone-text-other {
		background: linear-gradient(to bottom, #2f637b 50%, #74c1d5 50%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* For Firefox */
		background-clip: text;
		color: transparent;
	}
</style>
