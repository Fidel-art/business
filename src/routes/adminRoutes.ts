import { Router, Express} from 'express';
import { authenticateAdmin } from '../middleware/authMiddleware';
import { Application } from 'express';

const router = Router();
import AdminController from '../controllers/adminController';
const adminController = new AdminController();

export function setAdminRoutes(app: Application) {
    router.post('/add-member', authenticateAdmin, adminController.addMember);
    router.post('/verify-member/:id', authenticateAdmin, adminController.verifyMember);
    router.get('/members', authenticateAdmin, adminController.getMembers);

    app.use('/admin', router);
}
