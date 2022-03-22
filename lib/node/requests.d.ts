import { PaginatedResponse, Sermon, Broadcaster, SermonEventTypeDetail, SermonAudioNode, SeriesSortOrder, SeriesFilter, SermonSeries, Speaker, FilterOptions, HighlightedSermons } from '../models';
import { SermonsParams } from './types';
/**
 * Get a set of sermons with pagination data, when available.
 *
 * @param path The path to the endpoint you want to call (defaults to the all-purpose sermon node endpoint).
 * @param page The page number to load (defaults to 1).
 * @param pageSize The number of items per page (currently defaults to 50 if omitted).
 * @param book The book of the Bible to limit results to.
 * @param chapter The chapter of the book to limit results to.
 * @param chapterEnd If you want to query a range of chapters, the range will span from chapter to chapter_end.
 * @param verse The verse of the chapter to limit results to.
 * @param verseEnd If you want to query a range of verses, the range will span from verse to verse_end.
 * @param eventType The type of event to limit results to, if any.
 * @param searchKeyword Keywords to search by.
 * @param languageCode The language code to limit results to.
 * @param requireAudio If true, all results will have ready-to-play audio.
 * @param requireVideo If true, all results will have ready-to-play video.
 * @param series The series to limit results to (may be an ID or name).
 * @param broadcasterID The ID of the broadcaster to limit results to.
 * @param sermonIDs A set of sermon IDs to return. This option ignores most others.
 * @param speakerName The speaker name to limit results to.
 * @param year The year to limit results to (preach date, not upload date).
 * @param sortBy A sort to apply to the results. Defaults to preach date descending.
 * @param staffPick List only sermons that are SermonAudio staff picks.
 * @param featured List only sermons that were featured by the broadcaster.
 * @param listenerRecommended List only sermons that have been recommended by listeners.
 * @param includeDrafts If true, include sermons with no publish date.
 * @param includeScheduled If true, include sermons set to be published in the future.
 * @param includePublished If true, include published sermons.
 * @param highlightedSermonSort If included, use the sort order determined by the value of this parameter. If a highlighted sermon sort is included, it overrides other sort/filter options.
 * @returns A sermon list response with pagination data, if available.
 */
export declare function getSermons({ path, page, pageSize, book, chapter, chapterEnd, verse, verseEnd, eventType, searchKeyword, languageCode, requireAudio, requireVideo, series, broadcasterID, sermonIDs, speakerName, year, sortBy, highlightedSort, staffPick, featured, listenerRecommended, includeDrafts, includeScheduled, includePublished }: SermonsParams): Promise<PaginatedResponse<Sermon[]>>;
/**
 * Fetches info for a single sermon, if it exists.
 *
 * @param sermonID The ID of the sermon you want to fetch.
 * @return Sermon or null
 */
export declare function getSermon(sermonID: string): Promise<Sermon | null>;
/**
 * Fetches info for a single broadcaster, if it exists.
 *
 * @param broadcasterID The ID of the broadcaster you want to fetch.
 * @returns Broadcaster or null
 */
export declare function getBroadcaster(broadcasterID: string): Promise<Broadcaster | null>;
/**
 * Fetches a list of valid sermon event types for a broadcaster.
 *
 * @param broadcasterID You can omit this if you are using a broadcaster API key.
 * @param includeUnpublished include unpublished
 * @returns A list of sermon event type detail objects
 */
export declare function getSermonEventTypes(broadcasterID?: string | null, includeUnpublished?: boolean): Promise<SermonAudioNode<SermonEventTypeDetail[]>>;
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
export declare function getSeriesList(broadcasterID: string, page?: number, pageSize?: number | null, sortBy?: SeriesSortOrder, filterBy?: SeriesFilter): Promise<PaginatedResponse<SermonSeries[]>>;
/**
 * Fetches a single series.
 *
 * @param seriesName The name of the series.
 * @param broadcasterID The broadcaster ID that owns the series.
 * @returns A single SermonSeries, or null if series name does not exist.
 */
export declare function getSeries(seriesName: string, broadcasterID: string): Promise<SermonSeries | null>;
/**
 * Fetches a single speaker.
 *
 * @param speakerName The name of the speaker (exactly as it appears on the SA site).
 * @returns A single Speaker, or null if speaker does not exist.
 */
export declare function getSpeaker(speakerName: string): Promise<Speaker | null>;
/**
 * Fetches a list of speakers.
 *
 * @param broadcasterID The ID of the broadcaster the speakers must have preached at.
 * @param query A search query to try to locate the speaker by.
 * @param pageSize The number of results to return.
 * @returns A list of Speakers
 */
export declare function getSpeakers(broadcasterID: string, query?: string | null, pageSize?: number): Promise<Speaker[] | null>;
/**
 * Get filter options for the given broadcaster.
 *
 * @param broadcasterID The broadcaster ID you are interested in.
 * @param includeUnpublished Include unpublished.
 * @returns A filter options object containing available filters for the broadcaster or null
 */
export declare function getFilterOptions(broadcasterID: string, includeUnpublished?: boolean): Promise<FilterOptions | null>;
/**
 * Get a list of all supported sermon event types.
 */
export declare function getAllSermonEventTypes(): Promise<SermonEventTypeDetail[] | null>;
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
export declare function getSpeakersForBroadcaster(broadcasterID: string): Promise<Speaker[] | null>;
/**
 * Fetches highlighted sermons info for a broadcaster.
 *
 * Each broadcaster can set a highlighted sermon. See the
 * HighlightedAudioInputTypes enum for more documentation on the
 * audio types you can set. (A separate welcome video can also be
 * set. It is part of the Broadcaster model object.) The
 * highlighted sermon appears on the broadcaster's home page. Also,
 * a short list of sermons appears on a broadcaster's home
 * page. The sermons appear in the sort order returned in the
 * HighlightedSermons model object. API users can use this setting
 * to create a similar list by calling the getSermons() endpoint.
 *
 * @param broadcasterID The ID of the broadcaster to fetch.
 * @returns Highlighted sermons.
 */
export declare function getHighlightedSermons(broadcasterID: string): Promise<HighlightedSermons | null>;
