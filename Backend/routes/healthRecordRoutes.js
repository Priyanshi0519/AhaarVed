import express from 'express';
import {
  getAllNutritionRecordsForUser,
  getMonthlyNutritionSummary
} from '../controllers/nutritionController.js';

const router = express.Router();

router.get('/user/:userId', getAllNutritionRecordsForUser);
router.get('/summary/:userId', getMonthlyNutritionSummary);

export default router;
