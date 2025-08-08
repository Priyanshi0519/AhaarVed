import Reward from '../models/rewardModel.js';
import User from '../models/userModel.js';

export const addRewardPoints = async (req, res) => {
  try {
    const { userId, points, reason } = req.body;

    const numericPoints = Number(points);
    if (!userId || isNaN(numericPoints)) {
      return res.status(400).json({ success: false, message: "Invalid userId or points" });
    }

    const reward = new Reward({ user: userId, points: numericPoints, reason });
    await reward.save();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $inc: { rewards: numericPoints } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(201).json({
      success: true,
      message: "Reward points added successfully",
      reward,
      updatedUser
    });
  } catch (error) {
    console.error("Error adding reward points:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


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


export const getUserRewards = async (req, res) => {
  try {
    const { userId } = req.params;
    const rewards = await Reward.find({ user: userId });
    res.status(200).json({ success: true, rewards });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching rewards.', error });
  }
};
