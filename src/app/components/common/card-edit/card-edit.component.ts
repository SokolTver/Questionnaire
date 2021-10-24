import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModelEx } from 'src/app/models/card/card.model';

@Component({
  selector: 'card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent {

  @Input() content: CardModelEx;
  @Input() number: number;
  @Output() cardEdit = new EventEmitter<CardModelEx>();
  @Output() cardDelete = new EventEmitter<CardModelEx>();

  doEditCard() {
    if (this.content.isEditMode) {
      this.cardEdit.emit(this.content);
    } else {
      this.content.doEdit();
    }
    // this.content.isEditMode = !this.content.isEditMode;
  }

  doDeleteCard() {
    this.cardDelete.emit(this.content);
  }
  
  onTextChange(e) {
    this.content.text = e.target.value;
  }
}
