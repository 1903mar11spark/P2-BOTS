import { User, createUser } from 'src/app/models/user.model'

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class UserService {

  //instance variables
  endpoint = 'http://localhost:8096/P2/user';

  //constrcutor 
  constructor(private httpClient: HttpClient) { }

  //methods 
  public fetchUserInformation(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.endpoint}/${id}`)
  }

  public fetchAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint+`/all`);
  }

  public addUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.endpoint, user)
  }

  public updateUser(cUser:createUser): Observable<createUser>{
    console.log(cUser)
    console.log('userService')
    return this.httpClient.put<User>(this.endpoint, cUser)
  }

}


  
