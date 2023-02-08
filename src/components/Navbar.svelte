<script lang="ts">
  import NavList from "./NavList.svelte";

  let toggle = false;
  const handleToggleChange = () => {
    toggle = !toggle;
  };
</script>

<header class="fixed w-full top-0 z-50">
  <nav class="max-w-xs mx-auto py-8 flex justify-between items-center">
    <img src="/assets/logo.svg" alt="Brand Logo" class="w-[9.75rem] object-contain" />
    <aside>
      <button on:click={handleToggleChange}
        ><img src={`/assets/icon-${toggle ? "close" : "hamburger"}.svg`} alt="Toggle" /></button
      >
      <NavList isOpen={toggle} />
    </aside>
  </nav>
</header>
