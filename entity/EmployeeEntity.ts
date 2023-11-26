import { EmployeeDataType } from "../interfaces/EmployeeDataType";
export class EmployeeEntity{
    #employeeNumber:number;
    #employeeDetails: EmployeeDataType;
    get getEmployeeNumber(){
        return this.#employeeNumber;
    }
    set setEmployeeNumber(employeeNumber: number){
        this.#employeeNumber=employeeNumber;
    }
    get getEmployeeDetails() {
        return this.#employeeDetails;
    }
    set setEmployeeDetails(EmployeeDetails:EmployeeDataType) {
        this.#employeeDetails=this.#employeeDetails;
    }
    constructor(employeeNumber:number, employeeDetails: EmployeeDataType){
        this.#employeeDetails=employeeDetails;
        this.#employeeNumber=employeeNumber;
    }
}