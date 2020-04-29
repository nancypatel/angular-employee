import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.scss']
})
export class LifecycleHookComponent implements OnInit {

  private hook: number;
  constructor(
    private router: Router,
  ) {
     this.hook = 0;
   }

  ngOnInit(): void {
    console.log('oninit', ++this.hook);
  }

  public Parent(){
    this.router.navigate(['Parent']);
  }

}
