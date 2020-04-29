import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllemp(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/employee`);
  }

  public getbyidemp(id): Observable<any>{
    return this.http.get<any>(`http://localhost:3000/employee/${id}`);
  }

  public addemp(empdata: any): Observable<any>{
    return this.http.post<any>(`http://localhost:3000/employee`, empdata);
  }

  public editemp(id: number, empdata: any): Observable<any>{
    return this.http.put<any>(`http://localhost:3000/employee/${id}`, empdata);
  }

  public deleteemp(id): Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/employee/${id}`);
  }
}
