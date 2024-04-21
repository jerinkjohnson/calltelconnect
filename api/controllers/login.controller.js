import Employee from "../models/login.model.js";


export const loginData = async (req, res) => {
   const { employeeName, address, joinDate, emergencyContact, zipcode, phoneNumber, employment, dob, bloodGroup, email, reference } = req.body;
   try{ 
   const newEmployee = new Employee({ 
      name: employeeName,
      address: address,
      date_of_join: joinDate,
      emergency_contact: emergencyContact,
      zipcode: zipcode,
      contact_number: phoneNumber,
      employment_type: employment,
      date_of_birth: dob,
      blood_group: bloodGroup,
      email: email,
      //change the required to true
      reference: reference
    }); 
   await newEmployee.save();
   res.status(201).json("Employee added successfully!");
   }catch(error) {
    console.log(error)
   }
 
};