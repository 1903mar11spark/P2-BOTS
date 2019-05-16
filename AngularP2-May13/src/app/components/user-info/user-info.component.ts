import { UserService } from './../../services/user.service';
import { UserLoggingComponent } from './../user-logging/user-logging.component';
import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserLogging } from 'src/app/models/user-logging.model';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

//let firstname = localStorage.get('key'); 

const firstname = window.localStorage.getItem('key');

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {


  user: User;
  userLogging: UserLogging; 
  username: string = ""; 
  firstname: string = ""; 
  lastname: string = ""; 
  email: string = ""; 
  usertype: string = ""; 
  id: number; 


  constructor(private userService: UserService, private userLoggingComponent: UserLoggingComponent, @Inject(SESSION_STORAGE) private storage: StorageService) {

    this.userLogging = userLoggingComponent.userLogging; 

  }

  ngOnInit(): void {
    this.getUserInfo();
    console.log(window.localStorage.getItem('username')); 
    this.username = window.localStorage.getItem('username');
    this.firstname = window.localStorage.getItem('firstname');
    this.lastname = window.localStorage.getItem('lastname');
    this.email = window.localStorage.getItem('email');
    this.usertype = window.localStorage.getItem('usertype');
    this.id = Number(window.localStorage.getItem('id'));
    this.userLogging = JSON.parse(window.localStorage.getItem('userLogging'));
    
    console.log('user from window: ' + this.userService.fetchUserInformation(this.id)); 

  }
//consult hero detail component 

  getUserInfo(): void {
    this.userService.fetchUserInformation(68) //hard coded to check --> need to grab from session
      .subscribe(
        user => this.user = user);
    //     (userId: any) => { this.user = userId; console.log(this.user); },
    //     error => { console.log(error + 'testing'); }
    //   );
    // console.log('singular user');
    // console.log(this.user);
  
  }

  

}
