import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import "./css/global.css";

export default function App() {
	return (
		<html lang={"ja"}>
			<head>
				<meta charSet="utf-8" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<Scripts />
			</body>
		</html>
	);
}
