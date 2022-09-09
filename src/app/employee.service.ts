import {Injectable} from '@angular/core';
import {Employee} from "./employee.module";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  arrEmployee: Employee[];
  employeeSelect: Employee | undefined;

  constructor() {
    this.arrEmployee = [];
  }

  addEmployee(employee: Employee) {
    let employees: Employee[] = [];
    const employeeList = localStorage.getItem('employees');
    if (employeeList !== null) {
      employees = JSON.parse(employeeList);
    }

    const employeeFind = this.findEmployee(employee.document!);
    if (employeeFind) {

      employees.forEach(employeeItem =>  {
        if(employeeFind.document === employeeItem.document){
          employeeItem.names = employee.names
          employeeItem.lastnames = employee.lastnames
          employeeItem.email = employee.email
          employeeItem.birthDate = employee.birthDate
          employeeItem.address = employee.address
          employeeItem.numberPhone = employee.numberPhone
          employeeItem.vaccination = employee.vaccination
        }
      });
    } else {
      employees.push(employee);
    }
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  getEmployee() {
    if (localStorage.getItem('employees') === null) {
      return this.arrEmployee;
    } else {
      this.arrEmployee = JSON.parse(localStorage.getItem('employees')!);
      return this.arrEmployee;
    }
  }

  deleteEmployee(employee: Employee) {
    const employees = JSON.parse(localStorage.getItem('employees')!);
    for (let index = 0; index < employees.length; index++) {
      if (employee.document === employees[index].document) {
        employees.splice(index, 1);
        localStorage.setItem('employees', JSON.stringify(employees));
      }
    }
  }

  findEmployee(document: number): Employee | undefined {
    const employees = JSON.parse(localStorage.getItem('employees')!);
    if (employees) {
      employees.forEach((element: Employee) => {
        if (element.document == document) {
          this.employeeSelect = element;
        }
      });
    }
    return this.employeeSelect;
  }

}
