import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book, BookPage} from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService{
  public host:string="http://localhost:8085";
  constructor(private httpClient:HttpClient) { }

  public searchBooks(keyword:string, page:number, size:number):Observable<BookPage>{
    return this.httpClient.get<BookPage>(this.host+"/books-search?kw="+keyword+"&page="+page+"&size="+size);
  }
  public saveBook(book:Book):Observable<Book>{
    return this.httpClient.post<Book>(this.host+"/books",book);
  }
}
