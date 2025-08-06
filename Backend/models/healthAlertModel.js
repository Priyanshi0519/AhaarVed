import mongoose from "mongoose";

const healthAlertSchema = new mongoose.Schema({
  user: { 
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
     required: true
    },
  alertType: {
    type: String,
    enum: ["high sugar", "low fiber", "high calories", "balanced", "risk alert"],
  },
  message: {
     type: String
    },
  triggeredAt: { 
    type: Date,
    default: Date.now
   },
});

export default mongoose.model("HealthAlert", healthAlertSchema);
