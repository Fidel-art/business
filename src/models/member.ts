import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IMember extends Document {
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
    contactInfo: string;
    productsPosted: Types.ObjectId[]; // Reference to Product
}

const MemberSchema = new Schema<IMember>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    contactInfo: { type: String, required: true },
    productsPosted: [{ type: Schema.Types.ObjectId, ref: 'Product' }] // Reference to Product
});

export const Member = mongoose.model<IMember>('Member', MemberSchema);