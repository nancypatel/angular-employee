import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public uname: string;
  public psw: number;
  public dataobject: object;
  @Output() msgEvent = new EventEmitter<object>();
  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  public objectdata(){
    this.dataobject = {
    uname: this.uname,
    psw: this.psw
    };
    this.msgEvent.emit(this.dataobject);
  }
  public doregister(){
    this.router.navigate(['register']);
  }

  public dashboard(){
    this.router.navigate(['dashboard']);
  }

  public calc(){
    this.router.navigate(['calculator']);
  }

  public Student(){
    this.router.navigate(['studlist']);
  }

}
