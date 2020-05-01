import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllemp(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`http://localhost:3000/employee`);
  }

  public getbyidemp(id): Observable<Employee>{
    return this.http.get<Employee>(`http://localhost:3000/employee/${id}`);
  }

  public addemp(empdata: any): Observable<Employee>{
    return this.http.post<Employee>(`http://localhost:3000/employee`, empdata);
  }

  public editemp(id: number, empdata: any): Observable<Employee>{
    return this.http.put<Employee>(`http://localhost:3000/employee/${id}`, empdata);
  }

  public deleteemp(id): Observable<Employee>{
    return this.http.delete<Employee>(`http://localhost:3000/employee/${id}`);
  }
}
