import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {formControl} from "@angular/core/schematics/migrations/typed-forms/util";

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
  updateForm: FormGroup;
  status: Status[];
  selectedStatus: Status | undefined;
  constructor(public employeeService: EmployeeService) {
    this.updateForm = new FormGroup({
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
  }
  onSubmit(){
    this.employeeService.addEmployee(this.updateForm.value);
    return false;
  }
}
