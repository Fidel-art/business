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
exports.MemberController = void 0;
const member_1 = require("../models/member");
const product_1 = require("../models/product");
class MemberController {
    postProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { memberId, productData } = req.body;
            try {
                const member = yield member_1.Member.findById(memberId);
                if (!member || !member.isVerified) {
                    return res.status(403).json({ message: 'Member not verified or does not exist.' });
                }
                const product = new product_1.Product(productData);
                yield product.save();
                member.products.push(product._id);
                yield member.save();
                res.status(201).json({ message: 'Product posted successfully.', product });
            }
            catch (error) {
                res.status(500).json({ message: 'Error posting product.', error });
            }
        });
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_1.Product.find().populate('memberId', 'contactInfo');
                res.status(200).json(products);
            }
            catch (error) {
                res.status(500).json({ message: 'Error retrieving products.', error });
            }
        });
    }
    getMemberInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { memberId } = req.params;
            try {
                const member = yield member_1.Member.findById(memberId);
                if (!member) {
                    return res.status(404).json({ message: 'Member not found.' });
                }
                res.status(200).json(member);
            }
            catch (error) {
                res.status(500).json({ message: 'Error retrieving member information.', error });
            }
        });
    }
}
exports.MemberController = MemberController;
