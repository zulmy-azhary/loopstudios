<script lang="ts">
  import NavItems from "./NavItems.svelte";

  const socialMedia = ["facebook", "twitter", "pinterest", "instagram"];
</script>

<footer class="bg-black py-16 mt-28 md:py-10 xl:py-12">
  <div class="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl grid grid-cols-1 gap-y-10 place-items-center md:grid-cols-12 md:gap-y-3 lg:gap-y-5 xl:gap-y-6">
    <img src="/assets/logo.svg" alt="Brand Logo" class="w-[9.75rem] object-contain cursor-pointer md:col-span-6 md:justify-self-start md:w-28 lg:w-32 xl:w-40" />
    <ul class="flex flex-col items-center gap-y-6 md:row-start-2 md:col-start-1 md:flex-row md:col-span-6 md:gap-x-3 md:justify-self-start lg:gap-x-6 xl:gap-x-8">
      <NavItems class="font-alata md:text-xs md:font-thin lg:text-sm xl:text-base" />
    </ul>
    <ul class="flex items-center gap-x-5 md:col-span-6 md:justify-self-end lg:gap-x-4">
      {#each socialMedia as icons}
        <li  class="relative hover:after:absolute after:h-[1px] after:bg-white after:-bottom-2 after:inset-x-full hover:after:inset-x-1 after:transition-all">
          <a href={`#${icons}`}><img src={`/assets/icon-${icons}.svg`} alt={`${icons} Image`} class="object-contain w-fit md:w-5 lg:w-fit" /></a>
        </li>
      {/each}
    </ul>
    <p class="text-veryDarkGray font-alata text-sm md:col-span-6 md:justify-self-end md:text-xs lg:text-sm tracking-wide xl:text-base">&copy; 2021 Loopstudios. All rights reserved.</p>
  </div>
</footer>
