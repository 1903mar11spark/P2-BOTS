import { Component, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/models/Flashcard';
import { FlashcardService} from '../../../services/flashcard.service';
@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {
flashcards: Flashcard[];
flashcard: Flashcard;
num: number;
  constructor(private flashcardService:FlashcardService) { }
temporary:Flashcard[];
  loadFlashCards(): void{
    this.flashcardService.getFlashcards()
    .subscribe(
    (flashcardList: any) => { this.flashcards = flashcardList;
       console.log(this.flashcards);

       this.num=this.flashcards.length;
       this.temporary=this.flashcards;
      },
    error => { console.log(error); }
    )



  }
  flashCatagory='';
  

  
  


  filterFlashCards(filter: string): void{


    this.flashCatagory= filter;
   
    
    
  }
  
  ngOnInit() {
    this.loadFlashCards();
    


    
  }

}
