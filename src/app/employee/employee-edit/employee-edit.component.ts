import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Employee } from '../../app.types';
import { State } from '../state/employee.reducer';
import * as EmployeeActions from '../state/employee.actions';

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {
  @Input() employee: Employee | null;
  employeeForm: FormGroup;
  constructor(private store: Store<State>, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      employeeType: ['', Validators.required]
    });
  }

  saveEmployee() {
    const employee = { ...this.employee, ...this.employeeForm.value };
    // this.store.dispatch(EmployeeActions.saveEmployee);
  }

  cancelEdit() {
    this.employee = null;
  }
}
