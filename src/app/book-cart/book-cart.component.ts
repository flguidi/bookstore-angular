import { Component } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';

@Component({
	selector: 'app-book-cart',
	templateUrl: './book-cart.component.html',
	styleUrl: './book-cart.component.scss'
})
export class BookCartComponent {
	cartList: Book[] = [];

	constructor(private cartService: BookCartService) { }

	ngOnInit(): void {
		this.cartService.cartList.subscribe((data => this.cartList = data))
	}
}
