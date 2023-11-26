import { EmployeeEntity } from "../entity/EmployeeEntity";
export interface EmployeeService{
    addEmployee(...employee: Array<EmployeeEntity>):string;
    getEmployee(id:number):EmployeeEntity
    getAllEmployees():Array<EmployeeEntity>
}