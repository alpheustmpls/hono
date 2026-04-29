import * as Path from "node:path";

import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitend } from "vitend/vite";

export default defineConfig({
    plugins: [
        process.env.DEV_HTTPS === "1" &&
            mkcert({
                savePath: Path.resolve(process.cwd(), "node_modules", ".cert"),
            }),
        tsconfigPaths(),
        vitend(),
    ],
});
