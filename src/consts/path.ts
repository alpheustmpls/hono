import * as Path from "node:path";

import { IS_DEV } from "#/consts/env";

/**
 * The path to the public directory.
 */
const PATH_PUBLIC: string = IS_DEV
    ? Path.join(process.cwd(), "public")
    : Path.join(import.meta.dirname, "public");

export { PATH_PUBLIC };
