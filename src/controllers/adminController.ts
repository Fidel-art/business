import { Request, Response } from 'express';
import { Member } from '../models/member';

export default class AdminController {
    async addMember(req: Request, res: Response) {
        const memberData = req.body;
        const newMember = new Member(memberData);
        await newMember.save();
        res.status(201).json({ message: 'Member added successfully', member: newMember });
    }

    async verifyMember(req: Request, res: Response) {
        const { memberId } = req.params;
        const member = await Member.findById(memberId);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        member.isVerified = true;
        await member.save();
        res.status(200).json({ message: 'Member verified successfully', member });
    }

    async getMembers(req: Request, res: Response) {
        const members = await Member.find();
        res.status(200).json(members);
    }
}
