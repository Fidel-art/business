import { Router, Application } from 'express';
import { MemberController } from '../controllers/memberController';
import { authenticateMember } from '../middleware/authMiddleware';

const router = Router();
const memberController = new MemberController();

const setMemberRoutes = (app: Application) => {
    router.post('/post-product', authenticateMember, memberController.postProduct);
    router.get('/products', memberController.getProducts);
    router.get('/info/:id', memberController.getMemberInfo);

    app.use('/members', router);
};

export default setMemberRoutes;