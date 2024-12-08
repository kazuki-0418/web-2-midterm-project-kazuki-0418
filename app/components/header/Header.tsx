import { useLocation } from "@remix-run/react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { NavigationMenuComponent } from ".";
import Dialog from "../dialog";
import { Select } from "../select";
import * as styles from "./header.css";

type HeaderProps = {
	language: string;
};

export const Header: FC<HeaderProps> = (props) => {
	const language = props.language;
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
			{isHome && <NavigationMenuComponent />}
			<Select defaultValue={language} />
		</header>
	);
};
