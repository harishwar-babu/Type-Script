"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _EmployeeController_employeeService;
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeEntity_1 = require("../entity/EmployeeEntity");
const EmployeeServiceImpl_1 = require("../service/EmployeeServiceImpl");
class EmployeeController {
    constructor() {
        _EmployeeController_employeeService.set(this, new EmployeeServiceImpl_1.EmployeeServiceImpl());
    }
    addEmployee() {
        let employees;
        let employeeDetails1 = {
            employeeName: "harish",
            employeeMobileNumber: "90875"
        };
        let employeeDetails2 = {
            employeeName: "sasi",
            employeeMobileNumber: "98765"
        };
        return __classPrivateFieldGet(this, _EmployeeController_employeeService, "f").addEmployee(new EmployeeEntity_1.EmployeeEntity(1, employeeDetails1), new EmployeeEntity_1.EmployeeEntity(2, employeeDetails2));
    }
    //get employee by id
    getEmployeeById() {
        let employeeDetails = {
            employeeName: "",
            employeeMobileNumber: ""
        };
        let employeeValue = new EmployeeEntity_1.EmployeeEntity(-1, employeeDetails);
        try {
            employeeValue = __classPrivateFieldGet(this, _EmployeeController_employeeService, "f").getEmployee(1);
        }
        catch (exception) {
            console.error(exception.message);
        }
        return employeeValue;
    }
    getAllEmployees() {
        __classPrivateFieldSet(this, _EmployeeController_employeeService, new EmployeeServiceImpl_1.EmployeeServiceImpl(), "f");
        let employeeDetails = {
            employeeName: "",
            employeeMobileNumber: ""
        };
        let emptyEmployees = new EmployeeEntity_1.EmployeeEntity(-1, employeeDetails);
        let arrayValue = [];
        arrayValue.push(emptyEmployees);
        try {
            arrayValue = __classPrivateFieldGet(this, _EmployeeController_employeeService, "f").getAllEmployees();
        }
        catch (exception) {
            console.error(exception.message);
        }
        return arrayValue;
    }
}
_EmployeeController_employeeService = new WeakMap();
let employeeController = new EmployeeController();
console.log(employeeController.addEmployee);
console.log(employeeController.getAllEmployees);
console.log(employeeController.getEmployeeById);
