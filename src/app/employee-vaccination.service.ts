import { Injectable } from '@angular/core';
import {EmployeeVaccination} from "./employee-vaccination.module";

@Injectable({
  providedIn: 'root'
})
export class EmployeeVaccinationService {
  arrVaccination: EmployeeVaccination[];

  constructor() {
    this.arrVaccination = [];
  }

  addVaccination(vaccination: EmployeeVaccination){

  }
}
