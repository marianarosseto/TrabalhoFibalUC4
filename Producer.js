"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
class Producer {
    constructor(name, cpf, quantity) {
        if (name.trim() === "") {
            throw new Error("Name cannot be empty.");
        }
        if (cpf.trim() === "") {
            throw new Error("CPF cannot be empty.");
        }
        if (quantity < 0) {
            throw new Error("Quantity cannot be negative.");
        }
        this.name = name;
        this.cpf = cpf;
        this.quantity = quantity;
    }
    getName() {
        return this.name;
    }
    getCpf() {
        return this.cpf;
    }
    getProducedQuantity() {
        return this.quantity;
    }
}
exports.Producer = Producer;
