import type { Format, Partial } from "ts-vista";

import { z } from "zod";

/**
 * Default dataless JSON response schema.
 */
const jsonResponseSchema = z.object({
    success: z.literal(true),
    data: z.null(),
    errors: z.array(z.never()),
});

/**
 * Function to create a JSON success response schema with specified data type.
 */
const createJsonSuccessResponseSchema = (data: z.ZodType) => {
    return z.object({
        success: z.literal(true),
        data,
        errors: z.array(z.never()),
    });
};

/**
 * Options for creating a JSON response error schema.
 */
type CompleteCreateJsonResponseErrorSchemaOptions = {
    /**
     * Type for error code.
     *
     * By default, it is `z.string()`.
     */
    code: z.ZodType;
    /**
     * Type for error path.
     *
     * By default, it is `z.array(z.never())`.
     */
    path: z.ZodType;
    /**
     * Type for error message.
     *
     * By default, it is `z.never()`.
     */
    message: z.ZodType;
};

/**
 * Options for creating a JSON response error schema.
 */
type CreateJsonResponseErrorSchemaOptions = Format<
    Partial<CompleteCreateJsonResponseErrorSchemaOptions>
>;

/**
 * Function to create a JSON response error schema
 * with specified code, path and message types.
 */
const createJsonResponseErrorSchema = ({
    code = z.string(),
    path = z.array(z.never()),
    message = z.never(),
}: CreateJsonResponseErrorSchemaOptions) => {
    return z.object({
        code,
        path,
        message,
    });
};

/**
 * Function to create a JSON failure response schema with specified error type.
 */
const createJsonFailureResponseSchema = (error: z.ZodType) => {
    return z.object({
        success: z.literal(false),
        data: z.null(),
        errors: z.array(error),
    });
};

export type { CreateJsonResponseErrorSchemaOptions };
export {
    createJsonFailureResponseSchema,
    createJsonResponseErrorSchema,
    createJsonSuccessResponseSchema,
    jsonResponseSchema,
};
