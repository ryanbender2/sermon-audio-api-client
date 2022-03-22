"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
async function main() {
    const testBroadcasterID = 'glasgowrpcs';
    const testSeries = 'Joel';
    const data = await (0, _1.getSpeaker)('Craig J. Scott');
    if (data)
        console.log(data);
    else
        console.log(data);
}
main();
