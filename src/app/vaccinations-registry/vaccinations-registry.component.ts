import { Component, OnInit } from '@angular/core';

interface Vaccinations {
  name: string,
  code: string
}

@Component({
  selector: 'app-vaccinations-registry',
  templateUrl: './vaccinations-registry.component.html',
  styleUrls: ['./vaccinations-registry.component.scss']
})
export class VaccinationsRegistryComponent implements OnInit {
  vaccinations: Vaccinations[];
  selectedVaccinations: Vaccinations | undefined;
  constructor() {
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
