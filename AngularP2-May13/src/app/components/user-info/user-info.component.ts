
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
    console.log();
    this.userService.fetchUserInformation(9)
      .subscribe(
        user => this.user = user);
  }

  

}
