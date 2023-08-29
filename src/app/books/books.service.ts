import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name:'The Magic Of The Lost Story',
        author:'Sudha Murthy',
        image:'https://m.media-amazon.com/images/I/51QxnVcjmvL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount:179
  
      },
      {
        name:'Will You Still Love Me?',
        author:'Ravinder Singh',
        image:'https://m.media-amazon.com/images/I/51NlBysJSXS._SX323_BO1,204,203,200_.jpg',
        amount:250
      }
    ]
  }
}
