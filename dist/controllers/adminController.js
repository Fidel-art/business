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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const member_1 = __importDefault(require("../models/member"));
class AdminController {
    addMember(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const memberData = req.body;
            const newMember = new member_1.default(memberData);
            yield newMember.save();
            res.status(201).json({ message: 'Member added successfully', member: newMember });
        });
    }
    verifyMember(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { memberId } = req.params;
            const member = yield member_1.default.findById(memberId);
            if (!member) {
                return res.status(404).json({ message: 'Member not found' });
            }
            member.verified = true;
            yield member.save();
            res.status(200).json({ message: 'Member verified successfully', member });
        });
    }
    getMembers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const members = yield member_1.default.find();
            res.status(200).json(members);
        });
    }
}
exports.default = AdminController;
