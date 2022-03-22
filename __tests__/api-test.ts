import { expect, test } from '@jest/globals';
import { request, get, getNode } from '../src/api';
import { SermonAudioNode, SermonEventTypeDetail, Speaker } from '../src/models';
import { createSearchParams } from '../src/utils';

test('the request api gets a 404 status from sermon audio', async () => {
    const resp = await request('');
    const body = await resp.json();
    expect(JSON.stringify(body)).toBe(JSON.stringify({
        "status": "SermonAudio API 404 Not Found"
    }));
});

test('get request gives correct value back to the server', async () => {
    'node/speakers'
    const path = 'node/speakers'
    const searchParams = createSearchParams({
        "pageSize": 3
    })
    const node = await get<SermonAudioNode<Speaker[]>>(path, searchParams);
    expect(node.totalCount).toBe(3);
    expect(node.nodeType).toBe('speakers_list');
})

test('getNode parses node correctly', async () => {
    const path = 'node/filter_options/sermon_event_types'
    const searchParams = createSearchParams({
        "broadcaster_id": 'glasgowrpcs',
        "includeUnpublished": false
    })
    const node = await getNode<SermonEventTypeDetail[]>(path, searchParams);
    expect(node).toHaveProperty('next');
    expect(node).toHaveProperty('nodeDisplayName');
    expect(node).toHaveProperty('nodeType');
    expect(node).toHaveProperty('totalCount');
    expect(node).toHaveProperty('results');
})