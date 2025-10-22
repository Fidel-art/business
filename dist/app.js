"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const adminRoutes_1 = require("./routes/adminRoutes");
const memberRoutes_1 = __importDefault(require("./routes/memberRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const customerRoutes_1 = __importDefault(require("./routes/customerRoutes"));
const authMiddleware_1 = require("./middleware/authMiddleware");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, body_parser_1.json)());
app.use(authMiddleware_1.authMiddleware);
(0, adminRoutes_1.setAdminRoutes)(app);
(0, memberRoutes_1.default)(app);
(0, productRoutes_1.default)(app);
(0, customerRoutes_1.default)(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
