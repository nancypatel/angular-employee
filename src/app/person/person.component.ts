import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  angForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    phone: ['', Validators.required],
    Qualifaction: ['', Validators.required],
  });

  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  public onSubmit() {
    // console.log(this.angForm.value);
    this.submitted = true;
    if (this.angForm.invalid) {
      return;
    }
    alert('SUCCESFULL..');
  }
}
