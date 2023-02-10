<script lang="ts">
  import clsx from "clsx";
  import NavList from "./NavList.svelte";

  let toggle = false;
  let isScroll = false;
  const handleToggleChange = () => {
    toggle = !toggle;
  };
  $: window.addEventListener("scroll", () => {
    isScroll = window.scrollY > 10;
  })
</script>

<header class={clsx("fixed w-full top-0 z-50 transition-colors", isScroll && "bg-black")}>
  <nav class="max-w-xs mx-auto py-8 flex justify-between items-center">
    <img
      src="/assets/logo.svg"
      alt="Brand Logo"
      class="w-[9.75rem] object-contain cursor-pointer"
    />
    <aside>
      <button on:click={handleToggleChange}>
        <img src={`/assets/icon-${toggle ? "close" : "hamburger"}.svg`} alt="Toggle" />
      </button>
      <NavList isOpen={toggle} />
    </aside>
  </nav>
</header>
