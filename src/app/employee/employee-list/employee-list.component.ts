import { Component, Input } from '@angular/core';
import { Employee } from '../../app.types';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  @Input() employeesList: Employee[];
  selectedEmployee: Employee;

  employeeSelected(employee: Employee) {}
}
