<script lang="ts">
  import Creations from "./components/Creations.svelte";
  import Footer from "./components/Footer.svelte";
  import Hero from "./components/Hero.svelte";
  import Interactive from "./components/Interactive.svelte";
  import Navbar from "./components/Navbar.svelte";
  import { useMediaQuery } from "./hooks/useMediaQuery";

  let isTablet = useMediaQuery("(min-width: 768px)");
</script>

<main>
  <Navbar isTablet={$isTablet} />
  <Hero />
  <Interactive />
  <Creations isTablet={$isTablet} />
  <Footer />
</main>
