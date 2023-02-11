<script lang="ts">
  import clsx from "clsx";

  const items = ["About", "Careers", "Events", "Products", "Support"];
</script>

{#each items as item}
  <li>
    <a href={`#${item.toLowerCase()}`} class={clsx("text-white", $$props.class)}
      >{item}</a
    >
  </li>
{/each}
