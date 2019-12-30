import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatListModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    DataBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
