# Peda Thrifts

Peda Thrifts is an eCommerce platform designed for buying and selling thrifted clothing items. The system includes an admin panel for managing members, allowing verified members to post products, and enabling customers to sign up, view products, and make purchases.

## Features

- **Admin Panel**: Admins can add and verify members.
- **Member Functionality**: Verified members can post clothing products.
- **Customer Access**: Customers can sign up to view products and make purchases.
- **Product Listings**: Customers can see detailed product information along with the contact information of the member who posted the product.

## Project Structure

```
Peda-Thrifts
├── src
│   ├── app.ts
│   ├── config
│   │   └── index.ts
│   ├── controllers
│   │   ├── adminController.ts
│   │   ├── memberController.ts
│   │   ├── productController.ts
│   │   └── customerController.ts
│   ├── middleware
│   │   └── authMiddleware.ts
│   ├── models
│   │   ├── admin.ts
│   │   ├── member.ts
│   │   ├── product.ts
│   │   └── customer.ts
│   ├── routes
│   │   ├── adminRoutes.ts
│   │   ├── memberRoutes.ts
│   │   ├── productRoutes.ts
│   │   └── customerRoutes.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/Peda-Thrifts.git
   ```
2. Navigate to the project directory:
   ```
   cd Peda-Thrifts
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.