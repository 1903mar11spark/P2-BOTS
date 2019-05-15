import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/models/Flashcard';
import { FlashcardService} from 'src/app/services/flashcard.service';
import { Topic } from 'src/app/models/topic.model';


@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {
flashcards: Flashcard[];
flashcard: Flashcard;
topics: Topic[];
topic: Topic;


  constructor(private flashcardService:FlashcardService) { }

  loadFlashCards(): void{
    this.flashcardService.getFlashcards()
    .subscribe(
    (flashcardList: any) => { this.flashcards = flashcardList;
       console.log(this.flashcards);

      },
    error => { console.log(error); }
    )

  

  }
  loadTopics(): void{
    this.flashcardService.getTopics()
    .subscribe(
      (topicList: any) => {this.topics = topicList;
      console.log(this.topics);

    },
    error => { console.log(error); }
    )
    
  }
   flashCatagory='';
   questionsmastered=0;
  Mastered:boolean=true;
  
  questionMastered(flashcard:Flashcard):void{
this.flashcards = this.flashcards.filter(f => f.id!== flashcard.id)
this.questionsmastered++;
console.log(this.questionsmastered);
//you have mastered "questionmastered" {{flashcard.topic.topicName}} questiong
  }

  
  


  filterFlashCards(filter: string): void{


    this.flashCatagory= filter;
   
    
    
  }
  
  ngOnInit() {
    this.loadFlashCards();
    this.loadTopics();


    
  }

}
