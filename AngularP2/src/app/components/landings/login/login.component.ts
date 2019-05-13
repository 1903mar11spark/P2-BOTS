import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  endpoint = 'http://localhost:8084/P2/login';

  login: Object = {};

   onSubmit(){
     console.log("submitted")
   }

  constructor() { }

  ngOnInit() {
  }

}
