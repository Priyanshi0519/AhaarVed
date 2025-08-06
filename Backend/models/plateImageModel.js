import mongoose from "mongoose";

const plateImageSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true 
    },
  imageUrl: {
     type: String,
     required: true 
    },
  cloudinaryId: String,
  uploadedAt: { type: Date,
     default: Date.now 
    },
  analysis: {
    calories: Number,
    carbs: Number,
    proteins: Number,
    fats: Number,
    sugar: Number,
    fiber: Number,
    sodium: Number,
    // optionally breakdown by item
    foodItems: [
      {
        name: String,
        calories: Number,
        portion: String,
      },
    ],
  },
});

export default mongoose.model("PlateImage", plateImageSchema);
