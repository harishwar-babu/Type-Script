export class InvalidEmployeeIdException extends Error{
    constructor(message:string){
        super(message);
    }
}