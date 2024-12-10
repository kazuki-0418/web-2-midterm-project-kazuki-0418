import {
	cloudflareDevProxyVitePlugin,
	vitePlugin as remix,
} from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { getLoadContext } from "./load-context";

installGlobals();

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		cloudflareDevProxyVitePlugin({
			getLoadContext,
		}),
		remix({
			future: {
				v3_singleFetch: true,
				v3_fetcherPersist: true,
				v3_lazyRouteDiscovery: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
		vanillaExtractPlugin(),
		tsconfigPaths(),
	],
});
