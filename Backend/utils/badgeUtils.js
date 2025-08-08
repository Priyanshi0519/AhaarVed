import User from '../models/userModel.js';

export const checkAndAwardBadges = async (userId) => {
  const user = await User.findById(userId);
  if (!user) return;

  const badgesToAward = [];

  const createdDaysAgo = Math.floor((Date.now() - new Date(user.createdAt)) / (1000 * 60 * 60 * 24));

  const badgeConditions = [
    { day: 30, name: 'One Month Champ', reason: 'Active for 30 days since registration' },
    { day: 100, name: 'Century Hero', reason: '100 days on the platform!' },
    { day: 150, name: 'Consistency Legend', reason: 'Used the platform for 150 days' },
    { day: 365, name: 'Loyalty Star', reason: '1 full year of dedication!' }
  ];

  badgeConditions.forEach(badge => {
    const alreadyHas = user.badges.some(b => b.name === badge.name);
    if (createdDaysAgo >= badge.day && !alreadyHas) {
      badgesToAward.push({
        name: badge.name,
        reason: badge.reason
      });
    }
  });

  if (badgesToAward.length > 0) {
    badgesToAward.forEach(b => user.badges.push(b));
    await user.save();
  }
};
