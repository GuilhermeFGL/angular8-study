import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
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
  MatProgressBarModule,
  MatDividerModule,
  MatChipsModule,
  MatTabsModule,
  MatTableModule
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
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { PersonComponent } from './input-binding/person/person.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { ChildItemComponent } from './event-emitter/child-item/child-item.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TimerComponent } from './view-child/timer/timer.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { NameComponent } from './on-changes/name/name.component';
import { MainLifecycleComponent } from './main-lifecycle/main-lifecycle.component';
import { LifecycleChildComponent } from './main-lifecycle/lifecycle-child/lifecycle-child.component';
import { ProductFormComponent } from './service/product-form/product-form.component';
import { DepartmentFormComponent } from './service/department-form/department-form.component';
import { ProductTableComponent } from './service/product-table/product-table.component';
import { BasicObservableComponent } from './observable/basic-observable/basic-observable.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SubjectChildComponent } from './observable/subject/subject-child/subject-child.component';
import { MapDelayComponent } from './operator/map-delay/map-delay.component';

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
    NgSwitchComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
    InputBindingComponent,
    PersonComponent,
    EventEmitterComponent,
    ChildItemComponent,
    ViewChildComponent,
    TimerComponent,
    OnChangesComponent,
    NameComponent,
    MainLifecycleComponent,
    LifecycleChildComponent,
    ProductFormComponent,
    DepartmentFormComponent,
    ProductTableComponent,
    BasicObservableComponent,
    SubjectComponent,
    SubjectChildComponent,
    MapDelayComponent
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
    MatProgressBarModule,
    MatDividerModule,
    MatChipsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
