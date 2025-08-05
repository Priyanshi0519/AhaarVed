import app from './app';
import dotenv from 'dotenv';
import connectDB from './config/db';


dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`AhaarVed server running on port ${PORT}`);
});
