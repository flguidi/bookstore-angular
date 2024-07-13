import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarketAboutComponent } from './bookmarket-about/bookmarket-about.component';
import { BookmarketBooksComponent } from './bookmarket-books/bookmarket-books.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: "books",
    component: BookmarketBooksComponent
  },
  {
    path: "about",
    component: BookmarketAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
