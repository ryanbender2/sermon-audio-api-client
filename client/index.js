"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requests_1 = require("./node/requests");
async function main() {
    const testBroadcasterID = 'glasgowrpcs';
    const data = await (0, requests_1.getSeriesList)(testBroadcasterID);
    console.log(data.results ? data.results[0].feedLinks : 'None');
}
main();
