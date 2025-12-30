import type { ConfigEnv, UserConfig } from "vite";

import build from "@hono/vite-build/node";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const PORT_DEV: number = 3001;

const PORT_PRD: number = 3000;

export default defineConfig((config: ConfigEnv): UserConfig => {
    const port: number = config.mode === "development" ? PORT_DEV : PORT_PRD;

    const entry: string = "./src/index.ts";

    return {
        server: {
            port,
        },
        build: {
            copyPublicDir: false,
        },
        plugins: [
            tsconfigPaths(),
            devServer({
                entry,
                adapter,
            }),
            build({
                port,
                entry,
                outputDir: "./dist",
                minify: false,
                emptyOutDir: true,
            }),
        ],
    };
});
