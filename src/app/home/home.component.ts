import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {Employee} from "../employee.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  employeeSelect: Employee | undefined;
  constructor(protected router:Router) {
    this.userForm = new FormGroup({
      user: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  get form(): { [key: string]: AbstractControl; }
  {
    return this.userForm.controls;
  }

  login() {

    let employees: Employee[] = [];
    const employeeList = localStorage.getItem('employees');
    if (employeeList !== null) {
      employees = JSON.parse(employeeList);
    }
    const user = this.findEmployee(this.userForm.get(['user'])!.value);
    const password = this.findEmployee(this.userForm.get(['password'])!.value);

    employees.forEach(employeeItem => {
      if(this.userForm.get(['user'])!.value === 'admin' && this.userForm.get(['password'])!.value === 'admin'){
        this.router.navigateByUrl('/list');
      }
      if (user && password) {
        this.router.navigateByUrl('/updateEmployeeEmployee' );

        console.log('document',user.document);
      }
    });
  }

  findEmployee(document: number) {
    const employees = JSON.parse(localStorage.getItem('employees')!);
    if(employees){
      employees.forEach((element: Employee) => {
        if(element.document === document){
          this.employeeSelect = element;
        }
      });
    }

    return this.employeeSelect;
  }
}
