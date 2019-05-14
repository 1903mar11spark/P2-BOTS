import { LoginCreds } from 'src/app/models/login-creds.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  // LoginCreds cat = new LoginCreds(uname, pass)

  endpoint = 'http://localhost:8084/P2/login';

  constructor(private http: HttpClient) { }


  public login(uName: string, pWord: string): Observable<LoginCreds> {
    return this.http.post<LoginCreds>(this.endpoint, LoginCreds, httpOptions);
  }


}
