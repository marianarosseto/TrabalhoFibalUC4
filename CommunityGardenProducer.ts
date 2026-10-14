
import { Producer } from "./Producer";

export class CommunityGardenProducer extends Producer {
    private volunteersNumbers: number;

    constructor(
        name: string,
        cpf: string,
        quantity: number,
        volunteersNumbers: number
    ) {
        super(name, cpf, quantity);

        if (volunteersNumbers < 0) {
            throw new Error("Number of volunteers cannot be negative.");
        }

        this.volunteersNumbers = volunteersNumbers;
    }

    public present(): void {
        console.log("Name: " + this.getName());
        console.log("CPF: " + this.getCpf());
        console.log("Food produced: " + this.getProducedQuantity() + " kg");
        console.log("Number of volunteers: " + this.volunteersNumbers);
    }
}
