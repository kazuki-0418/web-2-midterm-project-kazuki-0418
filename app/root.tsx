import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import "./css/global.css";
import { json,type LoaderFunctionArgs } from "@remix-run/cloudflare";

export async function loader({context}: LoaderFunctionArgs) {
	return json({
	  env: {
		BASE_URL: context.cloudflare.env.BASE_URL,
		API_KEY: context.cloudflare.env.API_KEY,

	  }
	})
  }

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
