import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent {

  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();

  authForm;
  loginFailed: boolean = false;
  passwordValue: string;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.generateForm();
  }

  generateForm() {
    this.authForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.pattern("^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.loginFailed = false;
  }

  onSubmit() {
    var {login, password} = this.authForm.value;

    const user = this.userService.login(login, password);
    if (user != null) {
      this.generateForm();
      this.confirm.emit()
    } else {
      console.log(this.authForm);
      this.passwordValue = "";
      this.loginFailed = true;
    }
  }

  onCancelClick() {
    this.cancel.emit();
  }

  // Валдидация логина
  get loginHasError(): boolean {
    return this.authForm?.controls?.login?.valid ?? true;
  }

  get loginError(): string {
    var result = [];
    const errors = this.authForm?.controls?.login?.errors;
    if (errors == null) return null;

    Object.keys(errors).forEach(key => {
      if (key === "pattern") {
        const actualValue = errors[key].actualValue;
        if (actualValue.length > 20 ) {
          result.push(`Логин не может содержать больше 20 символов`);
        } else if (actualValue.length < 3 ) {
          result.push(`Логин не может содержать меньше 3 символов`);
        } else {
          result.push(`Логин содержит запрещенные символы`);
        }
      }
      if (key === "required") {
        result.push('Введите логин');
      }
    });

    return result.join(', ');
  }

  // Валидация пароля
  get passwordHasError(): boolean {
    return this.authForm?.controls?.password?.valid ?? true;
  }

  get passwordError(): string {
    var result = [];
    const errors = this.authForm?.controls?.password?.errors;
    if (errors == null) return null;

    Object.keys(errors).forEach(key => {
      if (key === "required") {
        result.push('Введите пароль');
      }
      if (key === "minlength") {
        result.push('Минимальная длина пароля 3 символа');
      }
    });

    return result.join(', ');
  }
}
