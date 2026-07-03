import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

  employeeList = [
    { id: 1, name: "sonu" },
    { id: 2, name: "monu" },
    { id: 3, name: "tonu" }
  ]
}
