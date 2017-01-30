import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { ConnexionComponent }   from './connexion/app.connexion.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ConnexionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }