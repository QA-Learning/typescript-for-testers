class Department {
    name: string;                      // public access modifier by default
    private employees: string[] = [];  // private access modifier
    private readonly id: number;       // readonly access modifier cannot be modified after initialisation

    constructor(id: number, n: string) {
        this.name = n;
        this.id = id;
    }

    ////////////Short Hand Initialisation////////////////////
    /// constructor(public name: string) { }
    ////////////////////////////////////////////////////////

    addEmployee(employee: string) {
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