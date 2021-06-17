import { Component, Input } from '@angular/core';
import { Employee } from '../../app.types';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  @Input() employeesList: Employee[];
  employeeDetail: Employee;
  selectedEmployee: Employee;
  editEmp: Employee;

  employeeSelected(employee: Employee) {
    this.employeeDetail = employee;
  }

  editEmployee(emp: Employee) {
    this.editEmp = emp;
  }

  deleteEmployee(emp: Employee) {}
}
