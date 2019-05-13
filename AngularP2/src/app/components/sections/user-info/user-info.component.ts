import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
 


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserInfo();
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
