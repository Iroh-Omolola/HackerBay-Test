import { Router } from 'express';
import ImageController from '../controller/thumbnailFeature.js';
import authValidator from '../middleware/authValidator.js';

const router = Router();

router.route('/').post(authValidator, ImageController.thumbnail);

export default router;