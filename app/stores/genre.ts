import { create } from "zustand";

type Genre = {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
};

const useGenre = create<Genre>((set) => ({
  selectedGenre: "",
  setSelectedGenre: (value: string) =>
    set((state) => ({ ...state, selectedGenre: value })),
}));
export default useGenre;
