import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Employee } from '../app.types';

const employees: Employee[] = [
  {
    employeeId: 'emp1',
    employeeName: 'Leaf Rake',
    employeeType: 'Regular'
  },
  {
    employeeId: 'emp2',
    employeeName: 'David',
    employeeType: 'Regular'
  },
  {
    employeeId: 'emp3',
    employeeName: 'Edwin',
    employeeType: 'Regular'
  },
  {
    employeeId: 'emp4',
    employeeName: 'Akhil',
    employeeType: 'Contractor'
  },
  {
    employeeId: 'emp5',
    employeeName: 'Sonu',
    employeeType: 'Regular'
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private employeesUrl =
    'https://my-json-server.typicode.com/edwinforcode/fakedb/employees';

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  createEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const newEmployee = { ...employee, id: null };
    return this.http
      .post<Employee>(this.employeesUrl, newEmployee, { headers })
      .pipe(
        tap(data => console.log('createEmployee: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteEmployee(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.employeesUrl}/${id}`;
    return this.http.delete<Employee>(url, { headers }).pipe(
      tap(data => console.log('deleteEmployee: ' + id)),
      catchError(this.handleError)
    );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.employeesUrl}/${employee.employeeId}`;
    return this.http.put<Employee>(url, employee, { headers }).pipe(
      tap(() => console.log('updateProduct: ' + employee.employeeId)),
      // Return the product on an update
      map(() => employee),
      catchError(this.handleError)
    );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
