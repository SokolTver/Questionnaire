import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { DataService } from './services/data/data.service';
import { UserService } from './services/user/user.service';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { CardComponent } from './components/card/card.component';
import { GameComponent } from './components/game/game.component';
import { AuthComponent } from './components/common/auth/auth.component';
import { AuthDialogComponent } from './components/common/auth-dialog/auth-dialog.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuard } from './services/auth-guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

const routes: Routes = [
    { path: '', component: GameComponent },
    { path: 'administrating', component: AdminPanelComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), BrowserAnimationsModule, MatTooltipModule ],
    exports:      [ RouterModule ],
    declarations: [ AppComponent, FooterComponent, HeaderComponent, CardComponent, GameComponent, AuthComponent, AuthDialogComponent, AdminPanelComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ DataService, UserService, AuthGuard, {provide: APP_BASE_HREF, useValue : '/' } ]
})

export class AppModule { }