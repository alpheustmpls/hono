import { createEnv } from "envow";
import { viteServer } from "envow/presets/zod";
import { z } from "zod";

const env = createEnv({
    target: "server",
    runtimeEnv: {
        ...process.env,
        ...import.meta.env,
    },
    extends: [
        viteServer,
    ],
    define: {
        VITE_VERSION: z.string().min(5),
    },
});

type Env = typeof env;

export type { Env };
export { env };
