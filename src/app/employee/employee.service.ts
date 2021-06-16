import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../app.types';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployee() {}

  deleteEmployee(employee: Employee) {}

  createEmployee(employee: Employee) {}

  updateEmployee(employee: Employee) {}
}
