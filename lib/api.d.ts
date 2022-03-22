export declare function request(path: string, searchParams?: URLSearchParams): Promise<import("node-fetch").Response>;
export declare function getNode<T>(path: string, searchParams?: URLSearchParams): Promise<import("./models").SermonAudioNode<T>>;
export declare function get<T>(path: string, searchParams?: URLSearchParams): Promise<T>;
