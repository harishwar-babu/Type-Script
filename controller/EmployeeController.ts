import { EmployeeEntity } from "../entity/EmployeeEntity";
import { EmployeeDataType } from "../interfaces/EmployeeDataType";
import { EmployeeService } from "../interfaces/EmployeeService";
import { EmployeeServiceImpl } from "../service/EmployeeServiceImpl";

class EmployeeController{
    #employeeService: EmployeeService = new EmployeeServiceImpl();
    addEmployee():String{
        let employees : Array<EmployeeEntity>
        let employeeDetails1 :EmployeeDataType ={
            employeeName:"harish",
            employeeMobileNumber:"90875"
        }
        let employeeDetails2: EmployeeDataType={
            employeeName:"sasi",
            employeeMobileNumber:"98765"
        }
        return this.#employeeService.addEmployee(new EmployeeEntity(1,employeeDetails1),new EmployeeEntity(2,employeeDetails2));
    }
    //get employee by id
    getEmployeeById(): EmployeeEntity{
        let employeeDetails: EmployeeDataType = {
            employeeName: "",
            employeeMobileNumber: ""
        }
        let employeeValue:EmployeeEntity = new EmployeeEntity(-1,employeeDetails);
        try{
            employeeValue = this.#employeeService.getEmployee(1);
        }
        catch(exception: any){
            console.error(exception.message);
        }
        return employeeValue;
    }
    getAllEmployees(): Array<EmployeeEntity>{
        this.#employeeService = new EmployeeServiceImpl();
        let employeeDetails: EmployeeDataType = {
            employeeName: "",
            employeeMobileNumber: ""
        }
        let emptyEmployees = new EmployeeEntity(-1,employeeDetails);
        let arrayValue: EmployeeEntity[]= [];
        arrayValue.push(emptyEmployees);
        try{
            arrayValue = this.#employeeService.getAllEmployees();
        }
        catch(exception:any){
            console.error(exception.message);
        }
        return arrayValue;
    }
}
let employeeController : EmployeeController = new EmployeeController();
console.log(employeeController.addEmployee());
console.log(employeeController.getAllEmployees());
console.log(employeeController.getEmployeeById);