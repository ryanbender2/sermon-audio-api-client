import { expect, test } from '@jest/globals';
import { HighlightedSortOrders, SermonEventType, SermonSortOption } from '../src/utils/models';
import { getAlbumArtUrl, getHighlightedSortSermonParameters, joinUrlPath } from '../src/utils';

test('getAlbumArtUrl replaces pixel sizes', () => {
    expect(getAlbumArtUrl('test/path/{size}/{size}/hello', 64)).toEqual('test/path/64/64/hello');
});

test('joinUrlPath joins url path', () => {
    expect(joinUrlPath('test test', 'path', 'is', '/good')).toBe('test%20test/path/is/good');
})

test('getHighlightedSortSermonParameters gives correct order', () => {
    expect(getHighlightedSortSermonParameters(HighlightedSortOrders.NEWEST_CLIPS)).toEqual({"eventType": SermonEventType.SERMON_CLIP, "sortBy": SermonSortOption.NEWEST});
    expect(getHighlightedSortSermonParameters(HighlightedSortOrders.DEFAULT)).toEqual({"sortBy": SermonSortOption.ADDED});
})