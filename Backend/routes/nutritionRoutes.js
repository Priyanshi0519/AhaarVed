import express from 'express';
import {
  uploadPlateImage,
  analyzeNutrition,
  saveNutritionRecord,
  getCalorieHistory,
} from '../controllers/nutritionController.js';

const router = express.Router();

router.post('/upload', uploadPlateImage);
router.post('/analyze', analyzeNutrition);
router.post('/save', saveNutritionRecord);
router.get("/calorie-history/:userId",getCalorieHistory);
export default router;
