"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, description, price, memberId, contactInfo) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.memberId = memberId;
        this.contactInfo = contactInfo;
    }
    getDetails() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            memberId: this.memberId,
            contactInfo: this.contactInfo
        };
    }
}
exports.Product = Product;
