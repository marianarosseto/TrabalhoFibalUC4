"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name, category, quantity, producer) {
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
    getName() {
        return this.name;
    }
    getCategory() {
        return this.category;
    }
    getQuantity() {
        return this.availableQuantity;
    }
    getProducer() {
        return this.producer;
    }
    addQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        this.availableQuantity += quantity;
    }
    removeQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (quantity > this.availableQuantity) {
            throw new Error("Not enough food in stock.");
        }
        this.availableQuantity -= quantity;
    }
    getAvailableQuantity() {
        return this.availableQuantity;
    }
    donate(quantity) {
        this.removeQuantity(quantity);
    }
}
exports.Food = Food;
