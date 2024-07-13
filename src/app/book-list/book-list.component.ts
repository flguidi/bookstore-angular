import { Component } from '@angular/core';
import { Book } from './Book';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrl: './book-list.component.scss'
})
export class BookListComponent {
	// Mock de libros (Se usará una API de mockapi.io)
	/*
		books: Book[] = [
		{
			id: 1,
			title: "Rayuela",
			author: "Julio Cortázar",
			genre: "Novela de vanguardia",
			publisher: "Debolsillo",
			year: 2016,
			price: 85,
			clearance: false,
			stock: 8,
			quantity: 0,
			image: "assets/img/cortazar-rayuela-debolsillo.jpg",
		},
		{
			id: 2,
			title: "Código Da Vinci",
			author: "Dan Brown",
			genre: "Novela narrativa",
			publisher: "Umbriel",
			year: 2003,
			price: 100,
			clearance: true,
			stock: 3,
			quantity: 0,
			image: "assets/img/brown-codigodavinci-umbriel.jpg",
		},
		{
			id: 3,
			title: "El Aleph",
			author: "Jorge Luis Borges",
			genre: "Cuentos fantásticos",
			publisher: "Debolsillo",
			year: 2011,
			price: 120,
			clearance: false,
			stock: 0,
			quantity: 0,
			image: "assets/img/borges-elaleph-debolsillo.jpg",
		},
	];
	*/

	books: Book[] = [];

	constructor(private cartService: BookCartService,
				private bookDataService: BookDataService) {
	}

	ngOnInit(): void {
		this.refreshBookQuantity();
		this.bookDataService.getAll()
			.subscribe(data => this.books = data);
	}

	refreshBookQuantity(): void {
		for (let book of this.books) {
			book.quantity += this.cartService.getBookQuantity(book);
		}
	}

	addToCart(book: Book): void {
		this.cartService.addToCart(book);
		book.stock -= book.quantity;
		book.quantity = 0;
	}

	maxReached(message: string): void {
		console.log(message);
	}
}
