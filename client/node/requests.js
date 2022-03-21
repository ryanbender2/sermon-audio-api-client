"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeriesList = exports.getSermonEventTypes = exports.getBroadcaster = exports.getSermon = exports.getSermons = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
const api_1 = require("../api");
const URL_PATH = "node";
/**
 * Get a set of sermons with pagination data, when available.
 *
 */
async function getSermons({ path = null, page = 1, pageSize = 50, book = null, chapter = null, chapterEnd = null, verse = null, verseEnd = null, eventType = null, searchKeyword = null, languageCode = null, requireAudio = false, requireVideo = false, series = null, broadcasterID = null, sermonIDs = null, speakerName = null, year = null, sortBy = null, highlightedSort = null, staffPick = false, featured = false, listenerRecommended = false, includeDrafts = false, includeScheduled = false, includePublished = true }) {
    path = path || (0, utils_1.joinUrlPath)(URL_PATH, 'sermons');
    if (highlightedSort) {
        const params = (0, utils_1.getHighlightedSortSermonParameters)(highlightedSort);
        // Set the sortBy the the default sort order for highlighted sermons.
        sortBy = models_1.SermonSortOption.NEWEST;
        if (params.listenerRecommended)
            listenerRecommended = params.listenerRecommended;
        if (params.sortBy)
            sortBy = params.sortBy;
        if (params.eventType)
            eventType = params.eventType;
    }
    const searchParams = (0, utils_1.createSearchParams)({
        "page": page,
        "pageSize": pageSize,
        "book": book,
        "chapter": chapter,
        "chapterEnd": chapterEnd,
        "verse": verse,
        "verseEnd": verseEnd,
        "eventType": eventType,
        "searchKeyword": searchKeyword,
        "languageCode": languageCode,
        "requireAudio": requireAudio,
        "requireVideo": requireVideo,
        "series": series,
        "broadcasterID": broadcasterID,
        "sermonIDs": sermonIDs ? sermonIDs.join(',') : null,
        "speakerName": speakerName,
        "year": year,
        "sortBy": sortBy,
        "staffPick": staffPick,
        "featured": featured,
        "listenerRecommended": listenerRecommended,
        "includeDrafts": includeDrafts,
        "includeScheduled": includeScheduled,
        "includePublished": includePublished
    });
    const node = await (0, api_1.getNode)(path, searchParams);
    return new models_1.PaginatedResponse(page, pageSize, node);
}
exports.getSermons = getSermons;
/**
 * Fetches info for a single sermon, if it exists.
 *
 * @param sermonID The ID of the sermon you want to fetch.
 * @return Sermon or null
 */
async function getSermon(sermonID) {
    const path = (0, utils_1.joinUrlPath)(URL_PATH, 'sermons', sermonID);
    const data = await (0, api_1.get)(path);
    if (data.sermonID === undefined)
        return null;
    return data;
}
exports.getSermon = getSermon;
/**
 * Fetches info for a single broadcaster, if it exists.
 *
 * @param broadcasterID The ID of the broadcaster you want to fetch.
 * @returns Broadcaster or null
 */
async function getBroadcaster(broadcasterID) {
    const path = (0, utils_1.joinUrlPath)(URL_PATH, 'broadcasters', broadcasterID);
    const data = await (0, api_1.get)(path);
    if (data.broadcasterID === undefined)
        return null;
    return data;
}
exports.getBroadcaster = getBroadcaster;
/**
 * Fetches a list of valid sermon event types for a broadcaster.
 *
 * @param broadcasterID You can omit this if you are using a broadcaster API key.
 * @param includeUnpublished include unpublished
 * @returns A list of sermon event type detail objects
 */
async function getSermonEventTypes(broadcasterID = null, includeUnpublished = false) {
    const path = (0, utils_1.joinUrlPath)(URL_PATH, 'filter_options', 'sermon_event_types');
    const searchParams = (0, utils_1.createSearchParams)({
        "broadcaster_id": broadcasterID,
        "includeUnpublished": includeUnpublished
    });
    return await (0, api_1.getNode)(path, searchParams);
}
exports.getSermonEventTypes = getSermonEventTypes;
async function getSeriesList(broadcasterID, page = 1, pageSize = null, sortBy = models_1.SeriesSortOrder.LAST_UPDATED, filterBy = models_1.SeriesFilter.DEFAULT) {
    const path = (0, utils_1.joinUrlPath)(URL_PATH, 'broadcasters', broadcasterID, 'series');
    const searchParams = (0, utils_1.createSearchParams)({
        "page": page,
        "pageSize": pageSize,
        "sort_by": sortBy,
        "filterBy": filterBy
    });
    const node = await (0, api_1.getNode)(path, searchParams);
    return new models_1.PaginatedResponse(page, pageSize ? pageSize : 0, node);
}
exports.getSeriesList = getSeriesList;
