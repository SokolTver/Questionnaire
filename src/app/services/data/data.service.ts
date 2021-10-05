import { Injectable } from '@angular/core';
import { CardModel } from '../../models/card/card.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private questItems: CardModel[] = [
    { id: 0, text: "first"},
    { id: 1, text: "second"},
    { id: 2, text: "third"},
    { id: 3, text: "fourth"},
    { id: 4, text: "fifth"},
    { id: 5, text: "sixth"},
    { id: 6, text: "какой-то текст"},
    { id: 7, text: "еще какой-то текст"},
    { id: 8, text: "последняя карточка"}
  ]

  get getQuestItems() {
    return this.questItems;
  }
}
