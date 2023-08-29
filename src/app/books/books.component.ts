import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private bookService:BooksService) { }
  books:Book[]=[];
  // cart :Book[]=[];
  // name:string='The Magic Of The Lost Story';
  // author:string='Sudha Murthy';
  // src:string = 'https://m.media-amazon.com/images/I/51QxnVcjmvL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg';

  // name1:String = 'Will You Still Love Me?'; 
  // author1:string = 'Ravinder Singh';
  // src1:string = 'https://m.media-amazon.com/images/I/51NlBysJSXS._SX323_BO1,204,203,200_.jpg';

  isDisabled:boolean = false;
  

  ngOnInit(): void {
    this.books=this.bookService.getBooks();

  }

  // addToCart(book :Book){
  //   console.log(book);

  // }
  // handleClick(){
  //   this.isDisabled= true;
  // }
  
  // myName:string='';

  isShowing:boolean = true;

  // toogleBooks(){
  //   this.isShowing = !this.isShowing;
  // }
  //ngIf can be done by creating function here or in button directly//

}
