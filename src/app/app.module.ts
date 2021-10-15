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

@NgModule({
  declarations: [
    AppComponent,
    NoiteComponent,
    FilmeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonToggleModule,
        FormsModule
    ],
  providers: [NoiteService, FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
