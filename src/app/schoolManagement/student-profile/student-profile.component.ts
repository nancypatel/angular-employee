import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentProfileService } from '../Service/student-profile.service';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  public name: string;
  public lname: string;
  public email: string;
  public psw: string;
  public dob: string;
  public address: string;
  public city: string;
  public studData: object;
  constructor(
    private router: Router,
    private student: StudentProfileService
  ) { }

  ngOnInit(): void {
  }

  public addStud(){
    this.studData = {
      name: this.name,
      lname: this.lname,
      email: this.email,
      psw: this.psw,
      dob: this.dob,
      address: this.address,
      city: this.city
    };
    this.student.addstud(this.studData).subscribe((data: Student) => {
      if (data){
        alert ('student data added succesfully');
        this.router.navigate(['studlist']);
      }
    });
  }

}
