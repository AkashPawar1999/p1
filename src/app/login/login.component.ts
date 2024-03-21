import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup<any>;

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      // 'firstName': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
    })
  }

  onSave() {
    // console.log(this.loginForm.value);
    this.http.get("http://localhost:3000/posts").subscribe(res => {
      const userArray = Object.values(res);
        const user = userArray.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
        })
        if(user){
          alert('Login successfull..');
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        }
        else{
          alert('User not Found, something went wrong!')
          this.loginForm.reset();
        }
    },err => {
      alert('Error from server side.')
    })
  }
}
