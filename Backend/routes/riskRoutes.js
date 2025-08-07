import express from 'express';
import { generateRiskReport } from '../controllers/riskController.js';

const router = express.Router();

router.get('/:userId', generateRiskReport);

export default router;
