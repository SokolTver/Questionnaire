import { Component, Input } from '@angular/core';
import { CardModelEx } from 'src/app/models/card/card.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() content: CardModelEx;

  public onClick() {
    this.content.show = true;
  }

}
