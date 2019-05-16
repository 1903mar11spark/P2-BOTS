import { Router } from '@angular/router';
import { LogoutService } from './../../services/logout.service';
import { Credentials } from './../../models/credentials.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserLogging } from 'src/app/models/user-logging.model';
import { DriverService } from 'src/app/services/driver.service';
import { deepStrictEqual } from 'assert';
import { UserInfoComponent } from '../user-info/user-info.component';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-user-loggin',
  templateUrl: './user-logging.component.html',
  styleUrls: ['./user-logging.component.css']
})


export class UserLoggingComponent implements OnInit {

  //instance variables 
  loginForm: FormGroup;
  login: Object = {}; //this does? 
  userLogging: UserLogging; 
  message: string; 
  log: any;
 
  //constructor
  constructor(protected localStorage: LocalStorage, private loginService: LoginService, private LogoutService: LogoutService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  //submisssion of login form 
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
      (userLoggingIn: any) => { this.userLogging = userLoggingIn; 
        console.log('check type',this.userLogging.usertype)
        if(this.userLogging.usertype == "standard"){
          this.router.navigate(['/userHome']);
          console.log(this.userLogging.id);

        } else {
          this.router.navigate(['/adminHome']);
        }
        console.log('info is here', this.userLogging); },
      error => { console.log(error); }
    );
  console.log('populated userLogging');
  
  console.log(this.userLogging);
  // this will usually print 'undefined' because it is attempting to print a
  // value which may not have back from the Observable yet.

  //route to user home 
  // this.router.navigate(['/userHome']);
  }

  
  // logging out 
  /*
  userLogout() {
    this.LogoutService.userLogout().subscribe(
      (userLogging: UserLogging) => { this.userLogging = userLogging; console.log(this.userLogging); },
      error => { console.log(error); }
    );
  // console.log(`User ${this.userLogging.firstname} is now logged out`);
  // console.log(this.userLogging);
  this.router.navigate(['/base']);
  }
  */

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
