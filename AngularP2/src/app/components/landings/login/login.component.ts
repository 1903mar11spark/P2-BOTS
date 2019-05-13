import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //instance variables
  loginForm: FormGroup;
  login: Object = {}; //this does?
 
  //constructor
  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }
 
  //methods
  onSubmit() {
    console.log("submitted")
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    //this.loginService[make post happen]
  }
 
  ngOnInit() {
 
  }
}

