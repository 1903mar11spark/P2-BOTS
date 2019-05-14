import { Credentials } from './../../models/credentials.model';
import { LoginCreds } from './../../models/login-creds.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserLogging } from 'src/app/models/user-logging.model';

//import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  //instance variables 
  loginForm: FormGroup;
  login: Object = {}; //this does? 
  userLogging: UserLogging; 
 
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
    console.log(this.loginForm);
    console.log(this.loginForm.value);

    let credentials = new Credentials(this.loginForm.value.username, this.loginForm.value.password); 
   
    //var body = this.loginForm.value;
    console.log("credentials in login.conmponent: " + credentials); 
    //this.http.post("http://localhost:8096/P2/login", body).subscribe((data) => {});

    this.loginService.userLogin(credentials).subscribe(
      (userLoggingIn: any) => { this.userLogging = userLoggingIn; console.log(this.userLogging); },
      error => { console.log(error); }
    );
  console.log('populated userLogging');
  
  console.log(this.userLogging);
  // this will usually print 'undefined' because it is attempting to print a
  // value which may not have back from the Observable yet.


  }

  ngOnInit() {

  }

  /*
  username: string; 
  */
  /*
  this.loginForm  = new FormGroup({
    username: new FormControl()
 });
  */

}
