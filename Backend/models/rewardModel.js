import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
 },
  points: Number,
  reason: String, // e.g., "healthy meal", "daily check-in"
  awardedAt: { 
    type: Date, 
    default: Date.now
 },
});

export default mongoose.model("Reward", rewardSchema);
