import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {

  public employe: object[];
  public empdata: any[];
  constructor(
    private httpservice: HttpService,
    private router: Router
  ) {
    // this.loadempdata();
  }

  ngOnInit(): void {
    this.httpservice.getAllemp().subscribe((data: any[]) => {
      if (data) {
        this.empdata = data;
        console.log(data);
      }
    });
  }

  public deleteemp(id) {
    this.httpservice.deleteemp(id).subscribe((data: any) => {
      if (data) {
        alert('emp data delted succesfully');
      }

    });
  }

  public EditEmp(id: number) {
    this.router.navigate([`emp/editemp/${id}`]);
  }

  public AddEmp() {
    this.router.navigate(['emp/addemp']);
  }
  // public loadempdata() {
  //   this.employe = [{
  //     id: 1,
  //     name: 'nancy',
  //     lastname: 'patel'
  //   }, {
  //     id: 2,
  //     name: 'amit',
  //     lastname: 'chauhan'
  //   }];

  //   console.log(this.employe);
  // }

}
