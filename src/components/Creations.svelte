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

<Section class="grid grid-cols-1 gap-y-12 place-items-center md:gap-y-6 md:grid-cols-2">
  <Heading class="text-center md:justify-self-start md:text-start">Our Creations</Heading>
  <Button>See All</Button>
  <div class="grid grid-cols-1 gap-6 md:gap-5 md:grid-cols-12 w-full md:col-span-2">
    {#each creations as creation}
      <figure class="relative col-span-1 md:col-span-4 group cursor-pointer">
        <img
          src={`/assets/${isTablet ? "desktop" : "mobile"}/image-${creation.src}.jpg`}
          alt={creation.title}
          class="w-full object-cover group-hover:opacity-20 transition-opacity"
        />
        <figcaption
          class="absolute bottom-4 left-5 text-white font-josefin font-light text-2xl uppercase w-2/5 md:w-[45%] md:text-lg group-hover:text-black transition-colors"
        >
          {creation.title}
        </figcaption>
      </figure>
    {/each}
  </div>
</Section>
