import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import {BooksService} from '../servies/books-service.service';

@Component({
  selector: 'app-books-new',
  templateUrl: './books-new.component.html',
  styleUrls: ['./books-new.component.css']
})
export class BooksNewComponent implements OnInit {
  public book:Book;
  public mode:number=0;
  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.initBook();
  }
  private initBook() {
    this.book={title:"",author:"",price:0,publishingDate:new Date(),available:true,quantity:0};
  }

  onSaveBook(data: Book) {
    this.booksService.saveBook(data)
      .subscribe(res=>{
        this.book=res;
        this.mode=1;
      },err=>{
         console.log(err);
      })
  }

  onNewBook() {
    this.initBook();
    this.mode=0;
  }

}
