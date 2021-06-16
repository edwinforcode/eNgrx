import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getShowRegularEmployee } from './state/employee.reducer';
import { State } from './state/employee.reducer';
import * as EmployeeActions from './state/employee.actions';
import { Employee } from '../app.types';
import { getSelectedEmployee } from './state/employee.reducer';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  showRegularEmployee: boolean;
  showContractEmployee: boolean;
  selectedEmployee: Employee;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.store
      .select(getShowRegularEmployee)
      .subscribe(
        showRegularEmployee => (this.showRegularEmployee = showRegularEmployee)
      );
    this.store
      .select(getSelectedEmployee)
      .subscribe(
        selectedEmployee => (this.selectedEmployee = selectedEmployee)
      );
  }
  regularCheckChanged(): void {
    this.store.dispatch(EmployeeActions.toogleRegularEmployee());
  }

  setSelectedEmployee(employee: Employee): void {
    this.store.dispatch(EmployeeActions.setSelectedEmployee({ employee }));
  }

  deleteEmployee(employee: Employee): void {
    if (employee && employee.employeeId) {
      if (confirm(`Really delete the employee: ${employee.employeeName}`)) {
        this.store.dispatch(EmployeeActions.deleteEmployee({ employee }));
      }
    }
  }
}
