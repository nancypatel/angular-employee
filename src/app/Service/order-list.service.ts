import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orderlist } from '../Model/orderlist.model';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllorder(): Observable<Orderlist[]> {
    return this.http.get<Orderlist[]>(`http://localhost/HomeService/HomeService/_Customer`);
  }
}
