import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees-list' },
  { path: 'employees-list', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
