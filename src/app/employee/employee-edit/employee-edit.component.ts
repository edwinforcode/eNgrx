import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Employee } from '../../app.types';
import { setSelectedEmployee } from '../state/employee.actions';
import { getSelectedEmployee } from '../state/employee.reducer';
import { State } from '../state/employee.reducer';

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee | null;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.store
      .select(getSelectedEmployee)
      .subscribe(selectedEmployee => (this.employee = selectedEmployee));
  }
}
