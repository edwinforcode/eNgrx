import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [CommonModule, EmployeeRoutingModule],
  exports: [],
  declarations: [EmployeeComponent]
})
export class EmployeeModule {}
