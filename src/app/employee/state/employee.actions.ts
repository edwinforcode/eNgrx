import { createAction, props } from '@ngrx/store';
import { Employee } from '../../app.types';

export const toogleRegularEmployee = createAction(
  '[Employee] Toggle Regular Employee'
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
