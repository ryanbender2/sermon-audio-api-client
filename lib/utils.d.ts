import { HighlightedSortOrders, SermonAudioNode, SermonEventType, SermonSortOption } from './models';
import { Response } from 'node-fetch';
/**
 * Get a URL for the square album art with a with and height equal to the provided size argument
 *
 * @param albumArtURLFormat albumArtURLFormat
 * @param size album art size in pixels
 * @returns URL for the square album art with a with and height equal to the provided size argument
 */
export declare function getAlbumArtUrl(albumArtURLFormat: string, size: number): string;
/**
 * Joins elements in a URL path after quoting them.
 *
 * @param elements URL path elements
 */
export declare function joinUrlPath(...elements: string[]): string;
/**
 * Get Highlighted Sort Sermon Parameters.
 * @param highlightedSort
 * @returns search params
 */
export declare function getHighlightedSortSermonParameters(highlightedSort: HighlightedSortOrders): {
    sortBy: SermonSortOption;
    listenerRecommended?: undefined;
    eventType?: undefined;
} | {
    listenerRecommended: boolean;
    sortBy: SermonSortOption;
    eventType?: undefined;
} | {
    eventType: SermonEventType;
    sortBy: SermonSortOption;
    listenerRecommended?: undefined;
};
export declare function createSearchParams({ ...urlParams }: {
    [x: string]: any;
}): URLSearchParams;
export declare function parseNode<T>(response: Response): Promise<SermonAudioNode<T>>;
