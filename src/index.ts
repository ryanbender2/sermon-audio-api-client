import { SermonSortOption } from "./models";
import { getHighlightedSermons, getSermons, getSpeaker, getSpeakersForBroadcaster } from "./node/requests";
import { createSearchParams } from "./utils";


async function main() {
    const testBroadcasterID = 'glasgowrpcs'
    const testSeries = 'Joel'
    const data = await getSpeaker('Craig J. Scott');
    if (data)
        console.log(data);
    else
        console.log(data);
    
}

main()