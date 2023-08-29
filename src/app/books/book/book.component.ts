import { EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  @Input() book:Book={} as Book;
  isInCart:boolean = false;
  // @Output() bookEmitter = new EventEmitter<Book>();
  constructor(private cartService:CartService) { }
  addToCart(){
    this.isInCart=true;
    this.cartService.add(this.book);
  }
  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }
  ngOnInit(): void {
  }
  // ngOnDestroy(): void{
  //   console.log({onDestroy:'onDestroy'});

  // }

}
