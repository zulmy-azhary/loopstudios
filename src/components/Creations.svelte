<script lang="ts">
  import Button from "./Button.svelte";
  import Heading from "./Heading.svelte";
  import Section from "./Section.svelte";

  export let isTablet: boolean;

  const creations = [
    {
      title: "Deep Earth",
      src: "deep-earth",
    },
    {
      title: "Night Arcade",
      src: "night-arcade",
    },
    {
      title: "Soccer Team VR",
      src: "soccer-team",
    },
    {
      title: "The Grid",
      src: "grid",
    },
    {
      title: "From Up Above VR",
      src: "from-above",
    },
    {
      title: "Pocket Borealis",
      src: "pocket-borealis",
    },
    {
      title: "The Curiosity",
      src: "curiosity",
    },
    {
      title: "Make It Fisheye",
      src: "fisheye",
    },
  ];
</script>

<Section class="grid grid-cols-1 gap-y-12 place-items-center md:gap-y-6 md:grid-cols-2 lg:gap-y-8 xl:gap-y-20">
  <Heading class="text-center md:justify-self-start md:text-start">Our Creations</Heading>
  <Button>See All</Button>
  <div class="grid grid-cols-1 gap-6 md:gap-5 md:grid-cols-12 w-full md:col-span-2 lg:gap-7">
    {#each creations as creation}
      <figure class="relative col-span-1 md:col-span-4 lg:col-span-3 group cursor-pointer">
        <img
          src={`/assets/${isTablet ? "desktop" : "mobile"}/image-${creation.src}.jpg`}
          alt={creation.title}
          class="w-full object-cover md:group-hover:opacity-50 lg:group-hover:opacity-20 transition-opacity"
        />
        <figcaption
          class="absolute bottom-4 left-0 px-5 text-white font-josefin font-light text-2xl uppercase w-[55%] md:w-4/6 md:text-lg group-hover:text-black transition-colors lg:text-2xl lg:w-4/5 xl:text-3xl xl:bottom-9 xl:px-10 xl:w-11/12"
        >
          {creation.title}
        </figcaption>
      </figure>
    {/each}
  </div>
</Section>
