"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriesSortOrder = exports.SeriesFilter = exports.SeriesPodcastLinkType = exports.HighlightedSortOrders = exports.SermonSortOption = exports.SermonEventType = exports.OSISBook = exports.PaginatedResponse = exports.MediaClass = exports.MediaType = exports.GENERIC_SPEAKER_NAMES = void 0;
exports.GENERIC_SPEAKER_NAMES = ["Various Speakers", "Unknown Speaker"];
var MediaType;
(function (MediaType) {
    MediaType["MP3"] = "mp3";
    MediaType["AAC"] = "aac";
    MediaType["MP4"] = "mp4";
    MediaType["PDF"] = "pdf";
    MediaType["WORD"] = "doc";
    MediaType["TRANSCRIPT"] = "transcript";
    MediaType["JPEG"] = "jpg";
    MediaType["ORIGINAL_AUDIO"] = "orig-audio";
    MediaType["ORIGINAL_VIDEO"] = "orig-video";
})(MediaType = exports.MediaType || (exports.MediaType = {}));
var MediaClass;
(function (MediaClass) {
    MediaClass["AUDIO"] = "audio";
    MediaClass["VIDEO"] = "video";
    MediaClass["TEXT"] = "text";
    MediaClass["ALL"] = "all";
})(MediaClass = exports.MediaClass || (exports.MediaClass = {}));
class PaginatedResponse {
    page;
    pageSize;
    nextURL;
    totalCount;
    results;
    constructor(page, pageSize, response) {
        this.page = page;
        this.pageSize = pageSize;
        this.nextURL = response.next;
        this.totalCount = response.totalCount;
        this.results = response.results;
    }
}
exports.PaginatedResponse = PaginatedResponse;
var OSISBook;
(function (OSISBook) {
    OSISBook["GEN"] = "Genesis";
    OSISBook["EXO"] = "Exodus";
    OSISBook["LEV"] = "Leviticus";
    OSISBook["NUM"] = "Numbers";
    OSISBook["DEU"] = "Deuteronomy";
    OSISBook["JOS"] = "Joshua";
    OSISBook["JDG"] = "Judges";
    OSISBook["RUT"] = "Ruth";
    OSISBook["1SA"] = "1 Samuel";
    OSISBook["2SA"] = "2 Samuel";
    OSISBook["1KI"] = "1 Kings";
    OSISBook["2KI"] = "2 Kings";
    OSISBook["1CH"] = "1 Chronicles";
    OSISBook["2CH"] = "2 Chronicles";
    OSISBook["EZR"] = "Ezra";
    OSISBook["NEH"] = "Nehemiah";
    OSISBook["EST"] = "Esther";
    OSISBook["JOB"] = "Job";
    OSISBook["PSA"] = "Psalm";
    OSISBook["PRO"] = "Proverbs";
    OSISBook["ECC"] = "Ecclesiastes";
    OSISBook["SNG"] = "Song of Solomon";
    OSISBook["ISA"] = "Isaiah";
    OSISBook["JER"] = "Jeremiah";
    OSISBook["LAM"] = "Lamentations";
    OSISBook["EZK"] = "Ezekiel";
    OSISBook["DAN"] = "Daniel";
    OSISBook["HOS"] = "Hosea";
    OSISBook["JOL"] = "Joel";
    OSISBook["AMO"] = "Amos";
    OSISBook["OBA"] = "Obadiah";
    OSISBook["JON"] = "Jonah";
    OSISBook["MIC"] = "Micah";
    OSISBook["NAM"] = "Nahum";
    OSISBook["HAB"] = "Habakkuk";
    OSISBook["ZEP"] = "Zephaniah";
    OSISBook["HAG"] = "Haggai";
    OSISBook["ZEC"] = "Zechariah";
    OSISBook["MAL"] = "Malachi";
    OSISBook["MAT"] = "Matthew";
    OSISBook["MRK"] = "Mark";
    OSISBook["LUK"] = "Luke";
    OSISBook["JHN"] = "John";
    OSISBook["ACT"] = "Acts";
    OSISBook["ROM"] = "Romans";
    OSISBook["1CO"] = "1 Corinthians";
    OSISBook["2CO"] = "2 Corinthians";
    OSISBook["GAL"] = "Galatians";
    OSISBook["EPH"] = "Ephesians";
    OSISBook["PHP"] = "Philippians";
    OSISBook["COL"] = "Colossians";
    OSISBook["1TH"] = "1 Thessalonians";
    OSISBook["2TH"] = "2 Thessalonians";
    OSISBook["1TI"] = "1 Timothy";
    OSISBook["2TI"] = "2 Timothy";
    OSISBook["TIT"] = "Titus";
    OSISBook["PHM"] = "Philemon";
    OSISBook["HEB"] = "Hebrews";
    OSISBook["JAS"] = "James";
    OSISBook["1PE"] = "1 Peter";
    OSISBook["2PE"] = "2 Peter";
    OSISBook["1JN"] = "1 John";
    OSISBook["2JN"] = "2 John";
    OSISBook["3JN"] = "3 John";
    OSISBook["JUD"] = "Jude";
    OSISBook["REV"] = "Revelation";
})(OSISBook = exports.OSISBook || (exports.OSISBook = {}));
var SermonEventType;
(function (SermonEventType) {
    SermonEventType["AUDIO_BOOK"] = "Audio Book";
    SermonEventType["BIBLE_STUDY"] = "Bible Study";
    SermonEventType["CAMP_MEETING"] = "Camp Meeting";
    SermonEventType["CHAPEL_SERVICE"] = "Chapel Service";
    SermonEventType["CHILDREN"] = "Children";
    SermonEventType["CLASSIC_AUDIO"] = "Classic Audio";
    SermonEventType["CONFERENCE"] = "Conference";
    SermonEventType["CURRENT_EVENTS"] = "Current Events";
    SermonEventType["DEBATE"] = "Debate";
    SermonEventType["DEVOTIONAL"] = "Devotional";
    SermonEventType["FUNERAL_SERVICE"] = "Funeral Service";
    SermonEventType["MIDWEEK_SERVICE"] = "Midweek Service";
    SermonEventType["PODCAST"] = "Podcast";
    SermonEventType["PRAYER_MEETING"] = "Prayer Meeting";
    SermonEventType["Q_AND_A"] = "Question & Answer";
    SermonEventType["RADIO_BROADCAST"] = "Radio Broadcast";
    SermonEventType["SERMON_CLIP"] = "Sermon Clip";
    SermonEventType["SPECIAL_MEETING"] = "Special Meeting";
    SermonEventType["SUNDAY_AFTERNOON"] = "Sunday Afternoon";
    SermonEventType["SUNDAY_AM"] = "Sunday - AM";
    SermonEventType["SUNDAY_PM"] = "Sunday - PM";
    SermonEventType["SUNDAY_SCHOOL"] = "Sunday School";
    SermonEventType["SUNDAY_SERVICE"] = "Sunday Service";
    SermonEventType["TEACHING"] = "Teaching";
    SermonEventType["TESTIMONY"] = "Testimony";
    SermonEventType["TV_BROADCAST"] = "TV Broadcast";
    SermonEventType["VIDEO_DVD"] = "Video DVD";
    SermonEventType["WEDDING"] = "Wedding";
    SermonEventType["YOUTH"] = "Youth";
})(SermonEventType = exports.SermonEventType || (exports.SermonEventType = {}));
var SermonSortOption;
(function (SermonSortOption) {
    SermonSortOption["DOWNLOADS"] = "downloads";
    SermonSortOption["EVENT"] = "event";
    SermonSortOption["LANGUAGE"] = "language";
    SermonSortOption["LAST_PLAYED"] = "lastplayed";
    SermonSortOption["NEWEST"] = "newest";
    SermonSortOption["NEWEST_PUBLISHED"] = "newest-published";
    SermonSortOption["OLDEST"] = "oldest";
    SermonSortOption["PICK_DATE"] = "pickdate";
    SermonSortOption["SERIES"] = "series";
    SermonSortOption["SPEAKER"] = "speaker";
    SermonSortOption["UPDATED"] = "updated";
    SermonSortOption["RANDOM"] = "random";
    SermonSortOption["ADDED"] = "added";
    SermonSortOption["TITLE"] = "title";
})(SermonSortOption = exports.SermonSortOption || (exports.SermonSortOption = {}));
var HighlightedSortOrders;
(function (HighlightedSortOrders) {
    HighlightedSortOrders["PREACHED"] = "preached";
    HighlightedSortOrders["POPULAR"] = "popular";
    HighlightedSortOrders["ADDED"] = "added";
    HighlightedSortOrders["NEWEST_PICKS"] = "picklistnewest";
    HighlightedSortOrders["RANDOM_PICKS"] = "picklistrandom";
    HighlightedSortOrders["NEWEST_CLIPS"] = "clipsnewest";
    HighlightedSortOrders["RANDOM_CLIPS"] = "clipsrandom";
    HighlightedSortOrders["DEFAULT"] = "added";
})(HighlightedSortOrders = exports.HighlightedSortOrders || (exports.HighlightedSortOrders = {}));
var SeriesPodcastLinkType;
(function (SeriesPodcastLinkType) {
    SeriesPodcastLinkType["TUNEIN"] = "tunein";
    SeriesPodcastLinkType["APPLE"] = "apple";
    SeriesPodcastLinkType["GOOGLE"] = "google-play";
    SeriesPodcastLinkType["SPOTIFY"] = "spotify";
    SeriesPodcastLinkType["STITCHER"] = "stitcher";
    SeriesPodcastLinkType["OTHER"] = "other";
})(SeriesPodcastLinkType = exports.SeriesPodcastLinkType || (exports.SeriesPodcastLinkType = {}));
var SeriesFilter;
(function (SeriesFilter) {
    SeriesFilter["DEFAULT"] = "all";
    SeriesFilter["PODCAST_ENABLED"] = "podcast-enabled";
    SeriesFilter["PODCAST_DISABLED"] = "podcast-disabled";
})(SeriesFilter = exports.SeriesFilter || (exports.SeriesFilter = {}));
var SeriesSortOrder;
(function (SeriesSortOrder) {
    // The last date that the series was "touched" (never goes back in time)
    SeriesSortOrder["LAST_UPDATED"] = "last_updated";
    // The *create* date of the latest sermon in the series (may go back in time)
    SeriesSortOrder["NEWEST_SERMON_CREATE_DATE"] = "newest_sermon_create_date";
    // Title sort ascending
    SeriesSortOrder["TITLE"] = "title";
    // Sermon count DESC
    SeriesSortOrder["SERMON_COUNT_HIGHEST"] = "sermon_count_highest";
    // Sermon count DESC
    SeriesSortOrder["SERMON_COUNT_LOWEST"] = "sermon_count_lowest";
})(SeriesSortOrder = exports.SeriesSortOrder || (exports.SeriesSortOrder = {}));