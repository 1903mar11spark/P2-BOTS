import { LoginCreds } from './../../models/login-creds.model';
import { UserType } from 'src/app/models/user-type.model';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

import { Credentials } from './../../models/credentials.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserLogging } from 'src/app/models/user-logging.model';
import { Inject } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';



//const key = 'key';

@Component({
  selector: 'app-user-loggin',
  templateUrl: './user-logging.component.html',
  styleUrls: ['./user-logging.component.css']
})


@Injectable()
export class UserLoggingComponent implements OnInit {

  //instance variables 
  loginForm: FormGroup;
  login: Object = {}; //this does? 
  userLogging: UserLogging; 
  message: string; 
  firstname : string; 

  user: User;
  username: string = ""; 
  lastname: string = ""; 
  email: string = ""; 
  usertype: string = ""; 
  id: number; 
  userType: UserType; 
  userTypeId: number; 
  userTypeName: string; 
  loginCreds: LoginCreds; 
  loginCredsId: number; 
  uName: string = ""; 
  pWord: string = ""; 
  userBean: User; 
 
  //constructor
  constructor(private loginService: LoginService, private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService) {
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
        console.log(this.userLogging); 
        if (window.localStorage) {
          console.log("it works.")
        }
        console.log(this.userLogging.firstname); 
        window.localStorage.setItem('firstname',this.userLogging.firstname);
        window.localStorage.setItem('lastname',this.userLogging.lastname);
        window.localStorage.setItem('username',this.userLogging.username);
        window.localStorage.setItem('email',this.userLogging.email);
        window.localStorage.setItem('usertype',this.userLogging.usertype);
        window.localStorage.setItem('id',String(this.userLogging.id));
        window.localStorage.setItem('userLogging',JSON.stringify(this.userLogging));

        console.log('window user: ' + window.localStorage.userLogging); 


    //rebuild usertype 
    if (this.usertype == 'standard') {
      this.userTypeId = 1; 
      this.userTypeName = 'learner'; 
    } else {
      this.userTypeId = 2;
      this.userTypeName = 'mentor'; 
    }

    //usertype and logincreds
    this.userType = new UserType(this.userTypeId, this.userTypeName);  
    this.loginCreds = new LoginCreds(this.loginCredsId,this.uName, this.pWord); 

    this.userBean = new User(this.id, this.firstname, this.lastname, this.email, this.userType, this.loginCreds, 0)
    
    console.log("the user bean: ", this.userBean); 

    window.localStorage.setItem('userLogging',JSON.stringify(this.userBean));

      },
      error => { console.log(error); }
    );
  console.log('populated userLogging');
  
  console.log(this.userLogging);
  // this will usually print 'undefined' because it is attempting to print a
  // value which may not have back from the Observable yet.

  //route to user home
  this.router.navigate(['/userHome']);
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
