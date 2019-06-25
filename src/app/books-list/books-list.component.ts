import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BooksService} from '../servies/books-service.service';
import {Book, BookPage} from '../model/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  private books:BookPage;
  private keyword:string="";
  private currentPage:number=1;
  private pageSize:number=5;
  private pages:Array<number>;

  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.onSearchBooks();
  }

  private onSearchBooks() {
   this.booksService.searchBooks(this.keyword,this.currentPage,this.pageSize)
     .subscribe(data=>{
       this.books=data;
       this.pages=new Array<number>(data.pages);
     },err=>{
       console.log(err);
     })
  }

  onPageBooks(i:number) {
    this.currentPage=i+1;
    this.onSearchBooks();
  }

  onSearch(data) {
    console.log (data);
    this.keyword=data.keyword;
    this.onSearchBooks();
  }
}
