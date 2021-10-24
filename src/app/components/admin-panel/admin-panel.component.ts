import { Component, OnDestroy } from '@angular/core';
import { CardModel, CardModelEx, cardModelToEx } from 'src/app/models/card/card.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnDestroy {

  cards: CardModelEx[];
  cardsFiltered: CardModelEx[];
  searchFun: NodeJS.Timeout;

  constructor(private dataService: DataService) { 
    this.setData(this.dataService.getQuestItems);
    this.dataService.dataSource.subscribe((source) => this.setData(source))
  }

  private setData(source: CardModel[]) {
    this.cards = source.map(cardModelToEx);
    this.filterCards();
  }

  filterCards = (filter?: string) => {
    if (filter?.length > 2) {
      this.cardsFiltered = this.cards.filter(f => f.text.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
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

  onCardAdd() {
    const card = cardModelToEx(this.dataService.addCard());
    this.cards.splice(0,0,card);// .push(card);
    card.doEdit();
  }

  onCardEdit(card: CardModelEx) {
    this.dataService.updateCard(card);
    card.doSave();
  }

  onCardDelete(card: CardModelEx) {
    if (card.isEditMode) {
      card.doCancel();
    } else {
      this.dataService.removeCard(card);
    }
  }

  ngOnDestroy() {
    this.dataService.dataSource.unsubscribe();
  }
}
