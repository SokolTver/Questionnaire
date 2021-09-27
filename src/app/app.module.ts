import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { DataService } from './services/data.service';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { CardComponent } from './components/card/card.component';
import { GameComponent } from './components/game/game.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, FooterComponent, HeaderComponent, CardComponent, GameComponent ],
    bootstrap:    [ AppComponent ],
    providers: [DataService]
})
export class AppModule { }