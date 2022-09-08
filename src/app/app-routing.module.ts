import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeRegistryComponent} from "./employee-registry/employee-registry.component";
import {EmployeeUpdateComponent} from "./employee-update/employee-update.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/list'},
  {path: 'list', component: EmployeeListComponent},
  {path: 'registry', component: EmployeeRegistryComponent},
  {path: 'updateEmployeeAdmin/:document', component: EmployeeRegistryComponent},
  {path: 'updateEmployeeEmployee', component: EmployeeUpdateComponent},
  {path: '**', redirectTo:'/registry'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
