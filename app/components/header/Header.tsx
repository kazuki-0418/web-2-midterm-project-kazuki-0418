import { useLocation } from "@remix-run/react";
import type { FC } from "react";
import { Link, useFetcher, useSearchParams } from "react-router-dom";
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
	const fetcher = useFetcher();

	const [searchParams, setSearchParams] = useSearchParams();
	const isHome = location.pathname === "/";

	const handleLanguageChange = (value: string) => {
		fetcher.submit({ language: value }, { method: "post" });
	};

	const handleDurationChange = (value: string) => {
		const params = new URLSearchParams();
		params.set("widow", value);
		setSearchParams(params);
	};

	const widow = searchParams.get("widow") ?? "day";
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				{isHome && <Dialog />}
				<Link
					to={{
						pathname: "/",
						search: `?${searchParams.toString()}`,
					}}
				>
					<img
						className={styles.logo}
						src="/assets/logos/movie.png"
						alt="logo"
					/>
				</Link>
			</div>
			{isHome && <NavigationMenuComponent />}
			{isHome && (
				<div style={{ marginRight: "20px" }}>
					<Select
						options={[
							{
								label: language === "ja" ? "日" : "Day",
								value: "day",
							},
							{
								label: language === "ja" ? "週" : "Week",
								value: "week",
							},
						]}
						defaultValue={widow}
						handleChange={handleDurationChange}
					/>
				</div>
			)}
			{isHome && (
				<Select
					options={[
						{ label: "English", value: "en" },
						{ label: "日本語", value: "ja" },
					]}
					defaultValue={language}
					handleChange={handleLanguageChange}
				/>
			)}
		</header>
	);
};
