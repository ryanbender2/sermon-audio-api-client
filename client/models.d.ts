export declare const GENERIC_SPEAKER_NAMES: string[];
/**
 * The base node object, which encapsulates all node API responses
 */
export declare type SermonAudioNode<T> = {
    nodeType: string;
    nodeDisplayName: string;
    results: T | null;
    totalCount: number | null;
    next: string | null;
};
/**
 * Broadcaster type.
 */
export declare type Broadcaster = {
    broadcasterID: string;
    idCode: string;
    serviceTimesArePreformatted: boolean;
    serviceTimes: string | null;
    denomination: string;
    address: string | null;
    displayName: string;
    shortName: string;
    location: string;
    latitude: number | null;
    longitude: number | null;
    imageURL: string;
    albumArtURLFormat: string;
    minister: string | null;
    phone: string | null;
    listenLineNumber: string | null;
    homePageURL: string | null;
    bibleVersion: string | null;
    facebookUsername: string | null;
    twitterUsername: string | null;
    aboutUs: string | null;
    canWebcast: boolean;
    webcastInProgress: boolean;
    vacantPulpit: boolean;
    welcomeVideoID: string | null;
    countryISOCode: string | null;
    languageCode: string | null;
    rssFeedURL: string;
    rssFeedAtomURL: string;
};
/**
 * EventType type.
 */
export declare type EventType = {
    type: string;
    description: string;
};
export declare enum MediaType {
    MP3 = "mp3",
    AAC = "aac",
    MP4 = "mp4",
    PDF = "pdf",
    WORD = "doc",
    TRANSCRIPT = "transcript",
    JPEG = "jpg",
    ORIGINAL_AUDIO = "orig-audio",
    ORIGINAL_VIDEO = "orig-video"
}
export declare enum MediaClass {
    AUDIO = "audio",
    VIDEO = "video",
    TEXT = "text",
    ALL = "all"
}
/**
 * Media type.
 */
export declare type Media = {
    mediaType: MediaType;
    isLive: boolean;
    isAdaptive: boolean;
    streamURL: string | null;
    eventStreamURL: string | null;
    downloadURL: string | null;
    bitrate: number | null;
    fileSizeBytes: number | null;
    duration: number | null;
    audioCodec: string;
    videoCodec: string;
    thumbnailImageURL: string | null;
    rawURL: string | null;
};
/**
 * MediaSet type.
 */
export declare type MediaSet = {
    audio: Media[];
    video: Media[];
    text: Media[];
};
/**
 * Sermon type.
 */
export declare type Sermon = {
    type: string;
    sermonID: string;
    broadcaster: Broadcaster;
    speaker: Speaker;
    displayTitle: string;
    fullTitle: string;
    subtitle: string | null;
    preachDate: Date;
    pickDate: Date | null;
    languageCode: string;
    bibleText: string | null;
    moreInfoText: string | null;
    eventType: string;
    downloadCount: string;
    media: MediaSet;
};
/**
 * Speaker type.
 */
export declare type Speaker = {
    type: string;
    displayName: string;
    sortName: string;
    portraitURL: string;
    albumArtURL: string;
    roundedThumbnailImageURL: string;
    bio: string | null;
    mostRecentPreachDate: Date | null;
    sermonCount: number;
};
export declare class PaginatedResponse<T> {
    page: number;
    pageSize: number;
    nextURL: string | null;
    totalCount: number | null;
    results: T | null;
    constructor(page: number, pageSize: number, response: SermonAudioNode<T>);
}
export declare enum OSISBook {
    GEN = "Genesis",
    EXO = "Exodus",
    LEV = "Leviticus",
    NUM = "Numbers",
    DEU = "Deuteronomy",
    JOS = "Joshua",
    JDG = "Judges",
    RUT = "Ruth",
    '1SA' = "1 Samuel",
    '2SA' = "2 Samuel",
    '1KI' = "1 Kings",
    '2KI' = "2 Kings",
    '1CH' = "1 Chronicles",
    '2CH' = "2 Chronicles",
    EZR = "Ezra",
    NEH = "Nehemiah",
    EST = "Esther",
    JOB = "Job",
    PSA = "Psalm",
    PRO = "Proverbs",
    ECC = "Ecclesiastes",
    SNG = "Song of Solomon",
    ISA = "Isaiah",
    JER = "Jeremiah",
    LAM = "Lamentations",
    EZK = "Ezekiel",
    DAN = "Daniel",
    HOS = "Hosea",
    JOL = "Joel",
    AMO = "Amos",
    OBA = "Obadiah",
    JON = "Jonah",
    MIC = "Micah",
    NAM = "Nahum",
    HAB = "Habakkuk",
    ZEP = "Zephaniah",
    HAG = "Haggai",
    ZEC = "Zechariah",
    MAL = "Malachi",
    MAT = "Matthew",
    MRK = "Mark",
    LUK = "Luke",
    JHN = "John",
    ACT = "Acts",
    ROM = "Romans",
    '1CO' = "1 Corinthians",
    '2CO' = "2 Corinthians",
    GAL = "Galatians",
    EPH = "Ephesians",
    PHP = "Philippians",
    COL = "Colossians",
    '1TH' = "1 Thessalonians",
    '2TH' = "2 Thessalonians",
    '1TI' = "1 Timothy",
    '2TI' = "2 Timothy",
    TIT = "Titus",
    PHM = "Philemon",
    HEB = "Hebrews",
    JAS = "James",
    '1PE' = "1 Peter",
    '2PE' = "2 Peter",
    '1JN' = "1 John",
    '2JN' = "2 John",
    '3JN' = "3 John",
    JUD = "Jude",
    REV = "Revelation"
}
export declare enum SermonEventType {
    AUDIO_BOOK = "Audio Book",
    BIBLE_STUDY = "Bible Study",
    CAMP_MEETING = "Camp Meeting",
    CHAPEL_SERVICE = "Chapel Service",
    CHILDREN = "Children",
    CLASSIC_AUDIO = "Classic Audio",
    CONFERENCE = "Conference",
    CURRENT_EVENTS = "Current Events",
    DEBATE = "Debate",
    DEVOTIONAL = "Devotional",
    FUNERAL_SERVICE = "Funeral Service",
    MIDWEEK_SERVICE = "Midweek Service",
    PODCAST = "Podcast",
    PRAYER_MEETING = "Prayer Meeting",
    Q_AND_A = "Question & Answer",
    RADIO_BROADCAST = "Radio Broadcast",
    SERMON_CLIP = "Sermon Clip",
    SPECIAL_MEETING = "Special Meeting",
    SUNDAY_AFTERNOON = "Sunday Afternoon",
    SUNDAY_AM = "Sunday - AM",
    SUNDAY_PM = "Sunday - PM",
    SUNDAY_SCHOOL = "Sunday School",
    SUNDAY_SERVICE = "Sunday Service",
    TEACHING = "Teaching",
    TESTIMONY = "Testimony",
    TV_BROADCAST = "TV Broadcast",
    VIDEO_DVD = "Video DVD",
    WEDDING = "Wedding",
    YOUTH = "Youth"
}
export declare enum SermonSortOption {
    DOWNLOADS = "downloads",
    EVENT = "event",
    LANGUAGE = "language",
    LAST_PLAYED = "lastplayed",
    NEWEST = "newest",
    NEWEST_PUBLISHED = "newest-published",
    OLDEST = "oldest",
    PICK_DATE = "pickdate",
    SERIES = "series",
    SPEAKER = "speaker",
    UPDATED = "updated",
    RANDOM = "random",
    ADDED = "added",
    TITLE = "title"
}
export declare enum HighlightedSortOrders {
    PREACHED = "preached",
    POPULAR = "popular",
    ADDED = "added",
    NEWEST_PICKS = "picklistnewest",
    RANDOM_PICKS = "picklistrandom",
    NEWEST_CLIPS = "clipsnewest",
    RANDOM_CLIPS = "clipsrandom",
    DEFAULT = "added"
}
export declare type RelativeBroadcasterLocation = {
    broadcaster: Broadcaster;
    meters: number;
};
export declare type SermonEventTypeDetail = {
    type: string;
    description: string;
    displayEvent_type: string;
    number_of_sermons: number;
    roku_image_url: string;
    fire_tv_image_url: string;
};
export declare enum SeriesPodcastLinkType {
    TUNEIN = "tunein",
    APPLE = "apple",
    GOOGLE = "google-play",
    SPOTIFY = "spotify",
    STITCHER = "stitcher",
    OTHER = "other"
}
export declare enum SeriesFilter {
    DEFAULT = "all",
    PODCAST_ENABLED = "podcast-enabled",
    PODCAST_DISABLED = "podcast-disabled"
}
export declare enum SeriesSortOrder {
    LAST_UPDATED = "last_updated",
    NEWEST_SERMON_CREATE_DATE = "newest_sermon_create_date",
    TITLE = "title",
    SERMON_COUNT_HIGHEST = "sermon_count_highest",
    SERMON_COUNT_LOWEST = "sermon_count_lowest"
}
export declare type SermonSeriesFeedLink = {
    feedLinkID: string | null;
    seriesID: string | null;
    podcastType: SeriesPodcastLinkType | null;
    label: string | null;
    link: string | null;
};
export declare type SermonSeries = {
    seriesID: number | null;
    title: string | null;
    broadcasterID: string | null;
    latest: string | null;
    earliest: string | null;
    updated: string | null;
    count: number;
    description: string | null;
    podcastEnabled: boolean;
    podcastSpeaker: string | null;
    image: string | null;
    imageResizable: boolean;
    rssURL: string | null;
    rssAtomURL: string | null;
    feedLinks: SermonSeriesFeedLink[] | null;
};
