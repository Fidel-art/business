import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import { setAdminRoutes } from './routes/adminRoutes';
import  setMemberRoutes  from './routes/memberRoutes';
import  setProductRoutes  from './routes/productRoutes';
import  setCustomerRoutes  from './routes/customerRoutes';
import { authMiddleware } from './middleware/authMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/peda-thrifts')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(json());
app.use(authMiddleware);

setAdminRoutes(app);
setMemberRoutes(app);
setProductRoutes(app);
setCustomerRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});