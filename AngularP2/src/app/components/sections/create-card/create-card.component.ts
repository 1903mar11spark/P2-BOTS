import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlashcardService } from 'src/app/services/flashcard.service';
import { Topic} from '../../../models/topic';
@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  topics: Topic[];
  topic: Topic;
  newCardForm = new FormGroup({
    question: new FormControl(),
    answer: new FormControl(),
    topic: new FormControl()
   }); 

   onSubmit(): void {
     this.flashcardService.addCard(this.newCardForm.get('question').value);
   }

  constructor(private flashcardService:FlashcardService) { }

  loadTopics(): void{
    this.flashcardService.getTopics()
    .subscribe(
      (topicList: any) => {this.topics = topicList;
      console.log(this.topics);

    },
    error => { console.log(error); }
    )
    
  }
  ngOnInit() {
    this.loadTopics();
  }

}
