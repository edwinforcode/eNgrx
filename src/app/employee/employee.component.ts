import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getEmployees,
  getShowContractorEmployee,
  getShowRegularEmployee
} from './state/employee.reducer';
import { State } from './state/employee.reducer';
import * as EmployeeActions from './state/employee.actions';
import { Employee } from '../app.types';
import { getSelectedEmployee } from './state/employee.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    this.showContractEmployee$ = this.store.select(getShowContractorEmployee);
    this.showRegularEmployee$ = this.store.select(getShowRegularEmployee);
  }
  regularCheckChanged(): void {
    this.store.dispatch(EmployeeActions.toogleRegularEmployee());
    if (this.showRegularEmployee$) {
      this.employees$ = this.employees$.pipe(
        map(emp => emp.filter(item => item.employeeType == 'Regular'))
      );
    } else {
      this.employees$ = this.store.select(getEmployees);
    }
  }

  contractorCheckChanged(): void {
    this.store.dispatch(EmployeeActions.toogleContractorEmployee());
    if (this.showContractEmployee$) {
      this.employees$ = this.employees$.pipe(
        map(emp => emp.filter(item => item.employeeType == 'Contractor'))
      );
    } else {
      this.employees$ = this.store.select(getEmployees);
    }
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
