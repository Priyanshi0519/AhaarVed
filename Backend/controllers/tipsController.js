import Tip from '../models/tipsModel.js';

// Get diet tips
export const getDietTips = async (req, res) => {
  try {
    const tips = await Tip.find();
    res.status(200).json({ success: true, tips });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching tips.', error });
  }
};
