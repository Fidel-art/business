"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setCustomerRoutes;
const express_1 = require("express");
const customerController_1 = __importDefault(require("../controllers/customerController"));
const router = (0, express_1.Router)();
const customerController = new customerController_1.default();
router.post('/signup', customerController.signUp);
router.get('/products', customerController.viewProducts);
router.post('/purchase', customerController.purchaseProduct);
function setCustomerRoutes(app) {
    app.use('/api/customers', router);
}
