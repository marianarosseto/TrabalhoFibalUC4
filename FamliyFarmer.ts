
import { Producer } from "./Producer";

export class FamilyFarmer extends Producer {
    private size: number;

    constructor(
        name: string,
        cpf: string,
        quantity: number,
        size: number
    ) {
        super(name, cpf, quantity);

        if (size <= 0) {
            throw new Error("Property size must be greater than zero.");
        }

        this.size = size;
    }

    public present(): void {
        console.log("Name: " + this.getName());
        console.log("CPF: " + this.getCpf());
        console.log("Food produced: " + this.getProducedQuantity() + " kg");
        console.log("Property size: " + this.size);
    }
}
