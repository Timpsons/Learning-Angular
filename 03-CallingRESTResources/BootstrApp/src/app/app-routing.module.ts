import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { MobiledevicesComponent } from './mobiledevices/mobiledevices.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component'

const routes: Routes = [
  //{ path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'mobiles', component: MobiledevicesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'users', component: UsersComponent }
  //{ path: 'some/path/:id', component: SomeComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
