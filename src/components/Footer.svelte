<script lang="ts">
  import NavItems from "./NavItems.svelte";

  const socialMedia = ["facebook", "twitter", "pinterest", "instagram"];
</script>

<footer class="bg-black grid grid-cols-1 gap-y-10 py-16 mt-28 place-items-center">
  <img src="/assets/logo.svg" alt="Brand Logo" class="w-[9.75rem] object-contain cursor-pointer" />
  <ul class="flex flex-col items-center gap-y-6">
    <NavItems class="font-alata" />
  </ul>
  <ul class="flex items-center gap-x-5">
    {#each socialMedia as icons}
      <li>
        <a href={`#${icons}`}><img src={`/assets/icon-${icons}.svg`} alt={`${icons} Image`} /></a>
      </li>
    {/each}
  </ul>
  <p class="text-darkGray font-alata text-sm">&copy; 2021 Loopstudios. All rights reserved.</p>
</footer>
