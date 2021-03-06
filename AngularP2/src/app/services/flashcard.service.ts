import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../models/Flashcard';
import {Topic} from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  readonly URL = 'http://localhost:8084/P2/card';

 

  constructor(private http: HttpClient) { }

  public getFlashcards():Observable<Flashcard[]>{
    return  this.http.get<Flashcard[]>(this.URL+'/all');
  }

  public getTopics():Observable<Topic[]>{
    return  this.http.get<Topic[]>(this.URL+'/topic/all');
  }

  public addCard(flashcard: Flashcard): Observable<Flashcard>{
    return this.http.post<Flashcard>(this.URL, flashcard)
  }

}
