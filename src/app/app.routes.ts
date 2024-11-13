import { Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';

export const routes: Routes = [
  {
    path:'',
    component:EmployeeListComponent
  },
  {
    path:'employee-list',
    component:EmployeeListComponent
  },
  {
    path:'create-employee',
    component:CreateEmployeeComponent
  },
  {
    path:'employee/:id',
    component:CreateEmployeeComponent
  }
];
