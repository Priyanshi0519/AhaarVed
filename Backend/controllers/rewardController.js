import Reward from '../models/rewardModel.js';
import User from '../models/userModel.js';

// Add reward points to a user's account
export const addRewardPoints = async (req, res) => {
    try {
        const { userId, points, reason } = req.body;

        // 1. Save to Reward Table
        const reward = new Reward({
            user: userId,
            points,
            reason
        });
        await reward.save();

        // 2. Also update the User's rewards array
        await User.findByIdAndUpdate(
        userId,
        { $inc: { rewards: points } }, // increment reward points
        { new: true }
      );


        res.status(201).json({
            success: true,
            message: "Reward points added successfully to both Reward table and User model",
            reward
        });
    } catch (error) {
        console.error("Error adding reward points:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// Redeem points
export const redeemReward = async (req, res) => {
  try {
    const { userId, points } = req.body;

    const user = await User.findById(userId);
    if (!user || user.rewardPoints < points) {
      return res.status(400).json({ success: false, message: 'Insufficient points.' });
    }

    user.rewardPoints -= points;
    await user.save();

    res.status(200).json({ success: true, message: 'Points redeemed.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error redeeming points.', error });
  }
};

// Get user rewards history
export const getUserRewards = async (req, res) => {
  try {
    const { userId } = req.params;
    const rewards = await Reward.find({ user: userId });
    res.status(200).json({ success: true, rewards });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching rewards.', error });
  }
};
