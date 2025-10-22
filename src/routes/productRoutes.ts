import { Router, Application } from 'express';
import { ProductController } from '../controllers/productController';

const router = Router();
const productController = new ProductController();

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductDetails);
router.post('/products', productController.postProduct);
router.post('/products/:id/purchase', productController.purchaseProduct);

export default function setProductRoutes(app: Application) {
    app.use('/api/products', router);
}