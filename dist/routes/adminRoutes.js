"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAdminRoutes = setAdminRoutes;
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
const adminController_1 = __importDefault(require("../controllers/adminController"));
const adminController = new adminController_1.default();
function setAdminRoutes(app) {
    router.post('/add-member', authMiddleware_1.authenticateAdmin, adminController.addMember);
    router.post('/verify-member/:id', authMiddleware_1.authenticateAdmin, adminController.verifyMember);
    router.get('/members', authMiddleware_1.authenticateAdmin, adminController.getMembers);
    app.use('/admin', router);
}
