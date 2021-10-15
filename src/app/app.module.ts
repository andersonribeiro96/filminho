import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NoiteService} from "./services/noite.service";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoiteComponent } from './entities/noite/noite.component';

@NgModule({
  declarations: [
    AppComponent,
    NoiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [NoiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
