import { Directive,Component, OnInit } from '@angular/core';
import {AttemptService} from '../../services/attempt.service';
import {Attempt} from '../../models/attempt.model';
@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
attempts: Attempt[];
attempt: Attempt;


  constructor(private attemptService:AttemptService) { }

  numCorrectAns=0;
  numAttempted=8;
  //this.attempts.length;

  

  loadAttempts(): void{
    this.attemptService.getAttempts()
    .subscribe(
      (attemptList: any) => { this.attempts = attemptList;
        console.log(this.attempts);


      },
      error =>{console.log(error);}
    )
  }

  numCorrect():void{
    for(let i=0; i<2;i++){
      if(this.attempts[i].result.resultName="correct"){
        this.numCorrectAns++;
      }
    }
  }

  ngOnInit() {
    this.loadAttempts();
    // this.numCorrect();
  }

}
