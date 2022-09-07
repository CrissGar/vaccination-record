import { Component, OnInit } from '@angular/core';

interface Status {
  name: string,
  code: string
}

interface Vaccinations {
  name: string,
  code: string
}
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})

export class EmployeeUpdateComponent implements OnInit {
  status: Status[];
  selectedStatus: Status | undefined;

  vaccinations: Vaccinations[];
  selectedVaccinations: Vaccinations | undefined;
  constructor() {
    this.status = [
      {name: 'Vacunado', code: 'v'},
      {name: 'No Vacunado', code: 'nv'},
    ];

    this.vaccinations = [
      {name: 'Sputnik', code: 'sputnik'},
      {name: 'AstraZeneca', code: 'astraZeneca'},
      {name: 'Pfizer', code: 'pfizer'},
      {name: 'Jhonson&Jhonson', code: 'jhonson&Jhonson'},
    ];
  }

  ngOnInit(): void {
  }

}
