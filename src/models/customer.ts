import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
    name: string;
    email: string;
    password: string;
    purchaseHistory: string[];
}

const CustomerSchema = new Schema<ICustomer>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    purchaseHistory: [{ type: String }]
});

export const Customer = mongoose.model<ICustomer>('Customer', CustomerSchema);