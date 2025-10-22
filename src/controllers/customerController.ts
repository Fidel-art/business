import { Request, Response } from 'express';
import { Customer } from '../models/customer';
import { Product } from '../models/product';

export class CustomerController {
    async signUp(req: Request, res: Response) {
        const customerData = req.body;
        const newCustomer = new Customer(customerData);
        await newCustomer.save();
        res.status(201).json({ message: 'Customer signed up successfully', customer: newCustomer });
    }

    async viewProducts(req: Request, res: Response) {
        const products = await Product.find();
        res.status(200).json(products);
    }

    async purchaseProduct(req: Request, res: Response) {
        const { productId, customerId } = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        // Logic for processing the purchase would go here
        res.status(200).json({ message: 'Product purchased successfully', product });
    }
}