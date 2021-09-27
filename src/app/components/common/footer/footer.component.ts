import { Component } from '@angular/core';

// https://angular.io/guide/styleguide#component-custom-prefix
// почитай про именование компонентов
@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() {
    this.footerText = `© ${new Date().getFullYear()}`;
  }

  // переменные обычно над конструктором описываются
  footerText: string;
}
