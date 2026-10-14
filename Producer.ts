
export abstract class Producer {
    private name: string;
    private cpf: string;
    private quantity: number;

    constructor(name: string, cpf: string, quantity: number) {
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

    getName(): string {
        return this.name;
    }

    getCpf(): string {
        return this.cpf;
    }

    getProducedQuantity(): number {
        return this.quantity;
    }

    public abstract present(): void;
}
