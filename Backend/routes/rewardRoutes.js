import express from 'express';
import {
  addRewardPoints,
  redeemReward,
  getUserRewards,
} from '../controllers/rewardController.js';

const router = express.Router();

router.post('/add', addRewardPoints);
router.post('/redeem', redeemReward);
router.get('/user/:userId', getUserRewards);

export default router;
