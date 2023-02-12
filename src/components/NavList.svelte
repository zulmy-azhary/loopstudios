<script lang="ts">
  import clsx from "clsx";
  import NavItems from "./NavItems.svelte";
  
  export let isOpen: boolean;
</script>

<div
  class={clsx(
    "fixed bg-black inset-y-0 -z-10 transition-all duration-500 w-full md:static md:bg-transparent md:transition-none",
    isOpen ? "right-0" : "-right-full"
  )}
>
  <ul class={"flex flex-col gap-y-8 h-full justify-center max-w-xs mx-auto md:max-w-full md:flex-row md:gap-x-6 xl:gap-x-8"}>
    <NavItems class="uppercase text-4xl font-josefin font-extralight md:normal-case md:text-sm md:font-normal lg:text-base" />
  </ul>
</div>
