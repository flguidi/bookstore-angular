import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/Book';

// Endpoint para obtener la lista de libros
const URL = 'https://6691ae6d26c2a69f6e90710c.mockapi.io/api/books';

@Injectable({
	providedIn: 'root'
})
export class BookDataService {
	constructor(private http: HttpClient) { }

	/**
	 * Consume la API de libros y devuelve un objeto Observable de la respuesta
	 * @returns Observable
	 */
	public getAll(): Observable<Book[]> {
		return this.http.get<Book[]>(URL)
			.pipe(
				tap((books: Book[]) => {
					books.forEach(book => book.quantity = 0);
				})
			);
	}
}
