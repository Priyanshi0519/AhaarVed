import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';


export const getUserProfile = (req, res) => {
  const user = req.user;

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    age: user.age,
    gender: user.gender,
    height: user.height,
    weight: user.weight,
    conditions: user.conditions,
    rewards: user.rewards,
    createdAt: user.createdAt
  });
};


export const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.age = req.body.age ?? user.age;
  user.gender = req.body.gender || user.gender;
  user.height = req.body.height ?? user.height;
  user.weight = req.body.weight ?? user.weight;
  user.conditions = req.body.conditions || user.conditions;

  if (req.body.rewards) {
    user.rewards = req.body.rewards;
  }

  const updatedUser = await user.save();

  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    age: updatedUser.age,
    gender: updatedUser.gender,
    height: updatedUser.height,
    weight: updatedUser.weight,
    conditions: updatedUser.conditions,
    rewards: updatedUser.rewards,
    createdAt: updatedUser.createdAt
  });
};


export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id).select('+password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.user._id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json({ message: 'User deleted successfully' });
};

export const getUserBadges = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('badges');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ badges: user.badges });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



