<script lang="ts">
  import clsx from "clsx";
</script>

<section class={clsx("max-w-xs mx-auto pt-20 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl lg:pt-28 xl:pt-40", $$props.class)}>
  <slot />
</section>