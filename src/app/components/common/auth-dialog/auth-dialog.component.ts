import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent {

  @Output() confirm = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();

  authForm = this.formBuilder.group({
    login: ['', Validators.pattern("^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")],
    password: ['', Validators.required]
  })

  onSubmit() {
    this.confirm.emit(this.authForm.value);
  }

  onCancelClick() {
    this.cancel.emit()
  }

  constructor(private formBuilder: FormBuilder) { }
}
