import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  title = 'User List';

  users: User[];
  user: User;

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.fetchAllUsers()
      .subscribe(
        (userList: any) => { this.users = userList; console.log(this.users); },
        error => { console.log(error); }
      );
    console.log('populated users');
    console.log(this.users);
  
  }
  ngOnInit() {
  }

}
