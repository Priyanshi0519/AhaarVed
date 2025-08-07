import express from 'express';
import { getDietTips } from '../controllers/tipsController.js';

const router = express.Router();

router.get('/', getDietTips);

export default router;
