import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeRegistryComponent} from "./employee-registry/employee-registry.component";
import {EmployeeUpdateComponent} from "./employee-update/employee-update.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: EmployeeListComponent},
  {path: 'registry', component: EmployeeRegistryComponent},
  {path: 'updateEmployeeAdmin/:document', component: EmployeeRegistryComponent},
  {path: 'updateEmployeeEmployee/:document', component: EmployeeUpdateComponent},
  {path: '**', redirectTo:'/registry'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
