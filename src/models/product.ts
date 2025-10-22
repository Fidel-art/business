import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    memberId: Types.ObjectId; // Reference to Member
    contactInfo: string;
}

const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    memberId: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
    contactInfo: { type: String, required: true }
});

export const Product = mongoose.model<IProduct>('Product', ProductSchema);