import { Router, Application } from 'express';
import { CustomerController } from '../controllers/customerController';

const router = Router();
const customerController = new CustomerController();

router.post('/signup', customerController.signUp);
router.get('/products', customerController.viewProducts);
router.post('/purchase', customerController.purchaseProduct);

export default function setCustomerRoutes(app: Application) {
    app.use('/api/customers', router);
}