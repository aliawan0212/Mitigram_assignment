import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InviteComponent } from './invite/invite.component'; 

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports:      [
  BrowserModule, 
  BrowserAnimationsModule,
  FormsModule, 
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  ],
  declarations: [ AppComponent, HelloComponent, InviteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
