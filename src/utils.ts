/* Utils module for sermon audio */

import { join } from 'path';
import { HighlightedSortOrders, SermonAudioNode, SermonEventType, SermonSortOption } from './models';
import { Response } from 'node-fetch';

/**
 * Get a URL for the square album art with a with and height equal to the provided size argument
 * 
 * @param albumArtURLFormat albumArtURLFormat
 * @param size album art size in pixels
 * @returns URL for the square album art with a with and height equal to the provided size argument
 */
export function getAlbumArtUrl(albumArtURLFormat: string, size: number) {
    return albumArtURLFormat.replace("{size}", size.toString());
}

/**
 * Joins elements in a URL path after quoting them.
 * 
 * @param elements URL path elements 
 */
export function joinUrlPath(...elements: string[]) {
    const urlEncoded: string[] = elements.map(ele => encodeURI(ele));
    return join(...urlEncoded).replace('\\', '/');
}

/**
 * Get Highlighted Sort Sermon Parameters.
 * @param highlightedSort 
 * @returns search params
 */
export function getHighlightedSortSermonParameters(highlightedSort: string) {
    switch (highlightedSort) {
        case HighlightedSortOrders.ADDED:
            return {"sortBy": SermonSortOption.ADDED};
        case HighlightedSortOrders.NEWEST_PICKS:
            return {"listenerRecommended": true, "sortBy": SermonSortOption.NEWEST};
        case HighlightedSortOrders.RANDOM_PICKS:
            return {"listenerRecommended": true, "sortBy": SermonSortOption.RANDOM};
        case HighlightedSortOrders.NEWEST_CLIPS:
            return {"eventType": SermonEventType.SERMON_CLIP, "sortBy": SermonSortOption.NEWEST}
        case HighlightedSortOrders.RANDOM_CLIPS:
            return {"eventType": SermonEventType.SERMON_CLIP, "sortBy": SermonSortOption.RANDOM};
        case HighlightedSortOrders.POPULAR:
            return {"sortBy": SermonSortOption.DOWNLOADS};
        default:
            return {"sortBy": SermonSortOption.NEWEST}
    }
}

export function createSearchParams({ ...urlParams }) {
    const params: { [key: string]: any } = {};
    for (const key in urlParams) {
        if (urlParams[key] !== null)
            params[key] = urlParams[key]
    }
    return new URLSearchParams(params);
}

type NodeResponse<T> = {
    nodeType: string,
    nodeDisplayName: string,
    results: T,
    totalCount: number,
    next: string
}

export async function parseNode<T>(response: Response): Promise<SermonAudioNode<T>> {
    if (response.ok) {
        const data: NodeResponse<T> = await response.json()
        return {
            nodeType: data.nodeType,
            nodeDisplayName: data.nodeDisplayName,
            results: data.results,
            totalCount: data.totalCount,
            next: data.next
        }
    } else {
        throw new Error(`Error parsing node response: response code ${response.status}`);
    }
}