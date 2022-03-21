import { PaginatedResponse, Sermon, Broadcaster, SermonEventTypeDetail, SermonAudioNode, SeriesSortOrder, SeriesFilter, SermonSeries } from '../models';
import { SermonsParams } from './types';
/**
 * Get a set of sermons with pagination data, when available.
 *
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
export declare function getSeriesList(broadcasterID: string, page?: number, pageSize?: number | null, sortBy?: SeriesSortOrder, filterBy?: SeriesFilter): Promise<PaginatedResponse<SermonSeries[]>>;
