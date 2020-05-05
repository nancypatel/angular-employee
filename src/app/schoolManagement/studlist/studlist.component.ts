import { Component, OnInit } from '@angular/core';
import { StudentProfileService } from '../Service/student-profile.service';
import { Router } from '@angular/router';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.scss']
})
export class StudlistComponent implements OnInit {

  public studDate: Student[];
  public student1: object[];
  constructor(
    private studentService: StudentProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentService.getAllstud().subscribe((data: Student[]) => {
      this.studDate = data;
      console.log(data);
    });
  }

  public deleteStud(id) {
    this.studentService.deletestud(id).subscribe((data: Student) => {
      if (data) {
        alert('student data deleted succesfully');
      }
    });
  }

  public AddStudent(){
    this.router.navigate(['student-Profile']);
  }

  public Editstud(id: number) {
    this.router.navigate([`editlist/${id}`]);
  }
}
