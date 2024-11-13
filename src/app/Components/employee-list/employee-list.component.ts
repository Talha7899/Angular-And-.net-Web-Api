import { Component, inject } from '@angular/core';
import { IEmployee } from '../../Interfaces/employee';
import { HttpService } from '../../Services/http.service';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink, MatTableModule, MatButtonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

employeeList : IEmployee[] = [];

httpService = inject(HttpService);
toaster = inject(ToastrService);
router = inject(Router);
displayedColumns: string[] = ['Id', 'Name', 'Email', 'Phone', 'Salary','Action'];
ngOnInit(){
  this.httpService.getAllEmployees().subscribe((result : any) => {
    this.employeeList = result;
    console.log(this.employeeList);
  });
}

edit(id : number){
  console.log(id);
  this.router.navigateByUrl('/employee/'+id);
}
deleteEmp(id : number){
  this.httpService.deleteEmployee(id).subscribe((res : any) => {
    console.log(res);
    this.toaster.error("Employee Deleted Successfully");
    this.employeeList = this.employeeList.filter(x => x.id != id);
  });
}
}