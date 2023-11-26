export class NoDatasAvailableException extends Error {
    constructor(message: string) {
        super(message);
    }
}