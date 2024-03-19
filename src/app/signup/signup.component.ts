import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { constructor } from 'jasmine';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup<any>;

  constructor(private formBuilder: FormBuilder, ) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      email: [''],
      Mobilenumber: [''],
      address: ['']
    })
  }
  onSignup() {

  }
}
