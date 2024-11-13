import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IEmployee } from '../Interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  http = inject(HttpClient);

  constructor() { }

  getAllEmployees(){
   return this.http.get<IEmployee[]>("https://localhost:7156/api/Employee")
  }

  createEmployee(emp : IEmployee){
    return this.http.post('https://localhost:7156/api/Employee', emp);
  }

  getEmployee(employeeid : number){
    return this.http.get<IEmployee>('https://localhost:7156/api/Employee/'+employeeid);
  }

  updateEmployee(employeeid : number, employee : IEmployee){
    return this.http.put<IEmployee>('https://localhost:7156/api/Employee/'+employeeid,employee);
  }

  deleteEmployee(employeeid : number){
    return this.http.delete('https://localhost:7156/api/Employee/'+employeeid);
  }
}
