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

   cUser: createUser;

   onFormSubmit(): void {
     this.userService.addUser(this.createForm.get('firstName').value)
      
    console.log('firstName: ' + this.createForm.get('firstName').value + 'lastName: ' + this.createForm.get('lastName').value + 'email: ' + this.createForm.get('email').value);
} 
  constructor(private userService: UserService) { }



  ngOnInit() {
  }
  
  onSubmit(){
  console.warn(this.createForm.value);
  }
}
