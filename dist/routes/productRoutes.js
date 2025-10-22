"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setProductRoutes;
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
const router = (0, express_1.Router)();
const productController = new productController_1.default();
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductDetails);
router.post('/products', productController.postProduct);
router.post('/products/:id/purchase', productController.purchaseProduct);
function setProductRoutes(app) {
    app.use('/api', router);
}
