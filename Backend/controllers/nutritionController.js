import PlateImage from '../models/plateImageModel.js';
import DailyCalorie from '../models/dailyCalorieModel.js';
import NutritionRecord from '../models/monthlyRecModel.js';

// Upload plate image
export const uploadPlateImage = async (req, res) => {
  try {
    const { userId, imageUrl } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ success: false, message: "Invalid user ID" });
    }

    // 1️⃣ Call ML API for nutrition analysis
    // Replace with your real ML API call
    const mlResponse = {
      calories: 250,
      protein: 12,
      carbs: 30,
      fats: 10,
    };

    // 2️⃣ Save plate image with analysis
    const image = new PlateImage({
      user: userId,
      imageUrl,
      analysis: mlResponse, // store nutrition directly in PlateImage
      uploadedAt: new Date()
    });

    await image.save();

    // 3️⃣ Optionally save in NutritionRecord for monthly stats
    const record = new NutritionRecord({
      user: userId,
      nutrition: mlResponse,
      date: new Date()
    });

    await record.save();

    res.status(201).json({
      success: true,
      message: 'Image uploaded & nutrition saved.',
      image,
      record
    });

  } catch (error) {
    console.error("Error uploading image:", error);
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


// ✅ Calculate and Save Daily Calories
export const saveDailyCalories = async (req, res) => {
  try {
    const { userId } = req.params; // Assuming userId is in URL

    // Get today's start and end
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Fetch all plate images for today
    const todayPlates = await PlateImage.find({
      user: userId,
      createdAt: { $gte: today, $lt: tomorrow }
    });

    // Calculate total calories
    const totalCalories = todayPlates.reduce(
      (sum, plate) => sum + (plate.analysis?.calories || 0),
      0
    );

    // Save to DailyCalorie (update if already exists for the day)
    const dailyRecord = await DailyCalorie.findOneAndUpdate(
      { user: userId, date: today },
      { totalCalories },
      { upsert: true, new: true }
    );

    res.json({
      message: "Daily calories saved successfully",
      data: dailyRecord
    });
  } catch (error) {
    console.error("Error saving daily calories:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Get Calories for Chart (last 7 days for example)
export const getCalorieHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const { days = 7 } = req.query;

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const records = await DailyCalorie.find({
      user: userId,
      date: { $gte: startDate }
    }).sort({ date: 1 });

    res.json(records);
  } catch (error) {
    console.error("Error fetching calorie history:", error);
    res.status(500).json({ error: "Server error" });
  }
};
