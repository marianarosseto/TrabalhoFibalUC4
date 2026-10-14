"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyFarmer = void 0;
const Producer_1 = require("./Producer");
class FamilyFarmer extends Producer_1.Producer {
    constructor(name, cpf, quantity, size) {
        super(name, cpf, quantity);
        if (size <= 0) {
            throw new Error("Property size must be greater than zero.");
        }
        this.size = size;
    }
    present() {
        console.log("Name: " + this.getName());
        console.log("CPF: " + this.getCpf());
        console.log("Food produced: " + this.getProducedQuantity() + " kg");
        console.log("Property size: " + this.size);
    }
}
exports.FamilyFarmer = FamilyFarmer;
