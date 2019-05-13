import { User } from 'src/app/models/user.model'

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class UserService {


  endpoint = 'http://localhost:8084/P2/user';

  constructor(private httpClient: HttpClient) { }

  public fetchUserInformation(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.endpoint}/${id}`)
  }

  public fetchAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint+`/all`);
  }

  public addUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.endpoint, user)
  }

  public updateUser(user: User): Observable<User>{
    return this.httpClient.put<User>(this.endpoint, user)
  }

}


  
