import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import loginRouter from './routes/login.route.js';
import { employeeData } from './controllers/employee.controller.js';
import Employee from './models/login.model.js';




mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB Connected Successfully');
})
.catch((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/api/recordCount', async (req, res) => {
    try {
      const count = await Employee.countDocuments(); // Replace YourModel with your Mongoose model
      res.json({count});
    } catch (error) {
      console.error('Error getting record count:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.use('/login', loginRouter);

app.use('/employee', employeeData);

