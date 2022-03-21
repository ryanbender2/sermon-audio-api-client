import { SermonSortOption } from "./models";
import { getBroadcaster, getSeriesList, getSermon, getSermonEventTypes, getSermons } from "./node/requests";
import { createSearchParams } from "./utils";


async function main() {
    const testBroadcasterID = 'glasgowrpcs'
    const data = await getSeriesList(testBroadcasterID);
    console.log(data.results ? data.results[0].feedLinks : 'None')
}

main()