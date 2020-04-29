import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.scss']
})
export class EditempComponent implements OnInit {

  public id: any;
  public name: string;
  public lastname: string;
  public phone: number;
  public address: string;
  public city: string;
  public empdata: object;
  constructor(
    private httpservice: HttpService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.id = 1;
    this.id = this.activateRoute.snapshot.params.id;
    this.httpservice.getbyidemp(this.id).subscribe((data: any) => {
      if (data){
        this.name = data.name;
        this.lastname = data.lastname;
        this.phone = data.phone;
        this.address = data.address;
        this.city = data.city;
      }
    });
  }

  ngOnInit(): void {
  }

  public EditEmp() {
    this.empdata = {
      name: this.name,
      lastname: this.lastname,
      phone: this.phone,
      address: this.address,
      city: this.city
    };
    console.log(this.empdata);
    this.httpservice.editemp(this.id, this.empdata).subscribe((data: any) => {
      if (data) {
        alert('emp data edit succesfully');
        this.router.navigate(['emp']);
      }

    });
  }

}
