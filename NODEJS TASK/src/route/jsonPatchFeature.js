import { Router } from 'express';
import JsonPatchController from '../controller/jsonPatchFeature.js';
import authValidator from '../middleware/authValidator.js';

const router = Router();

router.route('/:id').patch(authValidator, JsonPatchController.JsonPatch);

export default router;