"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityGardenProducer = void 0;
const Producer_1 = require("./Producer");
class CommunityGardenProducer extends Producer_1.Producer {
    constructor(name, cpf, quantity, volunteersNumbers) {
        super(name, cpf, quantity);
        if (volunteersNumbers < 0) {
            throw new Error("Number of volunteers cannot be negative.");
        }
        this.volunteersNumbers = volunteersNumbers;
    }
    present() {
        console.log("Name: " + this.getName());
        console.log("CPF: " + this.getCpf());
        console.log("Food produced: " + this.getProducedQuantity() + " kg");
        console.log("Number of volunteers: " + this.volunteersNumbers);
    }
}
exports.CommunityGardenProducer = CommunityGardenProducer;
