"use strict";
class Department {
    constructor(id, n) {
        this.employees = []; // private access modifier
        this.name = n;
        this.id = id;
    }
    ////////////Short Hand Initialisation////////////////////
    /// constructor(public name: string) { }
    ////////////////////////////////////////////////////////
    addEmployee(employee) {
        // this.id = 11;                   // type safety check and errors as id is readonly.
        this.employees.push(employee);
    }
    printEmployee() {
        console.log('====================================');
        console.log(this.employees);
        console.log('====================================');
    }
}
const accounts = new Department(12, 'Accounts');
accounts.addEmployee('srini');
accounts.addEmployee('vasan');
accounts.name = 'Accounting';
//accounts.employees[2] = 'failed';
