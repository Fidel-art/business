"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const customer_1 = require("../models/customer");
const product_1 = require("../models/product");
class CustomerController {
    signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerData = req.body;
            const newCustomer = new customer_1.Customer(customerData);
            yield newCustomer.save();
            res.status(201).json({ message: 'Customer signed up successfully', customer: newCustomer });
        });
    }
    viewProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_1.Product.find();
            res.status(200).json(products);
        });
    }
    purchaseProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productId, customerId } = req.body;
            const product = yield product_1.Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            // Logic for processing the purchase would go here
            res.status(200).json({ message: 'Product purchased successfully', product });
        });
    }
}
exports.CustomerController = CustomerController;
