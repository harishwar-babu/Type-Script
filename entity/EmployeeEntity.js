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
var _EmployeeEntity_employeeNumber, _EmployeeEntity_employeeDetails;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeEntity = void 0;
class EmployeeEntity {
    get getEmployeeNumber() {
        return __classPrivateFieldGet(this, _EmployeeEntity_employeeNumber, "f");
    }
    set setEmployeeNumber(employeeNumber) {
        __classPrivateFieldSet(this, _EmployeeEntity_employeeNumber, employeeNumber, "f");
    }
    get getEmployeeDetails() {
        return __classPrivateFieldGet(this, _EmployeeEntity_employeeDetails, "f");
    }
    set setEmployeeDetails(EmployeeDetails) {
        __classPrivateFieldSet(this, _EmployeeEntity_employeeDetails, __classPrivateFieldGet(this, _EmployeeEntity_employeeDetails, "f"), "f");
    }
    constructor(employeeNumber, employeeDetails) {
        _EmployeeEntity_employeeNumber.set(this, void 0);
        _EmployeeEntity_employeeDetails.set(this, void 0);
        __classPrivateFieldSet(this, _EmployeeEntity_employeeDetails, employeeDetails, "f");
        __classPrivateFieldSet(this, _EmployeeEntity_employeeNumber, employeeNumber, "f");
    }
}
exports.EmployeeEntity = EmployeeEntity;
_EmployeeEntity_employeeNumber = new WeakMap(), _EmployeeEntity_employeeDetails = new WeakMap();
