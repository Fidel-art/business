"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    constructor(id, name, email, password, isVerified = false, contactInfo, productsPosted = []) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.isVerified = isVerified;
        this.contactInfo = contactInfo;
        this.productsPosted = productsPosted;
    }
    verify() {
        this.isVerified = true;
    }
    postProduct(productId) {
        this.productsPosted.push(productId);
    }
    getMemberInfo() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            contactInfo: this.contactInfo,
            isVerified: this.isVerified,
            productsPosted: this.productsPosted
        };
    }
}
exports.Member = Member;
