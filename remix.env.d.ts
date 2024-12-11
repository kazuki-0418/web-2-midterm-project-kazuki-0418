import type { AppLoadContext as OriginalAppLoadContext } from "@remix-run/server-runtime";
declare module "@remix-run/server-runtime" {
  export interface AppLoadContext extends OriginalAppLoadContext {
    env: {
      BASE_URL: string;
      API_KEY: string;
    };
  }
}