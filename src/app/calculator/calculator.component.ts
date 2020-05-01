import { Component, OnInit } from '@angular/core';
import { CalcService } from '../Service/calc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public no1: number;
  public no2: number;
  public total: number;
  todaydate;
  constructor(
    private calcservice: CalcService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public add(){
    this.total = this.calcservice.add(this.no1, this.no2);
    this.clear();
  }

  public sub(){
    this.total = this.calcservice.sub(this.no1, this.no2);
    this.clear();
  }

  public mul(){
    this.total = this.calcservice.mul(this.no1, this.no2);
    this.clear();
  }

  public divi(){
    this.total = this.calcservice.div(this.no1, this.no2);
    this.clear();
  }

  public clear(){
    this.no1 = null;
    this.no2 = null;
  }

  public date(){
    this.todaydate = this.calcservice.todaydate();
  }

  public emp()
  {
    this.router.navigate(['emp']);
  }

  public doperson(){
    this.router.navigate(['person']);
  }

  public doOrderList(){
    this.router.navigate(['orderlist']);
  }

}
