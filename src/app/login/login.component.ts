import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  projectForm!: FormGroup<any>;

  constructor() { }
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'firstName': new FormControl(null),
      'email': new FormControl(null),
      'password': new FormControl(null),
    })
  }

  onSave() {
    console.log(this.projectForm.value);
  }
}
