import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee.module";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

interface Status {
  name: string,
  code: string
}


@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})

export class EmployeeUpdateComponent implements OnInit {
  employee: Employee | undefined;
   updateForm: FormGroup;
  status: Status[];
  selectedStatus: Status | undefined;
  validForm : boolean| undefined;
  pipe = new DatePipe('en-US');
  constructor(public employeeService: EmployeeService, protected router:Router ) {

    this.employee = employeeService.employeeSelect;
    this.updateForm = new FormGroup({
      document: new FormControl(),
      names: new FormControl(),
      lastnames: new FormControl(),
      email: new FormControl(),
      birthDate: new FormControl(),
      address: new FormControl(),
      numberPhone: new FormControl(),
      vaccination: new FormControl()
    });
    this.status = [
      {name: 'Vacunado', code: 'v'},
      {name: 'No Vacunado', code: 'nv'},
    ];

  }


  ngOnInit(): void {
    if(this.employee !== undefined){
      this.updateFormInformation(this.employee);
    }
  }
  onSubmit(){
    if (this.employee!) {
      this.updateEmployee(this.employee);
      this.employeeService.addEmployee(this.updateForm.value);
    }
    return false;
  }

  updateFormInformation(employee: Employee) {
    this.updateForm.patchValue({
      document: employee.document,
      names: employee.names,
      lastnames: employee.lastnames,
      email: employee.email,
      birthDate:this.pipe.transform(employee.birthDate, 'dd/MM/yyyy'),
      address: employee.address,
      numberPhone: employee.numberPhone,
      vaccination: employee.vaccination,
    })

    console.log('vaccination', this.updateForm.value)
  }

  updateEmployee(employee: Employee): void {
    employee.birthDate = this.updateForm.get(['birthDate'])!.value;
    employee.address = this.updateForm.get(['address'])!.value;
    employee.numberPhone = this.updateForm.get(['numberPhone'])!.value;
    employee.vaccination =  this.updateForm.get(['vaccination'])!.value

  }

  cleanEmployee(): void {
    this.employeeService.employeeSelect = undefined;
    this.router.navigateByUrl('/list');
  }

  validVaccination(): boolean{

    if (this.selectedStatus && this.selectedStatus.name === "Vacunado"){
    return  this.validForm = true;
    }
    return this.validForm = false;
  }

}
