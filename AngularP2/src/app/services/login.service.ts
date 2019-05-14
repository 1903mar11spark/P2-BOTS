import { LoginCreds } from 'src/app/models/login-creds.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  // LoginCreds cat = new LoginCreds(uname, pass)

  endpoint = 'http://localhost:8084/P2/login';

  constructor(private http: HttpClient) { }


  public login(uName: string, pWord: string): Observable<LoginCreds> {
    return this.http.post<LoginCreds>(this.endpoint, LoginCreds);
  }


}

