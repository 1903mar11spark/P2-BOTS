import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';


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
  let uname = this.loginForm.get('username').value;
  let pass = this.loginForm.get('password').value;
  this.loginService.login(uname,pass);
  
  
 }

 ngOnInit() {

 }



}

