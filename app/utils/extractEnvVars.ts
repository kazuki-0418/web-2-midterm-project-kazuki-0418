import type { AppLoadContext } from "@remix-run/cloudflare";

type EnvVars = {
    BASE_URL: string;
    API_KEY: string;
};

export const extractEnvVars = (context:AppLoadContext):EnvVars => {
    return {
        BASE_URL: context.cloudflare.env.BASE_URL as string,
        API_KEY: context.cloudflare.env.API_KEY as string,
    }
}   