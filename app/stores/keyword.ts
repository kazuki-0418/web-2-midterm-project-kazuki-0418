import { create } from "zustand";

type Keyword = {
  keyword: string;
  setKeyword: (genre: string) => void;
};

const useKeyword = create<Keyword>((set) => ({
  keyword: "",
  setKeyword: (value: string) => set((state) => ({ ...state, keyword: value })),
}));
export default useKeyword;
