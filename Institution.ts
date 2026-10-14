
export class Institution {
    private name: string;
    private address: string;
    private peopleServed: number;
    private foodReceived: number;

    constructor(
        name: string,
        address: string,
        peopleServed: number,
        foodReceived: number
    ) {
        if (name.trim() === "" || address.trim() === "") {
            throw new Error("Name and address cannot be empty.");
        }

        if (peopleServed < 0 || foodReceived < 0) {
            throw new Error("Values cannot be negative.");
        }

        this.name = name;
        this.address = address;
        this.peopleServed = peopleServed;
        this.foodReceived = foodReceived;
    }

    getName(): string {
        return this.name;
    }

    getAddress(): string {
        return this.address;
    }

    getPeopleServed(): number {
        return this.peopleServed;
    }

    getFoodReceived(): number {
        return this.foodReceived;
    }

    registerReceipt(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        this.foodReceived += quantity;
    }
}
