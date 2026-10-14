
import { Producer } from "./Producer";
import { Donatable } from "./interface";

export class Food implements Donatable {
    private name: string;
    private category: string;
    private availableQuantity: number;
    private producer: Producer;

    constructor(
        name: string,
        category: string,
        quantity: number,
        producer: Producer
    ) {
        if (name.trim() === "" || category.trim() === "") {
            throw new Error("Name and category cannot be empty.");
        }

        if (quantity < 0) {
            throw new Error("Quantity cannot be negative.");
        }

        this.name = name;
        this.category = category;
        this.availableQuantity = quantity;
        this.producer = producer;
    }

    getName(): string {
        return this.name;
    }

    getCategory(): string {
        return this.category;
    }

    getQuantity(): number {
        return this.availableQuantity;
    }

    getProducer(): Producer {
        return this.producer;
    }

    addQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        this.availableQuantity += quantity;
    }

    removeQuantity(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (quantity > this.availableQuantity) {
            throw new Error("Not enough food in stock.");
        }

        this.availableQuantity -= quantity;
    }

    getAvailableQuantity(): number {
        return this.availableQuantity;
    }

    donate(quantity: number): void {
        this.removeQuantity(quantity);
    }
}
