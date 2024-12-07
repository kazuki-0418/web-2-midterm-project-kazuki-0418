import { useLocation } from "@remix-run/react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { NavigationMenuComponent } from ".";
import Dialog from "../dialog";
import * as styles from "./header.css";

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
