import dotenv from 'dotenv';

dotenv.config();

const config = {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/peda_thrifts',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    ENV: process.env.NODE_ENV || 'development',
};

export default config;