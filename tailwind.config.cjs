/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        alata: ["Alata"],
        josefin: ["Josefin Sans"],
      },
      backgroundImage: {
        "hero-mobile": "url('/assets/mobile/image-hero.jpg')",
        "hero-desktop": "url('/assets/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
