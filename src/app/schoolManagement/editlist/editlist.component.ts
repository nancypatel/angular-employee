import { Component, OnInit } from '@angular/core';
import { StudentProfileService } from '../Service/student-profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.scss']
})
export class EditlistComponent implements OnInit {

  public id: any;
  public name: string;
  public lname: string;
  public email: string;
  public psw: string;
  public dob: any;
  public address: string;
  public city: string;
  public studData: object;
  constructor(
    private studService: StudentProfileService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params.id;
    this.studService.getbyidstud(this.id).subscribe((data: Student) => {
      if (data) {
        this.name = data.name;
        this.lname = data.lname;
        this.email = data.email;
        this.psw = data.psw;
        this.dob = data.dob;
        this.address = data.address;
        this.city = data.city;
      }
    });
  }

  public updateStud(){
    this.studData = {
      name: this.name,
      lname: this.lname,
      email: this.email,
      psw: this.psw,
      dob: this.dob,
      address: this.address,
      city: this.city
    };
    console.log(this.studData);
    this.studService.editstud(this.id, this.studData).subscribe((data: Student) => {
      if (data) {
        alert('emp data edit succesfully');
        this.router.navigate(['studlist']);
      }

    });
  }
}
