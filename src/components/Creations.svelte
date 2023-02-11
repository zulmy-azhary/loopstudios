<script lang="ts">
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

<section class="max-w-xs mx-auto mt-20 grid grid-cols-1 gap-y-12 place-items-center">
  <h2 class="font-light text-3xl font-josefin uppercase text-center">Our Creations</h2>
  <button
    class="font-alata font-extralight py-2 w-32 tracking-widest text-black border-[1px] border-black text-sm uppercase order-last"
  >
    See All
  </button>
  <div class="grid grid-cols-1 gap-y-6">
    {#each creations as creation}
      <figure class="relative">
        <img src={`/assets/mobile/image-${creation.src}.jpg`} alt={creation.title} />
        <figcaption
          class="absolute bottom-4 left-5 text-white font-josefin font-light text-2xl uppercase w-2/5"
        >
          {creation.title}
        </figcaption>
      </figure>
    {/each}
  </div>
</section>
