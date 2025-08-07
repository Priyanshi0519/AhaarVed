import PlateImage from '../models/plateImageModel.js';
import NutritionRecord from '../models/monthlyRecModel.js';

// Upload plate image
export const uploadPlateImage = async (req, res) => {
  try {
    const { userId, imageUrl } = req.body;
    const image = new PlateImage({ user: userId, imageUrl });
    await image.save();

    res.status(201).json({ success: true, message: 'Image uploaded.', image });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error uploading image.', error });
  }
};

// Analyze nutrition from ML
export const analyzeNutrition = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    // Call ML API here (placeholder response for now)
    const nutrition = {
      calories: 250,
      protein: 12,
      carbs: 30,
      fats: 10,
    };

    res.status(200).json({ success: true, nutrition });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error analyzing nutrition.', error });
  }
};

// Save nutrition record
export const saveNutritionRecord = async (req, res) => {
  try {
    const { userId, nutrition, date } = req.body;

    const record = new NutritionRecord({ user: userId, nutrition, date });
    await record.save();

    res.status(201).json({ success: true, message: 'Nutrition record saved.', record });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error saving record.', error });
  }
};

// Get all nutrition records for a user
export const getAllNutritionRecordsForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const records = await NutritionRecord.find({ user: userId });

    res.status(200).json({ success: true, records });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching records.', error });
  }
};

// Get monthly summary
export const getMonthlyNutritionSummary = async (req, res) => {
  try {
    const { userId, month, year } = req.query;
    const summary = await NutritionRecord.aggregate([
      {
        $match: {
          user: userId,
          date: {
            $gte: new Date(`${year}-${month}-01`),
            $lt: new Date(`${year}-${month}-31`)
          }
        }
      },
      {
        $group: {
          _id: null,
          totalCalories: { $sum: '$nutrition.calories' },
          totalProtein: { $sum: '$nutrition.protein' },
          totalCarbs: { $sum: '$nutrition.carbs' },
          totalFats: { $sum: '$nutrition.fats' },
        }
      }
    ]);

    res.status(200).json({ success: true, summary: summary[0] || {} });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching summary.', error });
  }
};


