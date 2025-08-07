import express from 'express';
import {
  uploadPlateImage,
  analyzeNutrition,
  saveNutritionRecord,
} from '../controllers/nutritionController.js';

const router = express.Router();

router.post('/upload', uploadPlateImage);
router.post('/analyze', analyzeNutrition);
router.post('/save', saveNutritionRecord);

export default router;
