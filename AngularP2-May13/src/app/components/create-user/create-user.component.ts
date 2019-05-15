import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { UserType } from 'src/app/models/user-type.model';
import { LoginCreds } from 'src/app/models/login-creds.model';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  //instance variables because we have to lay this out 
  createForm: FormGroup;
  cUser: Object = {}; //still ??
  user: User; 
  uType: UserType;
 
  constructor(private userService: UserService) { 
    this.createForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      uName: new FormControl(),
      pWord: new FormControl()
     }); 
  }

 
   onFormSubmit(): void {
    let uType = new UserType(1, 'learner');

    let creds = new LoginCreds(0, this.createForm.value.uName, this.createForm.value.pWord);
    
     let myUser = new User(0, this.createForm.value.firstName, this.createForm.value.lastName, this.createForm.value.email, uType, creds, 125);
    
     console.log(myUser);

     this.userService.addUser(myUser).subscribe((creatingUser: any) => { this.user = creatingUser; console.log(this.user); },
     error => { console.log(error); }
    );
    console.log(this.user);
    
  
} 
  

  ngOnInit() {
  }
  

}
