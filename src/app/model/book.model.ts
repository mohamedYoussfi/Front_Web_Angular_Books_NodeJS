export interface Book{
  _id?:string;
  title:string;
  author:string;
  price:number;
  publishingDate:Date;
  available:boolean;
  quantity:number;
}
export interface BookPage {
  docs:Array<Book>;
  total:number;
  limit:number;
  page:number;
  pages:number;
}
