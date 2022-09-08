import {Injectable} from '@angular/core';
import {Employee} from "./employee.module";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  arrEmployee: Employee[];
  employeeSelect: Employee[] | undefined;

  constructor() {
    this.arrEmployee = [];
  }

  addEmployee(employee: Employee) {
    let employees: Employee[] = [];
    const employeeList = localStorage.getItem('employees');
    if (employeeList !== null) {
      employees = JSON.parse(employeeList);
    }
    employees.push(employee);
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

  updateEmployee(employee: Employee) {
    const employees = JSON.parse(localStorage.getItem('employees')!);
    if (employee.document != null) {
      this.employeeSelect = employees.find(
        (item: { document: number }) => item.document === employee.document
      );
    }

  }

}
