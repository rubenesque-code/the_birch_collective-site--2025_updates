<script lang="ts" context="module">
	import { image } from '^assets/images';
	import { Picture } from '^components';
	import { ArrowRight, Quote } from 'lucide-svelte';
	import { Button } from '~ui';

	// "get involved this week" can be a graphic sticker

	// SECTIONS
	// - sign up to newslettr
	// - latest news
</script>

<div class="flex justify-center">
	<div class="relative w-full max-w-[1050px]">
		<section class="relative">
			<div class="polygon absolute left-0 top-0 -z-10 h-[300px] w-full bg-bc-soft-green"></div>

			<div class="relative aspect-[17/9] w-full px-8 pt-[50px]">
				<div class="polygon2 relative h-[600px]">
					<div class="absolute inset-0">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.stay_calm_and_listen_to_nature}
							alt=""
						/>
					</div>

					<div
						class="absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t from-bc-soft-black to-transparent"
					></div>
				</div>

				<div class="absolute inset-0 translate-y-[50px]">
					<div class="mt-[50px] px-12">
						<div class="flex items-center gap-[9px] px-8">
							<div class="w-[48px]">
								<Picture
									imageClass="w-full h-full object-cover"
									sizes="80px"
									data={image.birch.logo_image_white_yellow}
									alt=""
								/>
							</div>

							<h1 class="font-yuji-boku text-[22px] tracking-tight text-white">
								The Birch Collective
							</h1>
						</div>

						<h2 class="mt-20 px-8 font-bebas text-[34px] tracking-wider text-white">
							Nature, Community<br />& Connection
						</h2>

						<div class="mt-8 max-w-[600px] px-8 font-ubuntu text-[18px] leading-relaxed text-white">
							<p class="font-medium">Are you 16 — 25 years old and from in or around Bristol?</p>
							<p class="mt-2">
								We run nature based courses to help mental health, anxiety, or just to connect to
								nature!
							</p>
							<p class="mt-2 underline underline-offset-4">Get involved this week!</p>
						</div>

						<div class="mt-10 px-8">
							<Button
								class="flex items-center gap-[10px] rounded-full bg-bc-soft-green px-10 py-4 font-sans2 text-white "
								><span class="font-bebas text-[21px] uppercase tracking-widest">Get Connected</span>
								<span><ArrowRight size="19" /></span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="mb-32 mt-24 px-16">
			<div class="relative inline-flex items-baseline gap-8">
				<h2 class="font-bebas text-[33px] leading-none tracking-wide text-bc-black1">What's on</h2>

				<div class="">
					<p
						class="flex items-center gap-2 font-bebas text-sm font-bold uppercase leading-none text-bc-black1/70"
					>
						<span>See all</span>
					</p>
				</div>
			</div>

			<div class="mt-8 flex items-center gap-12">
				<a class="group/card relative aspect-[9/13] w-[400px]" href="/fresh-air-thursday">
					<Picture
						imageClass="w-full h-full object-cover object-left"
						sizes="800px"
						data={image.new_and_pro.james_and_helper_talking_to_participant}
						alt=""
					/>

					<div
						class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-pastel-red p-6 transition-all duration-300 ease-in-out group-hover/card:translate-y-1/3"
					>
						<h4 class="font-bebas text-[22px] tracking-wide text-bc-black1">Fresh Air Thursdays</h4>

						<div class="flex items-center gap-4">
							<p class="mt-2 font-montserrat text-[15px] font-medium text-bc-black1">
								Get stuck in at our weekly meet-up.
							</p>

							<span
								class="rounded-full border border-bc-soft-black p-1 text-bc-soft-black transition-transform duration-300 ease-in-out ease-in-out group-hover/card:translate-x-[6px] group-hover/card:bg-bc-soft-black group-hover/card:text-white"
							>
								<ArrowRight size="19" />
							</span>
						</div>
					</div>
				</a>

				<div class="relative aspect-[9/13] w-[400px]">
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="800px"
						data={image.programme.camp_birch.lying_in_grass}
						alt=""
					/>

					<div
						class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-sky-blue p-6 transition-all duration-300 ease-in-out group-hover/card:translate-y-1/3"
					>
						<h4 class="font-bebas text-[22px] tracking-wide text-bc-black1">Camp Birch</h4>

						<div class="flex items-center gap-4">
							<p class="mt-2 font-montserrat text-[15px] font-medium text-bc-black1">
								A free 5 day residential in the Dartmoor wilderness!
							</p>

							<span
								class="rounded-full border border-bc-soft-black p-1 text-bc-soft-black transition-colors duration-300 ease-in-out group-hover/card:bg-bc-soft-black group-hover/card:text-white"
							>
								<ArrowRight size="17" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="mb-32 mt-[200px] px-16">
			<div class="flex items-center gap-8">
				<h2 class="font-display3 text-4xl tracking-wide text-bc-black1">Help out</h2>

				<div class="relative">
					<p class="mt-4 flex items-center gap-2 text-sm font-bold uppercase text-bc-black1/70">
						<span>View more</span><span> </span>
					</p>
				</div>
			</div>

			<div class="mt-12 flex items-center gap-12">
				<div class="relative aspect-square w-[400px]">
					<div class="polygon3 aspect-square w-full">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.helper_foreground_smiling}
							alt=""
						/>
					</div>

					<div
						class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-vivid-green p-6"
					>
						<h4 class="font-display3 text-xl text-bc-black1">Volunteer</h4>

						<p class="mt-2 text-base text-bc-black1">
							Have a desire to help young people and nature? We want you!
						</p>
					</div>
				</div>

				<div class="relative aspect-square w-[400px]">
					<div class="polygon3 aspect-square w-full">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.drone_sitting_in_circle_close}
							alt=""
						/>
					</div>

					<div
						class="absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-pastel-red p-6"
					>
						<h4 class="font-display3 text-xl text-bc-black1">Donate</h4>

						<p class="mt-2 text-base text-bc-black1">
							Help us keep going and reach more young people.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="mb-[240px] mt-[200px]">
			<div class="relative px-16">
				<div class="polygon3">
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="800px"
						data={image.programme.camp_birch.lying_in_grass}
						alt=""
					/>
				</div>

				<div
					class="polygon2 absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-soft-green p-12"
				>
					<h4 class="font-display3 text-3xl text-bc-black1">
						Book a block as an educational institution
					</h4>

					<p class="mt-6 text-[17px] text-bc-black1">
						If you'd like to book in a group of young people, get in touch!
					</p>

					<div class="mt-12 flex justify-end">
						<Button
							class="flex items-center gap-2 rounded-full bg-transparent px-10 py-4 font-sans2 text-[17px] font-semibold text-bc-soft-black"
							><span>Find out more</span>
							<span><ArrowRight /></span>
						</Button>
					</div>
				</div>

				<div
					class="polygon3 absolute left-0 top-0 -z-10 aspect-[17/9] w-full translate-y-1/2 opacity-80 grayscale"
				>
					<!-- <div class="absolute inset-0 bg-bc-golden-yellow/40"></div> -->
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="800px"
						data={image.new_and_pro.drone_trees_and_sitting_circle_very_far}
						alt=""
					/>
				</div>
			</div>
		</section>

		<section class="mb-[240px] mt-[200px]">
			<div class="relative px-16">
				<div class="polygon3">
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="800px"
						data={image.new_and_pro.group_photo_1}
						alt=""
					/>
				</div>

				<div
					class="polygon2 absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 translate-y-1/2 bg-bc-coral-pink p-12"
				>
					<h4 class="font-display3 text-3xl text-bc-black1">What motivates us</h4>

					<p class="mt-6 text-[17px] text-bc-black1">
						Read about our ideas and why we think connecting young people to nature is a great idea.
					</p>

					<div class="mt-12 flex justify-end">
						<Button
							class="flex items-center gap-2 rounded-full bg-transparent px-10 py-4 font-sans2 text-[17px] font-semibold text-bc-soft-black"
							><span>Read more</span>
							<span><ArrowRight /></span>
						</Button>
					</div>
				</div>

				<div
					class="polygon3 absolute left-0 top-0 -z-10 aspect-[17/9] w-full translate-y-1/2 opacity-80 grayscale"
				>
					<!-- <div class="absolute inset-0 bg-bc-golden-yellow/40"></div> -->
					<Picture
						imageClass="w-full h-full object-cover"
						sizes="800px"
						data={image.new_and_pro.drone_trees_and_sitting_circle_very_far}
						alt=""
					/>
				</div>
			</div>
		</section>

		<section class="mb-32 mt-[340px] px-16">
			<div class="flex items-center gap-8">
				<h2 class="font-display3 text-4xl tracking-wide text-bc-black1">Points of view</h2>

				<div class="relative">
					<p class="mt-4 flex items-center gap-2 text-sm font-bold uppercase text-bc-black1/70">
						<span>View all</span><span> </span>
					</p>
				</div>
			</div>

			<div class="mt-10 grid grid-cols-2 gap-8">
				<div class="polygon3 flex flex-col justify-between bg-bc-soft-green">
					<div class="relative p-6 text-lg">
						<div class="relative">
							<div
								class="absolute left-0 top-0 rotate-180 scale-y-[-1] fill-current text-bc-soft-yellow"
							>
								<Quote fill="" />
							</div>

							<div class="relative p-6">
								<p class="font-sans3 text-xl text-bc-soft-black">
									The time I got to spend with others on the camp was just something so magical and
									wonderful and beautiful I can't fully describe it. If you find interacting with
									others difficult or intimidating, or if you're struggling with your mental health,
									please consider giving it a go. It was absolutely worth it and I am incredibly
									thankful I got to go.
								</p>

								<p class="mt-4 text-right font-sans3 text-xl font-semibold text-bc-soft-black">
									Martina - Fresh Air Thursdays
								</p>
							</div>

							<!-- <div class="absolute bottom-0 right-0 fill-current text-bc-soft-yellow">
								<Quote fill="" />
							</div> -->
						</div>
					</div>
					<div class="polygon3 m-8">
						<Picture
							imageClass="w-full h-full object-cover"
							sizes="800px"
							data={image.new_and_pro.participant_1}
							alt=""
						/>
					</div>
				</div>

				<div class="polygon3 bg-bc-sky-blue">
					<div class="relative p-6 text-lg">
						<div class="relative">
							<div
								class="absolute left-0 top-0 rotate-180 scale-y-[-1] fill-current text-bc-soft-yellow"
							>
								<Quote fill="" />
							</div>

							<div class="relative p-6">
								<p class="font-sans3 text-xl text-bc-soft-black">
									The Birch Collective has been a transformative experience, both for the
									individuals I care for and for myself as a caregiver. The charity’s innovative
									approach to mental health, which integrates nature into healing and
									self-discovery, has been nothing short of inspiring. Witnessing the profound
									impact of their programs—whether it’s forest therapy, mindfulness walks, or
									gardening workshops—has shown me how reconnecting with the natural world can
									foster resilience, calm, and hope in those struggling with mental health
									challenges.
								</p>

								<p class="mt-4 text-right font-sans3 text-xl font-semibold text-bc-soft-black">
									Sarah - Social Worker
								</p>
							</div>

							<!-- <div class="absolute bottom-0 right-0 fill-current text-bc-coral-pink">
								<Quote fill="" />
							</div> -->
						</div>
					</div>

					<div class="polygon3 m-8">
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

		<section class="mb-32 mt-[110px] px-16">
			<div class="flex items-center gap-8">
				<h2 class="font-display3 text-4xl tracking-wide text-bc-black1">Partners & Supporters</h2>

				<div class="relative">
					<p class="mt-4 flex items-center gap-2 text-sm font-bold uppercase text-bc-black1/70">
						<span>View all</span><span> </span>
					</p>
				</div>
			</div>

			<div class="mt-12 grid grid-cols-4 gap-8">
				<div class="aspect-video grayscale">
					<Picture
						imageClass="w-full h-full object-contain"
						sizes="800px"
						data={image.partner.one}
						alt=""
					/>
				</div>

				<div class="aspect-video grayscale">
					<Picture
						imageClass="w-full h-full object-contain"
						sizes="800px"
						data={image.partner.two}
						alt=""
					/>
				</div>

				<div class="aspect-video grayscale">
					<Picture
						imageClass="w-full h-full object-contain"
						sizes="800px"
						data={image.partner.three}
						alt=""
					/>
				</div>

				<div class="aspect-video grayscale">
					<Picture
						imageClass="w-full h-full object-contain"
						sizes="800px"
						data={image.partner.four}
						alt=""
					/>
				</div>
			</div>
		</section>
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
