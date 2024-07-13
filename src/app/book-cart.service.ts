import { Injectable } from '@angular/core';
import { Book } from './book-list/Book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BookCartService {
	private _cartList: Book[] = [];
	cartList: BehaviorSubject<Book[]> = new BehaviorSubject(this._cartList);

	constructor() { }

	addToCart(book: Book): void {
		let item: Book | undefined = this._cartList.find(b => b.title == book.title);
		if (item == undefined) {
			this._cartList.push({ ...book });
		} else {
			item.quantity += book.quantity;
		}
		this.cartList.next(this._cartList); // Se emite el evento de BehaviorSubject
	}

	getBookQuantity(book: Book): number {
		for (let b of this._cartList) {
			if (book.id === b.id)
				return b.quantity;
		}
		return 0;
	}
}
