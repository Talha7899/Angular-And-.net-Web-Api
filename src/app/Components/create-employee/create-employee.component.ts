import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpService } from '../../Services/http.service';
import { IEmployee } from '../../Interfaces/employee';
import { window } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  formBuilder = inject(FormBuilder);
  httpService = inject(HttpService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  toaster = inject(ToastrService);
  employeeForm = this.formBuilder.group({
    name:['', Validators.required],
    email:['', Validators.required],
    phone:['', Validators.required],
    salary:[0, Validators.required],
  });
  empid!:number;
  isEdit = false;
  ngOnInit(){
    this.empid = this.route.snapshot.params['id'];
    if (this.empid) {
      this.isEdit = true;
      this.httpService.getEmployee(this.empid).subscribe((res : any) => {
        console.log(res);
        this.employeeForm.patchValue(res);
      });
    }
  }

  save(){
    console.log(this.employeeForm.value);
    const employeeModel : IEmployee = {
      name : this.employeeForm.value.name!,
      email : this.employeeForm.value.email!,
      phone : this.employeeForm.value.phone!,
      salary : this.employeeForm.value.salary!
    };
    if (this.isEdit) {
      this.httpService.updateEmployee(this.empid,employeeModel).subscribe((res : any) => {
        console.log(res);
        this.toaster.success("Employee Updated Successfully...");
        this.router.navigateByUrl('/employee-list');
      });
    }
    else {
    this.httpService.createEmployee(employeeModel).subscribe((res : any) => {
      console.log(res);
      this.toaster.success("Employee Added Successfully...");
      this.router.navigateByUrl('/employee-list');
    });
  }
  }
}
