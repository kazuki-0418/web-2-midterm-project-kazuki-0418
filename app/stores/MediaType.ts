import { create } from "zustand";
import type { Media } from "../types/Media";

type MediaType = {
  mediaType: Media;
  setMediaType: (media: Media) => void;
};

const useMedia = create<MediaType>((set) => ({
  mediaType: "movie",
  setMediaType: (value: Media) =>
    set((state) => ({ ...state, mediaType: value })),
}));
export default useMedia;
