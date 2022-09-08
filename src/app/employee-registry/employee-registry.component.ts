import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-registry',
  templateUrl: './employee-registry.component.html',
  styleUrls: ['./employee-registry.component.scss']
})
export class EmployeeRegistryComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(public employeeService: EmployeeService) {


    this.registrationForm = new FormGroup({
      document: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^\d+$/)
      ]),
      names: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]*$/)
      ]),
      lastnames: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z ]*$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
      ])
    })
  }

  get form(): { [key: string]: AbstractControl; }
  {
    return this.registrationForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.employeeService.addEmployee(this.registrationForm.value);
    return false;
  }

}
