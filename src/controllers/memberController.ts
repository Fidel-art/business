import { Request, Response } from 'express';
import { Member } from '../models/member';
import { Product } from '../models/product';
import { Types } from 'mongoose';

export class MemberController {
    async postProduct(req: Request, res: Response) {
        const { memberId, productData } = req.body;
        try {
            const member = await Member.findById(memberId);
            if (!member || !member.isVerified) {
                return res.status(403).json({ message: 'Member not verified or does not exist.' });
            }
            const product = new Product(productData);
            await product.save();
            member.productsPosted.push(product._id as Types.ObjectId);
            await member.save();
            res.status(201).json({ message: 'Product posted successfully.', product });
        } catch (error) {
            res.status(500).json({ message: 'Error posting product.', error });
        }
    }

    async getProducts(req: Request, res: Response) {
        try {
            const products = await Product.find().populate('memberId', 'contactInfo');
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving products.', error });
        }
    }

    async getMemberInfo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const member = await Member.findById(id);
            if (!member) {
                return res.status(404).json({ message: 'Member not found.' });
            }
            res.status(200).json(member);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving member information.', error });
        }
    }
}