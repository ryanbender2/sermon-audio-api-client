class MultipleOverrideError extends Error {}

class NodeAPIError extends Error {
    constructor(resp: any) {
        super(`NodeAPIError: ${resp}`);
    }
}