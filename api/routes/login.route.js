import express from 'express';
import {loginData} from '../controllers/login.controller.js'
import Employee from "../models/login.model.js";
import { employeeData } from '../controllers/employee.controller.js';

const router = express.Router();

router.post("/pottan", loginData);

router.get('/all', employeeData);

router.get('/lead', )
  

export default router;
