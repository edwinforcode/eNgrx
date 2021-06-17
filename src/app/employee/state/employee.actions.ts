import { createAction, props } from '@ngrx/store';
import { Employee } from '../../app.types';

export const toogleRegularEmployee = createAction(
  '[Employee] Toggle Regular Employee'
);

export const toogleContractorEmployee = createAction(
  '[Employee] Toggle Contractor Employee'
);

export const setSelectedEmployee = createAction(
  '[Employee] Set the selected Employee',
  props<{ employee: Employee }>()
);

export const clearSeleectedEmployee = createAction(
  '[Employee] Clear the selected employee'
);

export const intializeEmployee = createAction(
  '[Employee] Clear the selected employee'
);

export const deleteEmployee = createAction(
  '[Employee] Delete employee',
  props<{ employee: Employee }>()
);

export const loadEmployees = createAction('[Employee] Load Employees');

export const loadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success',
  props<{ employees: Employee[] }>()
);

export const loadEmployeesFaliure = createAction(
  '[Employee] Load Employees Failure',
  props<{ error: string }>()
);
