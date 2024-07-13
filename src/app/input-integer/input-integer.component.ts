import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-input-integer',
	templateUrl: './input-integer.component.html',
	styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
	@Input() quantity!: number;
	@Input() max!: number;

	@Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
	@Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

	/**
	 * Decrementa en 1 la cantidad a añadir al carrito de compras
	 */
	downQuantity(): void {
		if (this.quantity > 0) {
			this.quantity--;
			this.quantityChange.emit(this.quantity);
		}
	}

	/**
	 * Incrementa en 1 la cantidad a añadir al carrito de compras
	 */
	upQuantity(): void {
		if (this.quantity < this.max) {
			this.quantity++;
			this.quantityChange.emit(this.quantity);			
		} else {
			this.maxReached.emit("Se alcanzó el límite");
		}
	}

	/**
	 * Establece la cantidad de libros a agregar al carrito de compras
	 * @param event Evento de teclado al ingresar un valor
	 */
	setQuantity(event: any): void {
		let input = event.target.value;
		let quantity = Number(input);

		// Se verifica que el número ingresado sea válido
		if (!isNaN(quantity) && Number.isFinite(quantity)) {
			// Se establecen límites
			if (quantity < 0)
				quantity = 0;
			else if (quantity > this.max)
				quantity = this.max;

			this.quantity = quantity;
		} else {
			this.quantity = 0;
		}

		this.quantityChange.emit(this.quantity); // Se actualiza el campo de entrada	
	}
}
