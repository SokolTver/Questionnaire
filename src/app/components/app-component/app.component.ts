import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';
     
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./../../styles/main.css']
})
export class AppComponent { 
    constructor(private dataService: DataService) {   
    }

    getItems() {
        return this.dataService.questItems;
    }

    public onClick(e) {
        e.show = true;
    }
}