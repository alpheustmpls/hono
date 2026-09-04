import * as Path from "node:path";

import { srvkit } from "@srvkit/vite/plugin";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
    resolve: {
        tsconfigPaths: true,
    },
    plugins: [
        process.env.DEV_HTTPS === "1" &&
            mkcert({
                savePath: Path.resolve(process.cwd(), "node_modules", ".cert"),
            }),
        srvkit(),
    ],
});
