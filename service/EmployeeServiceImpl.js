"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeServiceImpl = void 0;
const InvalidEmployeeIdException_1 = require("../exceptions/InvalidEmployeeIdException");
const NoDatasAvailableException_1 = require("../exceptions/NoDatasAvailableException");
class EmployeeServiceImpl {
    constructor() {
        this.employeeList = [];
    }
    addEmployee(...employee) {
        this.employeeList.concat(employee);
        return "added successFully";
    }
    getEmployee(employeeNumber) {
        let employee;
        let listLength;
        employee = this.employeeList.filter((employee) => employee.getEmployeeNumber == employeeNumber);
        listLength = employee.length;
        if (listLength < 1) {
            throw new InvalidEmployeeIdException_1.InvalidEmployeeIdException("No Data under this Id: " + employeeNumber);
        }
        return employee[0];
    }
    getAllEmployees() {
        let listLength;
        listLength = this.employeeList.length;
        if (listLength < 1) {
            throw new NoDatasAvailableException_1.NoDatasAvailableException("no datas");
        }
        return this.employeeList;
    }
}
exports.EmployeeServiceImpl = EmployeeServiceImpl;
