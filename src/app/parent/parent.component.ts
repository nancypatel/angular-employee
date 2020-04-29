import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit{

  parentmsg = 'I am from parent....';
  message: string;
  pmessage: string;
  @ViewChild(ChildComponent, {static: false}) child;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this.message = this.child.name;
  }

  receiveMessgae($event){
    this.pmessage = $event;
    console.log($event);
  }

}
