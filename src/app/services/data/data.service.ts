import { EventEmitter, Injectable } from '@angular/core';
import { CardModel, getEmptyCard } from '../../models/card/card.model';
import { ArrayHelper } from '../../helper/arrayHelper';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataSource = new EventEmitter<CardModel[]>();
  constructor() {
    this.dataSource.emit(this.questItems);
  }

  private questItems: CardModel[] = [
    { id: 0, text: "first", enabled: true },
    { id: 1, text: "second", enabled: true },
    { id: 2, text: "third", enabled: true },
    { id: 3, text: "fourth", enabled: true },
    { id: 4, text: "fifth", enabled: true },
    { id: 5, text: "sixth", enabled: true },
    { id: 6, text: "какой-то текст", enabled: true },
    { id: 7, text: "еще какой-то текст", enabled: true },
    { id: 8, text: "последняя карточка", enabled: true },
    { id: 9, text: "Новая карточка"}
  ]

  get getQuestItems() {
    return this.questItems;
  }

  addCard(): CardModel {
    const card = getEmptyCard(Math.max(...this.questItems.map(f=>f.id)) + 1);
    // this.questItems.push(card);
    // this.dataSource.emit(this.questItems);
    return card;
  }

  updateCard(card: CardModel) {

    let item = this.questItems.filter(f=>f.id == card.id)[0];
    if (item) {
      ArrayHelper.Replace(this.questItems, item, card);
    } else {
      this.questItems.push(card);
    }
    this.dataSource.emit(this.questItems);
    console.log(this.questItems);
  }

  removeCard(card: CardModel) {
    this.questItems = this.questItems.filter(f=>f.id !== card.id);

    // ArrayHelper.Remove(this.questItems, card);

    this.dataSource.emit(this.questItems);
  }
}
