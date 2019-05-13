import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../models/Flashcard';


@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  readonly URL = 'http://localhost:8084/P2/card';

 

  constructor(private http: HttpClient) { }

  public getFlashcards():Observable<Flashcard[]>{
    return  this.http.get<Flashcard[]>(this.URL+'/all');
  }

  public addCard(flashcard: Flashcard): Observable<Flashcard>{
    return this.http.post<Flashcard>(this.URL, flashcard)
  }

}
