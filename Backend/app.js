import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import rewardRoutes from './routes/rewardRoutes.js';
import riskRoutes from './routes/riskRoutes.js';
import tipsRoutes from './routes/tipsRoutes.js';
import healthRecordRoutes from './routes/healthRecordRoutes.js';
import nutritionRoutes from './routes/nutritionRoutes.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.use('/api/rewards', rewardRoutes);
app.use('/api/risk', riskRoutes);
app.use('/api/tips', tipsRoutes);
app.use('/api/health', healthRecordRoutes);
app.use('/api/nutrition', nutritionRoutes);

export default app;