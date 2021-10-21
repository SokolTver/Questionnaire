import { Component, Input, OnInit } from '@angular/core';
import { CardModelEx } from 'src/app/models/card/card.model';

@Component({
  selector: 'card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent {

  @Input() content: CardModelEx;
  @Input() number: number;
}
