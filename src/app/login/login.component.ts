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

  projectForm!: FormGroup<any>;

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'firstName': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
    })
  }

  onSave() {
    console.log(this.projectForm.value);
    this.http.get("http://localhost:3000/posts");
  }
}
