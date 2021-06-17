import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getEmployees, getShowRegularEmployee } from './state/employee.reducer';
import { State } from './state/employee.reducer';
import * as EmployeeActions from './state/employee.actions';
import { Employee } from '../app.types';
import { getSelectedEmployee } from './state/employee.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  showRegularEmployee$: Observable<boolean>;
  showContractEmployee$: Observable<boolean>;
  selectedEmployee$: Observable<Employee>;
  employees$: Observable<Employee[]>;

  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.employees$ = this.store.select(getEmployees);
    this.store.dispatch(EmployeeActions.loadEmployees());

    this.selectedEmployee$ = this.store.select(getSelectedEmployee);
    this.showContractEmployee$ = this.store.select(getShowRegularEmployee);
    this.showRegularEmployee$ = this.store.select(getShowRegularEmployee);
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
