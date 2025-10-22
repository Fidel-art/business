"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/peda_thrifts',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    ENV: process.env.NODE_ENV || 'development',
};
exports.default = config;
