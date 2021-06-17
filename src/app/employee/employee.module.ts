import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './state/employee.reducer';
import { EmployeeEffects } from './state/employee.effects';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([EmployeeEffects]),
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent
  ]
})
export class EmployeeModule {}
