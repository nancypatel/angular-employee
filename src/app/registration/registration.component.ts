import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public cnt: number;
  public email: string;
  public psw: number;
  public phone: number;
  public address: string;
  public city: string;
  public date: string;
  public passworrepeat: number;
  public dataObject: object;
  // @Input() regMsg: string;
  @Output() msgEvent = new EventEmitter<string>();
  @Output() msgEventpsw = new EventEmitter<number>();
  @Output() SengObjectEvent = new EventEmitter<object>();
  // message: string;
  constructor(
    private router: Router
  ) {
    this.cnt = 0;
    this.email = 'aaa@gmail.com';
  }

  ngOnInit(): void {
    // console.log('AmitNancy');
  }

  public doregister()
  {
    this.msgEvent.emit(this.email);
    this.msgEventpsw.emit(this.psw);
    this.dataObject = {
      email: this.email,
      psw: this.psw,
      phone: this.phone,
      address: this.address,
      city: this.city,
      date: this.date
    };
    this.SengObjectEvent.emit(this.dataObject);

  }

  public goLogin() {
    this.router.navigate(['Login']);
  }

  public Enter() {
    console.log(this.cnt);
    this.cnt++;
  }

  public Lifecycle() {
    this.router.navigate(['lifecycle-hook']);
  }
}
