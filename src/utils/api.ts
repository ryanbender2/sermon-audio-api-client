import urlJoin from 'url-join';
import fetch from 'node-fetch';
import { parseNode } from '.';

const BASE_URL = 'https://api.sermonaudio.com/v2/'

export async function request(path: string, searchParams?: URLSearchParams) {
    var url = urlJoin(BASE_URL, path)
    if (searchParams)
        url = `${url}?${searchParams.toString()}`
    return await fetch(url);
}

export async function getNode<T>(path: string, searchParams?: URLSearchParams) {
    const resp = await request(path, searchParams);
    return await parseNode<T>(resp);
}

export async function get<T>(path: string, searchParams?: URLSearchParams): Promise<T> {
    const resp = await request(path, searchParams);
    return await resp.json();
}