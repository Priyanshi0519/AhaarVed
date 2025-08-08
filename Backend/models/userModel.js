import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'other']
    },
    height: {
        type: Number,
        min: 0
    },
    weight: {
        type: Number,
        min: 0
    },
    conditions: [{
        type: String,
        enum: ['diabetes', 'obesity','heart disease','bp', 'none']
    }],
    rewards: {
        type: Number,
        default: 0
    },
    badges: [{
    name: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    awardedAt: {
        type: Date,
        default: Date.now
    }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
    },{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;
