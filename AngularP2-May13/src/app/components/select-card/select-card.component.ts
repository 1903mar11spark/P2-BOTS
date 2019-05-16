import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/models/user-type.model';
import { LoginCreds } from 'src/app/models/login-creds.model';
import { User } from 'src/app/models/user.model';
import { Topic } from 'src/app/models/topic.model';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.css']
})
export class SelectCardComponent implements OnInit {

  constructor() { }

  onCardSelect(): void {


    let uType = new UserType(1, 'learner');

    let creds = new LoginCreds(2, 'JJones', 'juniper');
    
    let myUser = new User(69, 'John', 'Jones', 'JJones@futuretech.com', uType, creds, 0);
    
    let topic = new Topic(3, 'Geography');

    // let myCard = new Card();




  }

  ngOnInit() {
  }

}



// "id": 4,
// "userCard": {
//     "id": 3,
//     "user": {
//         "id": 69,
//         "firstName": "John",
//         "lastName": "Jones",
//         "email": "JJones@futuretech.com",
//         "userType": {
//             "id": 1,
//             "userTypeName": "learner"
//         },
//         "loginCreds": {
//             "id": 2,
//             "uName": "JJones",
//             "pWord": "juniper"
//         },
//         "mentoredBy": 0
//     },
//     "card": {
//         "id": 14,
//         "question": "What is the capital district of Mexico?",
//         "answer": "The Federal District",
//         "topic": {
//             "id": 3,
//             "topicName": "Geography"
//         }
//     },
//     "cardState": {
//         "id": 2,
//         "name": "mastered"
//     }
// },