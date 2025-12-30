import * as Path from "node:path";

/**
 * The current working directory.
 */
const CWD: string = process.cwd();

/**
 * The path to the public directory.
 */
const PATH_PUBLIC: string = Path.join(CWD, "public");

export { PATH_PUBLIC };
