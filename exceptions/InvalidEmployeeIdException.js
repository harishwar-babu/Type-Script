"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEmployeeIdException = void 0;
class InvalidEmployeeIdException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.InvalidEmployeeIdException = InvalidEmployeeIdException;
