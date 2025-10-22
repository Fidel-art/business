import { Request, Response } from 'express';
import { Product } from '../models/product';

export class ProductController {
    public async getProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving products', error });
        }
    }

    public async postProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = new Product(req.body);
            await product.save();
            res.status(201).json({ message: 'Product created successfully', product });
        } catch (error) {
            res.status(500).json({ message: 'Error creating product', error });
        }
    }

    public async getProductDetails(req: Request, res: Response): Promise<void> {
        const productId = req.params.id;
        try {
            const product = await Product.findById(productId);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving product details', error });
        }
    }

    public async purchaseProduct(req: Request, res: Response): Promise<void> {
        const productId = req.params.id;
        const customerId = req.body.customerId; // Assuming customer ID is sent in the request body
        try {
            const product = await Product.findById(productId);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            // Logic for processing the purchase (e.g., updating inventory, creating order)
            // This is a placeholder for the actual purchase logic
            res.status(200).json({ message: 'Purchase successful', product });
        } catch (error) {
            res.status(500).json({ message: 'Error processing purchase', error });
        }
    }
}