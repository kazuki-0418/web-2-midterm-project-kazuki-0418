import { createRequestHandler } from "@remix-run/express";
import express from "express";


const viteDevServer =
	process.env.NODE_ENV === "production"
		? undefined
		: await import("vite").then((vite) =>
				vite.createServer({
					server: { middlewareMode: true },
				}),
			);

const app = express();

// アセットリクエストを処理
if (viteDevServer) {
	app.use(viteDevServer.middlewares);
} else {
	app.use(
		"/assets",
		express.static("build/client/assets", {
			immutable: true,
			maxAge: "1y",
		}),
	);
}
app.use(express.static("build/client", { maxAge: "1h" }));

// SSRリクエストを処理
app.all(
	"*",
	createRequestHandler({
		build: viteDevServer
			? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
			: await import("./build/server/index.js"),
	}),
);

const port = 8788;
app.listen(port, () => console.log(`http://localhost:${port}`));
