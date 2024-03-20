import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup<any>;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      Mobilenumber: [''],
      address: [''],
      email: [''],
      password: ['']
    })
  }
  onSignup() {
    this.http.post("http://localhost:3000/posts", this.signupForm.value).subscribe(res => {
      alert('Registration succesfully!');
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert('Someting went wrong.')
    }
    )
  }
}
