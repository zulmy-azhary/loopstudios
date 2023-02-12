<script lang="ts">
  import clsx from "clsx";

  const items = ["About", "Careers", "Events", "Products", "Support"];
</script>

{#each items as item}
  <li class="relative hover:after:absolute after:h-[1px] after:bg-white after:-bottom-2 after:left-0 after:w-0 hover:after:w-full hover:md:after:w-auto md:after:inset-x-full hover:md:after:inset-x-1 after:transition-all">
    <a href={`#${item.toLowerCase()}`} class={clsx("text-white", $$props.class)}
      >{item}</a
    >
  </li>
{/each}
