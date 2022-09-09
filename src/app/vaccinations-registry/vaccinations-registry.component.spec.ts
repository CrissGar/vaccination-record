import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationsRegistryComponent } from './vaccinations-registry.component';

describe('VaccinationsRegistryComponent', () => {
  let component: VaccinationsRegistryComponent;
  let fixture: ComponentFixture<VaccinationsRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationsRegistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationsRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
