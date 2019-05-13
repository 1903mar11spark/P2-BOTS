import { Card } from 'src/app/models/card.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  endpoint ='http://localhost:8084/P2/card';

  constructor(private httpClient: HttpClient) { }

  public addCard(card: Card): Observable<Card>{
    return this.httpClient.post<Card>(this.endpoint, card)
  }

  public updateUser(card: Card): Observable<Card>{
    return this.httpClient.put<Card>(this.endpoint, card)
  }


}
