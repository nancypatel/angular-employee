import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }
  // To add number
  public add(no1: number, no2: number): number{
    return no1 + no2;
  }

  // To sub number
  public sub(no1: number, no2: number): number{
    return no1 - no2;
  }

  // To mul number
  public mul(no1: number, no2: number): number{
    return no1 * no2;
  }

  public div(no1: number, no2: number): number{
    return no1 / no2;
  }

  public todaydate(){
   const ndate = new Date();
   return ndate;
  }
}
