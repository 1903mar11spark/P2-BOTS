import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { UserInfoComponent } from '../components/user-info/user-info.component';


@Injectable({
  providedIn: 'root'
})
export class DriverService {

  //instance variable
  
  constructor(private userInfo: UserInfoComponent) { }


  pushId(id: number){
    console.log('in driver', id);
    // this.userInfo.getUserInfo(id);
    // console.log(this.userInfo.getUserInfo(id));
  }
}
