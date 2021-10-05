import { Component, OnInit } from '@angular/core';
import { CardModelEx, cardModelToEx } from 'src/app/models/card/card.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  cards: CardModelEx[];

  constructor(private dataService: DataService) { 
    this.cards = this.dataService.getQuestItems.map(cardModelToEx);
  }
}
