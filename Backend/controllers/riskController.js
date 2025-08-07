import HealthAlert from '../models/healthAlertModel.js';

// Generate risk report
export const generateRiskReport = async (req, res) => {
  try {
    const { userId, risks } = req.body;

    const report = new HealthAlert({ user: userId, risks });
    await report.save();

    res.status(201).json({ success: true, message: 'Risk report saved.', report });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error generating report.', error });
  }
};