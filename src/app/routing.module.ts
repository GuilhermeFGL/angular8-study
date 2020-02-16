import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DvdComponent } from './route/dvd/dvd.component';
import { BookComponent } from './route/book/book.component';
import { PageNotFoundComponent } from './route/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  { path: 'books', component: BookComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    BookComponent,
    DvdComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
