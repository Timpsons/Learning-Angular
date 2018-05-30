import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { MobiledevicesComponent } from './mobiledevices/mobiledevices.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        BooksComponent,
        MobiledevicesComponent,
        MoviesComponent,
        UsersComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
