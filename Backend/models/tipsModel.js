import mongoose from "mongoose";

const tipSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["diabetes", "general", "diet", "weight loss", "sugar control"],
  },
  message: {
    type: String,
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

export default mongoose.model("Tip", tipSchema);
