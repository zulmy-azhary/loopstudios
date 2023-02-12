<script lang="ts">
  import clsx from "clsx";
</script>

<section class={clsx("max-w-xs mx-auto pt-20 md:max-w-2xl lg:max-w-4xl", $$props.class)}>
  <slot />
</section>