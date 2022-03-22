/**
 * The path module provides utilities for working with file and directory paths. It can be accessed using:
 */
declare module 'path' {
    /**
     * The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
     * Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.
     * @param paths A sequence of path segments
     */
    export function join(...paths: string[]): string;
}

