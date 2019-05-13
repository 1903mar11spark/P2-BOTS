import { LoginCreds } from 'src/app/models/login-creds.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

export class LoginService {


  endpoint = 'http://localhost:8084/P2/login';

  constructor(private http: HttpClient) { }


  public login(uName: string, pWord: number): Observable<LoginCreds> {
    return this.http.post<LoginCreds>(this.endpoint, LoginCreds, httpOptions);
  }


}
