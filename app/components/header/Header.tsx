import { NavigationMenuComponent } from ".";
import * as styles from "./header.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavigationMenuComponent />
    </header>
  );
};
