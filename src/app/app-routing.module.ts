import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksNewComponent} from './books-new/books-new.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:"books-list", component:BooksListComponent},
  {path:"books-new",component:BooksNewComponent},
  {path:"home",component:HomeComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
