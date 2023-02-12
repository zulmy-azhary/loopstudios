<script lang="ts">
  import NavItems from "./NavItems.svelte";

  const socialMedia = ["facebook", "twitter", "pinterest", "instagram"];
</script>

<footer class="bg-black grid grid-cols-1 gap-y-10 py-16 mt-28 place-items-center md:grid-cols-12 md:gap-3 md:px-12 md:py-10">
  <img src="/assets/logo.svg" alt="Brand Logo" class="w-[9.75rem] object-contain cursor-pointer md:col-span-6 md:justify-self-start md:w-32" />
  <ul class="flex flex-col items-center gap-y-6 md:row-start-2 md:col-start-1 md:flex-row md:col-span-6 md:gap-x-3 md:justify-self-start">
    <NavItems class="font-alata md:text-xs md:font-thin" />
  </ul>
  <ul class="flex items-center gap-x-5 md:col-span-6 md:justify-self-end">
    {#each socialMedia as icons}
      <li  class="relative hover:after:absolute after:h-[1px] after:bg-white after:-bottom-2 after:inset-x-full hover:after:inset-x-1 after:transition-all">
        <a href={`#${icons}`}><img src={`/assets/icon-${icons}.svg`} alt={`${icons} Image`} class="object-contain w-fit md:w-5" /></a>
      </li>
    {/each}
  </ul>
  <p class="text-darkGray font-alata text-sm md:col-span-6 md:justify-self-end md:text-xs">&copy; 2021 Loopstudios. All rights reserved.</p>
</footer>
