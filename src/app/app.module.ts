import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'; 

import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  
    AppRoutingModule,

    HomeModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
