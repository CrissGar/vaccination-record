import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeRegistryComponent} from "./employee-registry/employee-registry.component";
import {EmployeeUpdateComponent} from "./employee-update/employee-update.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/registry'},
  {path: 'registry', component: EmployeeRegistryComponent},
  {path: 'update', component: EmployeeUpdateComponent},
  {path: '**', redirectTo:'/registry'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
