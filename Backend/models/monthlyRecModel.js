import mongoose from "mongoose";

const monthlyRecordSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    month:{
        type: String,
    },
    totalCalories: {
        type: Number,
    },
    totalSugar: {
        type: Number,
    },
    totalFiber: {
        type: Number,
    },
    daysTracked: {
        type: Number,
    },
    avgCaloriesPerDay: {
        type: Number,
    },
    avgSugarPerDay: {
        type: Number,
    },
    avgFiberPerDay: {
        type: Number,
    }
},{timestamps: true});

export default mongoose.model("NutritionRecord", monthlyRecordSchema);