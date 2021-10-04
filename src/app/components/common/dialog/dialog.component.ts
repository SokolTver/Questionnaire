import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  @Input() okButtonText: string = "ок";
  @Input() cancelButtonText: string = "отмена";
  @Input() text: string;
  @Input() caption: string;

  @Input() visibility: boolean = false;

  @Output() okClick: () => {};
  @Output() cancelClick: () => {};

  constructor() { }
}
