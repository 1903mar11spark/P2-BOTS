import {Topic} from '../models/topic';

export class FlashcardNew {
    id:number;
    question: string;
    answer:string;
    topic:Topic;
}