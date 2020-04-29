import { Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {


  parentmsg = 'I am from register Parent';
  pmessage: string;
  password: number;
  regdataobject: object;
  Loginobject: object;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // this.message = this.register.name;
  }

  receiveMessgae($event){
    this.pmessage = $event;
    console.log($event);
  }

  receiveMessgae1($event){
    this.password = $event;
    console.log($event);
  }

  // for all pass data togher
  receiveMessgae2($event){
    this.regdataobject = $event;
    console.log($event);
  }

  LoginMessgae($event){
    this.Loginobject = $event;
    console.log($event);
  }


}
