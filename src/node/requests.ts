import { OSISBook, SermonEventType, HighlightedSortOrders, SermonSortOption, PaginatedResponse, Sermon, Broadcaster, RelativeBroadcasterLocation, SermonEventTypeDetail, SermonAudioNode, SeriesSortOrder, SeriesFilter, SermonSeries, Speaker, FilterOptions } from '../models';
import { createSearchParams, getHighlightedSortSermonParameters, joinUrlPath, parseNode } from '../utils';
import { SermonsParams } from './types';
import { get, getNode } from '../api';


const URL_PATH = "node";

/**
 * Get a set of sermons with pagination data, when available.
 * 
 */
export async function getSermons({
    path = null,
    page = 1,
    pageSize = 50,
    book = null,
    chapter = null,
    chapterEnd = null,
    verse = null,
    verseEnd = null,
    eventType = null,
    searchKeyword = null,
    languageCode = null,
    requireAudio = false,
    requireVideo = false,
    series = null,
    broadcasterID = null,
    sermonIDs = null,
    speakerName = null,
    year = null,
    sortBy = null,
    highlightedSort = null,
    staffPick = false,
    featured = false,
    listenerRecommended = false,
    includeDrafts = false,
    includeScheduled = false,
    includePublished = true
}: SermonsParams): Promise<PaginatedResponse<Sermon[]>> {
    path = path || joinUrlPath(URL_PATH, 'sermons')

    if (highlightedSort) {
        const params = getHighlightedSortSermonParameters(highlightedSort)

        // Set the sortBy the default sort order for highlighted sermons.
        sortBy = SermonSortOption.NEWEST

        if (params.listenerRecommended)
            listenerRecommended = params.listenerRecommended;
        if (params.sortBy)
            sortBy = params.sortBy;
        if (params.eventType)
            eventType = params.eventType;
    }

    const searchParams = createSearchParams({
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
    })
    const node = await getNode<Sermon[]>(path, searchParams);
    return new PaginatedResponse(page, pageSize, node);
}

/**
 * Fetches info for a single sermon, if it exists.
 * 
 * @param sermonID The ID of the sermon you want to fetch.
 * @return Sermon or null
 */
export async function getSermon(sermonID: string): Promise<Sermon | null> {
    const path = joinUrlPath(URL_PATH, 'sermons', sermonID)
    const data = await get<Sermon>(path);
    if (data.sermonID === undefined)
        return null;
    return data;
}

/**
 * Fetches info for a single broadcaster, if it exists.
 * 
 * @param broadcasterID The ID of the broadcaster you want to fetch.
 * @returns Broadcaster or null
 */
export async function getBroadcaster(broadcasterID: string): Promise<Broadcaster | null> {
    const path = joinUrlPath(URL_PATH, 'broadcasters', broadcasterID)
    const data = await get<Broadcaster>(path);
    if (data.broadcasterID === undefined)
        return null;
    return data;
}

/**
 * Fetches a list of valid sermon event types for a broadcaster.
 * 
 * @param broadcasterID You can omit this if you are using a broadcaster API key.
 * @param includeUnpublished include unpublished
 * @returns A list of sermon event type detail objects
 */
export async function getSermonEventTypes(broadcasterID: string | null = null, includeUnpublished: boolean = false): Promise<SermonAudioNode<SermonEventTypeDetail[]>> {
    const path = joinUrlPath(URL_PATH, 'filter_options', 'sermon_event_types')
    const searchParams = createSearchParams({
        "broadcaster_id": broadcasterID,
        "includeUnpublished": includeUnpublished
    })
    return await getNode<SermonEventTypeDetail[]>(path, searchParams);
}

/**
 * Fetches a sermon series list for a broadcaster.
 * 
 * @param broadcasterID You can omit this if you are using a broadcaster API key.
 * @param page The page number to load (defaults to 1).
 * @param pageSize The number of items per page (defaults to no limit).
 * @param sortBy A sort to apply to the results. Defaults to last updated.
 * @param filterBy A filter to apply to the results. Defaults to all.
 * @returns A paginated response, with the results being SermonSeries objects.
 */
export async function getSeriesList(
        broadcasterID: string,
        page: number = 1,
        pageSize: number | null = null,
        sortBy: SeriesSortOrder = SeriesSortOrder.LAST_UPDATED,
        filterBy: SeriesFilter = SeriesFilter.DEFAULT): Promise<PaginatedResponse<SermonSeries[]>> {
    const path = joinUrlPath(URL_PATH, 'broadcasters', broadcasterID, 'series')
    const searchParams = createSearchParams({
        "page": page,
        "pageSize": pageSize,
        "sort_by": sortBy,
        "filterBy": filterBy
    })
    const node = await getNode<SermonSeries[]>(path, searchParams);
    return new PaginatedResponse(page, pageSize ? pageSize : 0, node);
}

/**
 * Fetches a single series.
 * 
 * @param seriesName The name of the series.
 * @param broadcasterID The broadcaster ID that owns the series.
 * @returns A single SermonSeries, or null if series name does not exist.
 */
export async function getSeries(seriesName: string, broadcasterID: string): Promise<SermonSeries | null> {
    const path = joinUrlPath(URL_PATH, 'broadcasters', broadcasterID, 'series', seriesName)
    const data = await get<SermonSeries>(path);
    if (data.broadcasterID === undefined)
        return null;
    return data;
}

/**
 * Fetches a single speaker.
 * 
 * @param speakerName The name of the speaker (exactly as it appears on the SA site).
 * @returns A single Speaker, or null if speaker does not exist.
 */
export async function getSpeaker(speakerName: string): Promise<Speaker | null> {
    const path = joinUrlPath(URL_PATH, 'speakers', speakerName)
    const data = await get<Speaker>(path);
    if (data.type === undefined)
        return null;
    return data;
}

/**
 * Fetches a list of speakers.
 * 
 * @param broadcasterID The ID of the broadcaster the speakers must have preached at.
 * @param query A search query to try to locate the speaker by.
 * @param pageSize The number of results to return.
 * @returns A list of Speakers
 */
export async function getSpeakers(broadcasterID: string, query: string | null = null, pageSize: number = 25): Promise<Speaker[] | null> {
    const path = joinUrlPath(URL_PATH, 'speakers')
    const searchParams = createSearchParams({
        "broadcasterID": broadcasterID,
        "query": query,
        "pageSize": pageSize
    })
    const node = await get<SermonAudioNode<Speaker[]>>(path, searchParams);
    return node.results;
}

/**
 * Get filter options for the given broadcaster.
 * 
 * @param broadcasterID The broadcaster ID you are interested in.
 * @param includeUnpublished Include unpublished.
 * @returns A filter options object containing available filters for the broadcaster or null
 */
export async function getFilterOptions(broadcasterID: string, includeUnpublished: boolean = false): Promise<FilterOptions | null> {
    const path = joinUrlPath(URL_PATH, 'broadcasters', broadcasterID, 'filter_options');
    const searchParams = createSearchParams({
        "includeUnpublished": includeUnpublished
    });
    return await get<FilterOptions>(path, searchParams);
}

/**
 * Get a list of all supported sermon event types.
 */
export async function getAllSermonEventTypes(): Promise<SermonEventTypeDetail[] | null> {
    const path = joinUrlPath(URL_PATH, 'filter_options', 'sermon_event_types');
    const node = await get<SermonAudioNode<SermonEventTypeDetail[]>>(path);
    return node.results;
}

/**
 * Fetches a list of all speakers for a broadcaster.
 * 
 * In contrast to getSpeakers(), which searches across multiple
 * broadcasters, this returns a list of all speakers associated
 * with the given broadcaster.
 *
 * @param broadcasterID The ID of the broadcaster.
 * @return A list of Speakers.
 */
export async function getSpeakersForBroadcaster(broadcasterID: string): Promise<Speaker[] | null> {
    const path = joinUrlPath(URL_PATH, 'broadcasters', broadcasterID, 'speakers');
    const searchParams = createSearchParams({
        "broadcasterID": broadcasterID
    });
    const node = await get<SermonAudioNode<Speaker[]>>(path, searchParams);
    return node.results;
}