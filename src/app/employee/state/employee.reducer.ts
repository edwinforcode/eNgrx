import {
  createReducer,
  on,
  createAction,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { Employee } from '../../app.types';
import * as AppState from '../../state/app.state';
import * as EmployeeActions from './employee.actions';

export interface State extends AppState.State {
  employees: EmployeeState;
}
export interface EmployeeState {
  showRegularEmployee: boolean;
  showContractEmployee: boolean;
  selectedEmployee: Employee;
  employees: Employee[];
}

const intialState: EmployeeState = {
  showRegularEmployee: false,
  showContractEmployee: false,
  selectedEmployee: null,
  employees: []
};

const getEmployeeFeatureState = createFeatureSelector<EmployeeState>(
  'employees'
);

export const getShowRegularEmployee = createSelector(
  getEmployeeFeatureState,
  state => state.showRegularEmployee
);

export const getShowContractorEmployee = createSelector(
  getEmployeeFeatureState,
  state => state.showContractEmployee
);

export const getEmployees = createSelector(
  getEmployeeFeatureState,
  state => state.employees
);

export const getSelectedEmployee = createSelector(
  getEmployeeFeatureState,
  state => state.selectedEmployee
);

export const employeeReducer = createReducer<EmployeeState>(
  intialState,
  on(
    EmployeeActions.toogleRegularEmployee,
    (state): EmployeeState => {
      return {
        ...state,
        showRegularEmployee: !state.showRegularEmployee
      };
    }
  ),
  on(
    EmployeeActions.setSelectedEmployee,
    (state, action): EmployeeState => {
      return {
        ...state,
        selectedEmployee: action.employee
      };
    }
  ),
  on(
    EmployeeActions.clearSeleectedEmployee,
    (state): EmployeeState => {
      return { ...state, selectedEmployee: null };
    }
  ),
  on(
    EmployeeActions.intializeEmployee,
    (state): EmployeeState => {
      return {
        ...state,
        selectedEmployee: { employeeId: '', employeeName: '', employeeType: '' }
      };
    }
  ),
  on(
    EmployeeActions.loadEmployeesSuccess,
    (state, action): EmployeeState => {
      return {
        ...state,
        employees: action.employees
      };
    }
  )
);
