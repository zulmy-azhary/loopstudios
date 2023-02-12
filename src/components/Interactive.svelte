<script lang="ts">
  import Heading from "./Heading.svelte";
  import Section from "./Section.svelte";
</script>

<Section class="flex flex-col items-center gap-y-10 md:gap-y-6 lg:grid lg:grid-cols-12">
  <img src="/assets/mobile/image-interactive.jpg" alt="Interactive Banner" class="md:col-[1/7] object-cover w-full" />
  <div class="text-center lg:col-[7/-1]">
    <Heading>The Leader In Interactive VR</Heading>
    <p class="text-veryDarkGray text-sm font-medium w-4/5 mx-auto mt-3 md:w-full md:text-base md:font-normal">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
  </div>
</Section>
