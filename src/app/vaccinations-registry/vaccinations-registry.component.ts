import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
  vaccinationForm: FormGroup;
  vaccinations: Vaccinations[];
  selectedVaccinations: Vaccinations | undefined;
  constructor() {
    this.vaccinationForm = new FormGroup({
     type: new FormControl(),
      date: new FormControl(),
      numberDoses: new FormControl()
    });

    this.vaccinations = [
      {name: 'Sputnik', code: 'sputnik'},
      {name: 'AstraZeneca', code: 'astraZeneca'},
      {name: 'Pfizer', code: 'pfizer'},
      {name: 'Jhonson&Jhonson', code: 'jhonson&Jhonson'},
    ];
  }

  ngOnInit(): void {
  }
  onSubmit(){}

}
