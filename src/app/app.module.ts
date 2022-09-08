import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeRegistryComponent} from './employee-registry/employee-registry.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {NavbarComponent} from './navbar/navbar.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {ReactiveFormsModule} from "@angular/forms";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {EmployeeService} from "./employee.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistryComponent,
    NavbarComponent,
    EmployeeUpdateComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    RippleModule,
    TableModule,
    CalendarModule,
    ReactiveFormsModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
