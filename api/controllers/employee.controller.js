import Employee from "../models/login.model.js";

export const employeeData = async (req, res) => {
  try {
    const employees = await Employee.find({}, { name:1, address:1,employment_type:1, date_of_join:1,contact_number:1,date_of_birth:1, employeeId:1});
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
