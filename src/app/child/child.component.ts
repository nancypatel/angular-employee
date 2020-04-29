import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  name: string;
  msg: string;
  @Input() childMsg: string;
  @Output() msgEvent = new EventEmitter<string>();
  constructor() {
    this.name = 'Nancy Patel';
    this.msg = 'I am from child!!!!';
   }

  ngOnInit(): void {
  }

  sendmsg(){
    this.msgEvent.emit(this.msg);
  }

}
