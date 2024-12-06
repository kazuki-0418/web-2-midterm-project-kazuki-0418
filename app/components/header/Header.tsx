import { useState, type Dispatch, type FC, type SetStateAction } from "react";
import { NavigationMenuComponent } from ".";
import * as styles from "./header.css";
import { CiSearch } from "react-icons/ci";
import { IconButton } from "@radix-ui/themes";
import type { Media } from "../../types/Media";
import useMedia from "../../stores/MediaType";
import Dialog from "../dialog";

export const Header: FC = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/assets/logos/movie.png" alt="logo" />
      </div>
      <Dialog />

      <NavigationMenuComponent {...props} />
    </header>
  );
};
