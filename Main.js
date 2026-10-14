"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const FamliyFarmer_1 = require("./FamliyFarmer");
const CommunityGardenProducer_1 = require("./CommunityGardenProducer");
const Food_1 = require("./Food");
const Institution_1 = require("./Institution");
const Registry_1 = require("./Registry");
const producerRegistry = new Registry_1.Registry();
const foodRegistry = new Registry_1.Registry();
const institutionRegistry = new Registry_1.Registry();
let option = -1;
do {
    console.log("\n========================================");
    console.log("       RAIZES DA TERRA COOPERATIVE");
    console.log("========================================");
    console.log("[1] Register producer");
    console.log("[2] Register food");
    console.log("[3] Register institution");
    console.log("[4] List producers");
    console.log("[5] List food");
    console.log("[6] List institutions");
    console.log("[7] Make donation");
    console.log("[0] Exit");
    console.log("========================================");
    option = Number(readline_sync_1.default.question("Choose an option: "));
    try {
        switch (option) {
            case 1: {
                const name = readline_sync_1.default.question("Producer name: ");
                const cpf = readline_sync_1.default.question("CPF: ");
                const quantity = Number(readline_sync_1.default.question("Food produced (kg): "));
                console.log("\n[1] Family farmer");
                console.log("[2] Community garden");
                const type = Number(readline_sync_1.default.question("Choose producer type: "));
                let producer;
                if (type === 1) {
                    const size = Number(readline_sync_1.default.question("Property size: "));
                    producer = new FamliyFarmer_1.FamilyFarmer(name, cpf, quantity, size);
                }
                else if (type === 2) {
                    const volunteers = Number(readline_sync_1.default.question("Number of volunteers: "));
                    producer = new CommunityGardenProducer_1.CommunityGardenProducer(name, cpf, quantity, volunteers);
                }
                else {
                    console.log("Invalid producer type.");
                    break;
                }
                producerRegistry.add(producer);
                console.log("Producer registered successfully!");
                break;
            }
            case 2: {
                const producers = producerRegistry.list();
                if (producers.length === 0) {
                    console.log("Register a producer first.");
                    break;
                }
                const name = readline_sync_1.default.question("Food name: ");
                const category = readline_sync_1.default.question("Food category: ");
                const quantity = Number(readline_sync_1.default.question("Quantity (kg): "));
                console.log("\nAvailable producers:");
                producers.forEach((producer, index) => {
                    console.log(`[${index + 1}] ${producer.getName()}`);
                });
                const producerNumber = Number(readline_sync_1.default.question("Choose a producer: "));
                if (!Number.isInteger(producerNumber) ||
                    producerNumber < 1 ||
                    producerNumber > producers.length) {
                    console.log("Invalid producer.");
                    break;
                }
                const producer = producers[producerNumber - 1];
                const food = new Food_1.Food(name, category, quantity, producer);
                foodRegistry.add(food);
                console.log("Food registered successfully!");
                break;
            }
            case 3: {
                const name = readline_sync_1.default.question("Institution name: ");
                const address = readline_sync_1.default.question("Address: ");
                const people = Number(readline_sync_1.default.question("People served: "));
                const institution = new Institution_1.Institution(name, address, people, 0);
                institutionRegistry.add(institution);
                console.log("Institution registered successfully!");
                break;
            }
            case 4: {
                const producers = producerRegistry.list();
                if (producers.length === 0) {
                    console.log("No producers registered.");
                    break;
                }
                console.log("\n========== PRODUCERS ==========");
                producers.forEach((producer, index) => {
                    console.log(`\nProducer ${index + 1}`);
                    producer.present();
                });
                break;
            }
            case 5: {
                const foods = foodRegistry.list();
                if (foods.length === 0) {
                    console.log("No food registered.");
                    break;
                }
                console.log("\n========== FOOD ==========");
                foods.forEach((food, index) => {
                    console.log(`\nFood ${index + 1}`);
                    console.log("Name: " + food.getName());
                    console.log("Category: " + food.getCategory());
                    console.log("Available quantity: " +
                        food.getAvailableQuantity() + " kg");
                    console.log("Producer: " + food.getProducer().getName());
                });
                break;
            }
            case 6: {
                const institutions = institutionRegistry.list();
                if (institutions.length === 0) {
                    console.log("No institutions registered.");
                    break;
                }
                console.log("\n========== INSTITUTIONS ==========");
                institutions.forEach((institution, index) => {
                    console.log(`\nInstitution ${index + 1}`);
                    console.log("Name: " + institution.getName());
                    console.log("Address: " + institution.getAddress());
                    console.log("People served: " + institution.getPeopleServed());
                    console.log("Food received: " +
                        institution.getFoodReceived() + " kg");
                });
                break;
            }
            case 7: {
                const foods = foodRegistry.list();
                const institutions = institutionRegistry.list();
                if (foods.length === 0) {
                    console.log("Register food before making a donation.");
                    break;
                }
                if (institutions.length === 0) {
                    console.log("Register an institution first.");
                    break;
                }
                console.log("\n========== AVAILABLE FOOD ==========");
                foods.forEach((food, index) => {
                    console.log(`[${index + 1}] ${food.getName()} - ` +
                        `${food.getAvailableQuantity()} kg`);
                });
                const foodNumber = Number(readline_sync_1.default.question("Choose food: "));
                if (!Number.isInteger(foodNumber) ||
                    foodNumber < 1 ||
                    foodNumber > foods.length) {
                    console.log("Invalid food.");
                    break;
                }
                const food = foods[foodNumber - 1];
                console.log("\n========== INSTITUTIONS ==========");
                institutions.forEach((institution, index) => {
                    console.log(`[${index + 1}] ${institution.getName()}`);
                });
                const institutionNumber = Number(readline_sync_1.default.question("Choose institution: "));
                if (!Number.isInteger(institutionNumber) ||
                    institutionNumber < 1 ||
                    institutionNumber > institutions.length) {
                    console.log("Invalid institution.");
                    break;
                }
                const institution = institutions[institutionNumber - 1];
                const quantity = Number(readline_sync_1.default.question("Donation quantity (kg): "));
                food.donate(quantity);
                institution.registerReceipt(quantity);
                console.log("\nDonation completed successfully!");
                console.log("Food: " + food.getName());
                console.log("Institution: " + institution.getName());
                console.log("Donated: " + quantity + " kg");
                console.log("Remaining stock: " +
                    food.getAvailableQuantity() + " kg");
                break;
            }
            case 0:
                console.log("System closed.");
                break;
            default:
                console.log("Invalid option. Try again.");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("Error: " + error.message);
        }
        else {
            console.log("An unexpected error occurred.");
        }
    }
    if (option !== 0) {
        readline_sync_1.default.question("\nPress ENTER to continue...");
    }
} while (option !== 0);
