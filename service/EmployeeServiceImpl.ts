import { EmployeeEntity } from "../entity/EmployeeEntity";
import { InvalidEmployeeIdException} from "../exceptions/InvalidEmployeeIdException";
import { NoDatasAvailableException } from "../exceptions/NoDatasAvailableException";
import { EmployeeService } from "../interfaces/EmployeeService";
export class EmployeeServiceImpl implements EmployeeService{
    employeeList: Array<EmployeeEntity> = [];
    addEmployee(...employee: Array<EmployeeEntity>): string {
        this.employeeList.concat(employee);
        return "added successFully";
    }
    getEmployee(employeeNumber: number): EmployeeEntity {
        let employee: Array<EmployeeEntity>;
        let listLength: number;
        employee = this.employeeList.filter((employee: EmployeeEntity) => employee.getEmployeeNumber == employeeNumber);
        listLength = employee.length;
        if(listLength<1){
            throw new InvalidEmployeeIdException("No Data under this Id: "+employeeNumber);
        }
        return employee[0];
    }
    getAllEmployees(): EmployeeEntity[] {
        let listLength : number;
        listLength = this.employeeList.length;
        if(listLength<1){
            throw new NoDatasAvailableException("no datas");
        }
        return this.employeeList;
    }   
}