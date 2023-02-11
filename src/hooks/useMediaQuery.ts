import { readable } from "svelte/store";

export const useMediaQuery = (query: string) => {
  const matches = readable(null, (set) => {
    const media: MediaQueryList = window.matchMedia(query);
    set(media.matches);

    const listener = () => set(media.matches);

    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  });
  return matches;
};
