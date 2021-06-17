import { Component, Input } from '@angular/core';
import { Employee } from '../../app.types';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent {
  @Input() selectedEmployee: Employee | null;
}
