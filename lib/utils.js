"use strict";
/* Utils module for sermon audio */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNode = exports.createSearchParams = exports.getHighlightedSortSermonParameters = exports.joinUrlPath = exports.getAlbumArtUrl = void 0;
const path_1 = require("path");
const models_1 = require("./models");
/**
 * Get a URL for the square album art with a with and height equal to the provided size argument
 *
 * @param albumArtURLFormat albumArtURLFormat
 * @param size album art size in pixels
 * @returns URL for the square album art with a with and height equal to the provided size argument
 */
function getAlbumArtUrl(albumArtURLFormat, size) {
    return albumArtURLFormat.replaceAll("{size}", size.toString());
}
exports.getAlbumArtUrl = getAlbumArtUrl;
/**
 * Joins elements in a URL path after quoting them.
 *
 * @param elements URL path elements
 */
function joinUrlPath(...elements) {
    const urlEncoded = elements.map(ele => encodeURI(ele));
    return (0, path_1.join)(...urlEncoded).replaceAll('\\', '/');
}
exports.joinUrlPath = joinUrlPath;
/**
 * Get Highlighted Sort Sermon Parameters.
 * @param highlightedSort
 * @returns search params
 */
function getHighlightedSortSermonParameters(highlightedSort) {
    switch (highlightedSort) {
        case models_1.HighlightedSortOrders.ADDED:
            return { "sortBy": models_1.SermonSortOption.ADDED };
        case models_1.HighlightedSortOrders.NEWEST_PICKS:
            return { "listenerRecommended": true, "sortBy": models_1.SermonSortOption.NEWEST };
        case models_1.HighlightedSortOrders.RANDOM_PICKS:
            return { "listenerRecommended": true, "sortBy": models_1.SermonSortOption.RANDOM };
        case models_1.HighlightedSortOrders.NEWEST_CLIPS:
            return { "eventType": models_1.SermonEventType.SERMON_CLIP, "sortBy": models_1.SermonSortOption.NEWEST };
        case models_1.HighlightedSortOrders.RANDOM_CLIPS:
            return { "eventType": models_1.SermonEventType.SERMON_CLIP, "sortBy": models_1.SermonSortOption.RANDOM };
        case models_1.HighlightedSortOrders.POPULAR:
            return { "sortBy": models_1.SermonSortOption.DOWNLOADS };
        default:
            return { "sortBy": models_1.SermonSortOption.NEWEST };
    }
}
exports.getHighlightedSortSermonParameters = getHighlightedSortSermonParameters;
function createSearchParams({ ...urlParams }) {
    const params = {};
    for (const key in urlParams) {
        if (urlParams[key] !== null)
            params[key] = urlParams[key];
    }
    return new URLSearchParams(params);
}
exports.createSearchParams = createSearchParams;
async function parseNode(response) {
    if (response.ok) {
        const data = await response.json();
        return {
            nodeType: data.nodeType,
            nodeDisplayName: data.nodeDisplayName,
            results: data.results,
            totalCount: data.totalCount,
            next: data.next
        };
    }
    else {
        throw new Error(`Error parsing node response: response code ${response.status}`);
    }
}
exports.parseNode = parseNode;
