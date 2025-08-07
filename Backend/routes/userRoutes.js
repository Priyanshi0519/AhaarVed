import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  changePassword,
  deleteUser
} from '../controllers/userController.js';

import authenticateUser  from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', authenticateUser, getUserProfile);
router.put('/profile', authenticateUser, updateUserProfile);
router.put('/change-password', authenticateUser, changePassword);
router.delete('/delete-account', authenticateUser, deleteUser);

export default router;