import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModelEx, cardModelToEx } from 'src/app/models/card/card.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  cards: CardModelEx[];
  cardsFiltered: CardModelEx[];
  searchFun: NodeJS.Timeout;

  constructor(private dataService: DataService) { 
    this.cards = this.dataService.getQuestItems.map(cardModelToEx);
    this.filterCards();
  }

  filterCards = (filter?: string) => {
    console.log(filter);
    if (filter?.length > 2) {
      this.cardsFiltered = this.cards.filter(f => f.text.includes(filter));
      console.log(this.cardsFiltered);
    } else {
      this.cardsFiltered = this.cards;
    }
  }

  onFilterInput(e) {
    if (this.searchFun != null) {
      clearTimeout(this.searchFun);
    }
    this.searchFun = setTimeout(() => {
      this.filterCards(e.target.value);
    }, 500);
  }
}
