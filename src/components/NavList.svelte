<script lang="ts">
  import clsx from "clsx";
  
  export let isOpen: boolean;
  const items = ["about", "careers", "events", "products", "support"];
</script>

<div
  class={clsx(
    "fixed bg-black inset-y-0 -z-10 transition-all duration-500 w-full",
    isOpen ? "right-0" : "-right-full"
  )}
>
  <ul class={"flex flex-col gap-y-8 h-full justify-center max-w-xs mx-auto"}>
    {#each items as item}
      <li>
        <a href={`#${item}`} class="text-white uppercase text-4xl font-josefin font-extralight"
          >{item}</a
        >
      </li>
    {/each}
  </ul>
</div>
