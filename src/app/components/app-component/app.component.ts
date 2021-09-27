import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

// рутовый компонент (app.component) обычно лежит рядом с app.module
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./../../styles/main.css']
})
export class AppComponent {
    constructor(private dataService: DataService) {
    }

    // тебе не нужно каждый раз при рендере страницы получать элементы
    // если вызовешь это один раз при инициализации компонента, присвоишь переменной
    // и будешь ее далее отображать - это сохранит ресурсы
    // + переменная будет иметь конкретный тип данных (CardModel[])
    getItems() {
        return this.dataService.questItems;
    }

    public onClick(e) {
        // у тебя нет такого поля в модели CardModel
        // именно поэтому стоит указывать тип значения, с которым работаем
        e.show = true;
    }
}
