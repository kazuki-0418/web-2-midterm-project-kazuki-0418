import type { FC } from "react";
import { NavigationMenuComponent } from ".";
import * as styles from "./header.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/assets/logos/movie.png" alt="logo" />
        <h1 className={styles.logoText}>Home</h1>
      </div>
      <NavigationMenuComponent />
    </header>
  );
};
