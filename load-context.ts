import type { AppLoadContext } from "@remix-run/cloudflare";
import type { PlatformProxy } from "wrangler";

// `wrangler.toml`を使ってバインディングを設定する場合、
// `wrangler types`がそれらのバインディングの型を
// グローバルな`Env`インターフェイスに生成します。
// `wrangler.toml`が存在しない場合でもタイプチェックが通るよう、
// 空のインターフェイスを定義しています。
type Env = Record<string, unknown>;

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
	interface AppLoadContext {
		cloudflare: Cloudflare;
		extra: string; // 拡張
	}
}

type GetLoadContext = (args: {
	request: Request;
	context: { cloudflare: Cloudflare }; // 拡張前のロードコンテキスト
}) => AppLoadContext;

// Vite、Wrangler、Cloudflare Pagesで互換性のある共有実装
export const getLoadContext: GetLoadContext = ({ context }) => {
	return {
		...context,
		extra: "stuff",
	};
};
