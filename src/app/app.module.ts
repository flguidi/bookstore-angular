import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCartComponent } from './book-cart/book-cart.component';
import { BookmarketAboutComponent } from './bookmarket-about/bookmarket-about.component';
import { BookmarketBooksComponent } from './bookmarket-books/bookmarket-books.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

// import { HttpClientModule } from '@angular/common/http'; --> Deprecado
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCartComponent,
    BookmarketAboutComponent,
    BookmarketBooksComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule --> Deprecado
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
