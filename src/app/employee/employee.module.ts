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

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([EmployeeEffects])
  ],
  exports: [],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ]
})
export class EmployeeModule {}
