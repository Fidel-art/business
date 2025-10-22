export interface Admin {
    id: string;
    username: string;
    password: string;
    email: string;
}

export interface Member {
    id: string;
    username: string;
    email: string;
    isVerified: boolean;
    contactInfo: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    postedBy: string; // Member ID
    contactInfo: string; // Contact info of the member who posted the product
}

export interface Customer {
    id: string;
    username: string;
    email: string;
    purchaseHistory: string[]; // Array of Product IDs
}