import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FlightComponent} from './flight/flight.component';
import {FlightService} from './flight/flight.service'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
