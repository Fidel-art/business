"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberController_1 = __importDefault(require("../controllers/memberController"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
const memberController = new memberController_1.default();
const setMemberRoutes = (app) => {
    router.post('/post-product', authMiddleware_1.authenticateMember, memberController.postProduct);
    router.get('/products', memberController.getProducts);
    router.get('/info/:id', memberController.getMemberInfo);
    app.use('/members', router);
};
exports.default = setMemberRoutes;
