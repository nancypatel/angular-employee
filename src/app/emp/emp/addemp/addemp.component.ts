import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.scss']
})
export class AddempComponent implements OnInit {

  // public id: number;
  public name: string;
  public lastname: string;
  public phone: number;
  public address: string;
  public city: string;
  public empdata: object;
  constructor(
    private httpservice: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public save(){
    this.empdata = {
      name: this.name,
      lastname: this.lastname,
      phone: this.phone,
      address: this.address,
      city: this.city
    };
    this.httpservice.addemp(this.empdata).subscribe((data: Employee) => {
      if (data){
        alert ('emp data added succesfully');
        this.router.navigate(['emp']);
      }
    });
  }

}
