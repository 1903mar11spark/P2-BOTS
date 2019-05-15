import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  updateForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl()
   }); 

   onSubmit(): void {

    //  this.userService.updateUser(this.updateForm.value);
    //  console.log('value here',this.updateForm.value)

   }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
