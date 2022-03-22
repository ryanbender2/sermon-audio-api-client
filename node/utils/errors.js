"use strict";
class MultipleOverrideError extends Error {
}
class NodeAPIError extends Error {
    constructor(resp) {
        super(`NodeAPIError: ${resp}`);
    }
}
