import type { Info } from "#/modules/info/schemas";

import { env } from "#/configs/env";

const serviceInfo = async (): Promise<Info> => {
    return {
        version: env.VITE_VERSION,
    };
};

export { serviceInfo };
