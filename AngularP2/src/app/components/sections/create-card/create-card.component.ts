import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlashcardService } from 'src/app/services/flashcard.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  newCardForm = new FormGroup({
    question: new FormControl(),
    answer: new FormControl(),
    topic: new FormControl()
   }); 

   onSubmit(): void {
     this.flashcardService.addCard(this.newCardForm.get('question').value);
   }

  constructor(private flashcardService:FlashcardService) { }

  ngOnInit() {
  }

}
