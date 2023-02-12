<script lang="ts">
  import Heading from "./Heading.svelte";
  import Section from "./Section.svelte";
</script>

<Section class="flex flex-col items-center gap-y-10 md:gap-y-6 lg:grid lg:grid-cols-12">
  <img src="/assets/mobile/image-interactive.jpg" alt="Interactive Banner" class="md:col-span-full lg:col-span-8 lg:col-start-1 lg:row-span-full object-cover w-full" />
  <div class="text-center lg:col-start-7 lg:col-span-6 lg:row-span-full lg:self-end lg:bg-white lg:pl-16 lg:pt-16 lg:pb-0 lg:pr-0 lg:text-start xl:pl-24 xl:pt-24">
    <Heading>The Leader In Interactive VR</Heading>
    <p class="text-darkGray text-sm font-medium w-4/5 mx-auto mt-3 md:w-full md:text-base lg:font-medium lg:text-sm xl:text-base">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
  </div>
</Section>
