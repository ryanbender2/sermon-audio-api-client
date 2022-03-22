"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.getNode = exports.request = void 0;
const url_join_1 = __importDefault(require("url-join"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const utils_1 = require("./utils");
const BASE_URL = 'https://api.sermonaudio.com/v2/';
async function request(path, searchParams) {
    var url = (0, url_join_1.default)(BASE_URL, path);
    if (searchParams)
        url = `${url}?${searchParams.toString()}`;
    return await (0, node_fetch_1.default)(url);
}
exports.request = request;
async function getNode(path, searchParams) {
    const resp = await request(path, searchParams);
    return await (0, utils_1.parseNode)(resp);
}
exports.getNode = getNode;
async function get(path, searchParams) {
    const resp = await request(path, searchParams);
    return await resp.json();
}
exports.get = get;
