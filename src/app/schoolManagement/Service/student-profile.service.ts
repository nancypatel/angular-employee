import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentProfileService {

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line:align
  public addstud(studData: any): Observable<Student> {
    return this.http.post <Student> (`http://localhost:3000/student`, studData);
  }

  public getAllstud(): Observable<Student[]> {
    return this.http.get<Student[]>(`http://localhost:3000/student`);
  }

  public getbyidstud(id): Observable<Student>{
    return this.http.get<Student>(`http://localhost:3000/student/${id}`);
  }

  public editstud(id: number, studData: any): Observable<Student>{
    return this.http.put<Student>(`http://localhost:3000/student/${id}`, studData);
  }

  public deletestud(id): Observable<Student>{
    return this.http.delete<Student>(`http://localhost:3000/student/${id}`);
  }

}
