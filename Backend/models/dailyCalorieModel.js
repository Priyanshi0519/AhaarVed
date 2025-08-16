import mongoose from "mongoose";

const dailyCalorieSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  totalCalories: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("DailyCalorie", dailyCalorieSchema);
