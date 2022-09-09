import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-registry',
  templateUrl: './employee-registry.component.html',
  styleUrls: ['./employee-registry.component.scss']
})
export class EmployeeRegistryComponent implements OnInit {
  employee: Employee | undefined;
  registrationForm: FormGroup;

  constructor(public employeeService: EmployeeService, protected router:Router) {
    this.employee = employeeService.employeeSelect;

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
    if(this.employee !== undefined){
      this.updateForm(this.employee);
    }
    this.employee = undefined;
  }

  onSubmit() {
    if (this.employee!) {
      this.updateEmployee(this.employee);
    }
    this.employeeService.addEmployee(this.registrationForm.value);
    this.router.navigateByUrl('/list');
    return false;
  }

  updateForm(employee: Employee) {
    this.registrationForm.patchValue({
      document: employee.document,
      names: employee.names,
      lastnames: employee.lastnames,
      email: employee.email
    })
  }

  updateEmployee(employee: Employee): void {
    employee.document = this.registrationForm.get(['document'])!.value;
    employee.names = this.registrationForm.get(['names'])!.value;
    employee.lastnames = this.registrationForm.get(['lastnames'])!.value;
    employee.email = this.registrationForm.get(['email'])!.value
  }

  cleanEmployee(): void {
    this.employeeService.employeeSelect = undefined;
    this.router.navigateByUrl('/list');
  }

}
