import { SermonSortOption } from "./models";
import { getAllSermonEventTypes, getBroadcaster, getFilterOptions, getSeries, getSeriesList, getSermon, getSermonEventTypes, getSermons, getSpeaker, getSpeakers, getSpeakersForBroadcaster } from "./node/requests";
import { createSearchParams } from "./utils";


async function main() {
    const testBroadcasterID = 'glasgowrpcs'
    const testSeries = 'Joel'
    const data = await getSpeakersForBroadcaster(testBroadcasterID);
    if (data)
        console.log(data);
    else
        console.log('data is null');
    
}

main()