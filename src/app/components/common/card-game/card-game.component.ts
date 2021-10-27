import { Component, Input } from '@angular/core';
import { CardModelEx } from 'src/app/models/card/card.model';

@Component({
  selector: 'card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent {

  @Input() content: CardModelEx;

  public onClick() {
    this.content.show = true;
  }

}
