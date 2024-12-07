import type { FC } from "react";
import { NavigationMenuComponent } from ".";
import * as styles from "./header.css";
import Dialog from "../dialog";
import { useLocation, useParams } from "@remix-run/react";
import { Link } from "react-router-dom";

export const Header: FC = (props) => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {isHome && <Dialog />}
        <Link to={"/"}>
          <img
            className={styles.logo}
            src="/assets/logos/movie.png"
            alt="logo"
          />
        </Link>
      </div>
      {isHome && <NavigationMenuComponent {...props} />}
    </header>
  );
};
