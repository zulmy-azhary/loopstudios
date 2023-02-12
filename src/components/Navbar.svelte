<script lang="ts">
  import clsx from "clsx";
  import { onDestroy } from "svelte";
  import NavList from "./NavList.svelte";

  let toggle = false;
  let isScroll = false;
  export let isTablet: boolean;

  $: {
    if (isTablet) {
      toggle = false;
      isScroll = false;
    }
  }

  const handleToggleChange = () => (toggle = !toggle);

  const handleScroll = () => {
    if (isTablet) return;
    isScroll = window.scrollY > 10;
  };

  window.addEventListener("scroll", handleScroll);
  onDestroy(() => window.removeEventListener("scroll", handleScroll));
</script>

<header
  class={clsx(
    "w-full top-0 z-50 transition-colors",
    isScroll && "bg-black",
    isTablet ? "absolute" : "fixed"
  )}
>
  <nav class="max-w-xs mx-auto py-8 flex justify-between items-center md:max-w-2xl">
    <img
      src="/assets/logo.svg"
      alt="Brand Logo"
      class="w-[9.75rem] object-contain cursor-pointer md:w-28"
    />
    <aside>
      {#if !isTablet}
        <button on:click={handleToggleChange}>
          <img src={`/assets/icon-${toggle ? "close" : "hamburger"}.svg`} alt="Toggle" />
        </button>
      {/if}
      <NavList isOpen={toggle} />
    </aside>
  </nav>
</header>
