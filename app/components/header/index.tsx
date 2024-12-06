import * as Separator from "@radix-ui/react-separator";
import type { FC, Dispatch, SetStateAction } from "react";
import { Active, NavigationMenu, SeparatorRoot, Text } from "./header.css";
import type { Media } from "../../types/Media";
import useMedia from "../../stores/MediaType";

export const NavigationMenuComponent: FC = () => {
  const { mediaType, setMediaType } = useMedia();

  const handleMenuClick = (type: Media) => {
    setMediaType(type);
  };

  return (
    <div className={NavigationMenu}>
      <button
        type="button"
        onClick={() => handleMenuClick("movie")}
        className={`${Text} ${mediaType === "movie" ? Active : ""}`}
      >
        Movie
      </button>
      <Separator.Root
        className={SeparatorRoot}
        decorative
        orientation="vertical"
      />
      <button
        type="button"
        onClick={() => handleMenuClick("tv")}
        className={`${Text} ${mediaType === "tv" ? Active : ""}`}
      >
        TV Show
      </button>
    </div>
  );
};
