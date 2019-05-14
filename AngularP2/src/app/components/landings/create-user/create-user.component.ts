import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User, createUser } from 'src/app/models/user.model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
   
  createForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl()
   }); 

   
   onFormSubmit(): void {
     this.userService.addUser(this.createForm.value);
    console.log(this.createForm.value);
} 
  constructor(private userService: UserService) { }



  ngOnInit() {
  }
  

}
