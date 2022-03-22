"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requests_1 = require("./node/requests");
async function main() {
    const testBroadcasterID = 'glasgowrpcs';
    const testSeries = 'Joel';
    const data = await (0, requests_1.getSpeaker)('Craig J. Scott');
    if (data)
        console.log(data);
    else
        console.log(data);
}
main();
