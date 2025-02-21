<script lang="ts" context="module">
	import { image } from '^assets/images';

	import { Picture } from '^components';
	import {
		ArrowLeft,
		ArrowRight,
		CookingPot,
		Flower2,
		Leaf,
		Scissors,
		SmilePlus,
		Sprout
	} from 'lucide-svelte';
	import { Button } from '~ui';

	// click on sign up -> choose whether to just send interest or properly sign up.
	// could have overhead shot as map and then activities with pics coming off it.
</script>

<div class="flex justify-center">
	<div class="relative w-full max-w-[1050px] pb-[200px]">
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

		<!-- <section class="mt-16 px-8">
			<div class="px-8">
				<p class="max-w-[400px] font-montserrat text-lg leading-relaxed">
					Come along to make new friends, take part in fun and relaxing nature based activities or
					just to chill out in our outdoor garden.
				</p>
			</div>
		</section> -->

		<section class="relative mt-24 px-16 font-ubuntu text-bc-soft-black">
			<div class="grid grid-cols-2">
				<div class="flex flex-col">
					<div class="flex">
						<h3 class="font-bebas text-xl tracking-wide">Next Session:&nbsp;</h3>
						<p>
							This Thursday <span class="mr-[2px] opacity-50">(</span><span
								class="font-input-serif text-[12.5px] text-bc-sky-blue">25th Feb 2025</span
							><span class="ml-[2px] opacity-50">)</span>
						</p>
					</div>

					<div class="mt-3 flex">
						<h3 class="font-bebas text-xl tracking-wide">Requirements:&nbsp;</h3>
						<p class="font-ubuntu">You are 16 - 25 years old!</p>
					</div>

					<div class="mt-6 flex flex-grow flex-col items-start justify-between">
						<Button class="bg-bc-soft-black font-lora text-[18px] tracking-wide">Sign Up</Button>

						<!-- <p class="mt-[14px] font-lora text-xs text-bc-soft-black/50">
							Click <span class="underline underline-offset-2">here</span> for email updates
						</p> -->
					</div>
				</div>

				<div>
					<div class=" aspect-square">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.caregiver_with_partipant_face_to_face}
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- <section class="relative mt-24 px-16 font-ubuntu text-bc-soft-black">
			<h2 class="font-bebas text-[22px] tracking-wide">About Fresh Air Thursday</h2>

			<p class="mt-4 max-w-[600px] font-ubuntu text-[17px]">
				Fresh, is our weekly group for 16-25 year olds. We offer a range of activities designed at a
				pace to make learning accessible and to draw out your creativity.
			</p>

			<p class="mt-4 max-w-[600px] font-ubuntu text-[16px]">
				There is no fixed time limit to attendance, attend all year round, once a month or just one
				off, totally up to you.
			</p>
		</section> -->

		<section class="relative mt-24 px-16 font-ubuntu text-bc-soft-black">
			<h2 class="font-bebas text-[22px] tracking-wide">Activities</h2>

			<div class="mt-4">
				<div class="relative aspect-video overflow-hidden">
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="800px"
						data={image.new_and_pro.picking_leaves}
						alt=""
					/>

					<Button
						class="absolute left-4 top-1/2  h-[40px] w-[40px] -translate-y-1/2 rounded-full bg-white p-4 text-bc-soft-black"
						><span class="opacity-80"><ArrowLeft size={20} /></span></Button
					>
					<Button
						class="absolute right-4 top-1/2  h-[40px] w-[40px] -translate-y-1/2 rounded-full bg-white p-4 text-bc-soft-black"
						><span class="opacity-80"><ArrowRight size={20} /></span></Button
					>
				</div>
			</div>

			<div class="mt-6 flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><Sprout /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Organic horticulture and permaculture
						</h4>
						<!-- <p class="mt-1 max-w-[500px] truncate font-ubuntu text-bc-soft-black/85">
							Our team has many years experience in growing organic vegetables. We will explore and
							offer learning in a range of wildlife friendly food growing and horticulture
							techniques and practices.
						</p> -->
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><Scissors /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Nature based craft
						</h4>
						<!-- <p class="mt-1 max-w-[500px] truncate font-ubuntu text-bc-soft-black/85">
							Making all manner of things from willow with our resident willow expert Amy, from
							baskets to bird feeders, fences to climbing structures for plants.
						</p> -->
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><CookingPot /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">Cooking</h4>
						<!-- <p class="mt-1 max-w-[500px] truncate font-ubuntu text-bc-soft-black/85">
							Outdoor cookery or cooking on the campfire is a fine art and also a greatly satisfying
							process.
						</p> -->
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><SmilePlus /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Awareness & mindfulness
						</h4>
						<!-- <p class="mt-1 max-w-[500px] truncate font-ubuntu text-bc-soft-black/85">
							Alongside all the 'doing' we also encourage people to just be.
						</p> -->
					</div>
				</div>
			</div>
		</section>

		<section class="relative mt-24 px-16 font-ubuntu text-bc-soft-black">
			<h2 class="font-bebas text-[22px] tracking-wide">The Heart of the programme</h2>

			<p class="mt-4 max-w-[700px] font-lora text-lg">
				Fresh Air Thursday is part of our plan to help young people with their mental health by
				connecting them to nature. We offer a range of activities designed at a pace to make
				learning accessible and to draw out your creativity.
			</p>

			<div class="mt-8">
				<div class="relative">
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="800px"
						data={image.new_and_pro.james_and_participant}
						alt=""
					/>
				</div>
			</div>

			<p class="mt-6 font-ubuntu text-[17px]">Things you might be feeling and ways it can help:</p>

			<div class="mt-6 flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><Sprout /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Anyone seeking to spend more time in the outdoors and meet new people.
						</h4>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><Scissors /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Struggling with family and relationship issues.
						</h4>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><CookingPot /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Struggling to engage with study​​.
						</h4>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><SmilePlus /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Experiencing low-level mental health issues.
						</h4>
					</div>
				</div>
			</div>
		</section>

		<!-- <section class="relative mt-24 px-16 font-ubuntu text-bc-soft-black">
			<h2 class="font-bebas text-[22px] tracking-wide">
				How you might be feeling and how this helps
			</h2>

			<div class="mt-4">
				<div class="relative">
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="800px"
						data={image.new_and_pro.james_and_participant}
						alt=""
					/>
				</div>
			</div>

			<div class="mt-6 flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><Sprout /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Anyone seeking to spend more time in the outdoors and meet new people.
						</h4>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><Scissors /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Struggling with family and relationship issues.
						</h4>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><CookingPot /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Struggling to engage with study​​.
						</h4>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="text-bc-soft-green"><SmilePlus /></div>
					<div class="">
						<h4 class="font-montserrat text-sm font-medium uppercase tracking-wide">
							Experiencing low-level mental health issues.
						</h4>
					</div>
				</div>
			</div>
		</section> -->
	</div>
</div>
