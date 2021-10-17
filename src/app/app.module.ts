import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NoiteService} from "./services/noite.service";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoiteComponent } from './entities/noite/noite.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {FilmeService} from "./services/filme.service";
import { FilmeComponent } from './entities/filme/filme.component';
import {MatIconModule} from "@angular/material/icon";
import {ImdbRatingService} from "./services/imdb-rating.service";
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    NoiteComponent,
    FilmeComponent,
    DarkModeToggleComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        FormsModule,
        MatIconModule
    ],
  providers: [NoiteService, FilmeService, ImdbRatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
