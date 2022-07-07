import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
//tarea crear un modulo llamado 
//hacer declaraciones, importaciones y exportaciones.

import { HeroesModule } from './heroes/heroes.module';
import {ContadorModule} from "./contador/contador.module";
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    //aquí se importa nuestro modulo herores
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
