import { Injectable } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as EmployeeActions from './employee.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeeActions.loadEmployees),
      mergeMap(() =>
        this.employeeService
          .getEmployees()
          .pipe(
            map(employees =>
              EmployeeActions.loadEmployeesSuccess({ employees })
            )
          )
      )
    );
  });
}
