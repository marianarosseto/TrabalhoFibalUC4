"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
class Institution {
    constructor(name, address, peopleServed, foodReceived) {
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
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getPeopleServed() {
        return this.peopleServed;
    }
    getFoodReceived() {
        return this.foodReceived;
    }
    registerReceipt(quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        this.foodReceived += quantity;
    }
}
exports.Institution = Institution;
