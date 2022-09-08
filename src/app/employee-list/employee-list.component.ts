import { Component, OnInit } from '@angular/core';
import { EmployeeService} from "../employee.service";
import {Employee} from "../employee.module";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] | undefined | any;
  constructor( public  employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployee();
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee);
    this.employees = this.employeeService.getEmployee();
  }

  updateEmployee(employee: Employee){
   this.employeeService.updateEmployee(employee);
    this.employees = this.employeeService.getEmployee();
  }

}
