import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: Number,
        unique: true,
      },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    date_of_join: {
        type: Date,
        required: true,
    },
    emergency_contact: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    contact_number: {
        type: String,
        required: true,
    },
    employment_type: {
        type: String,
        required: true,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    blood_group: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    reference: {
        type: String,
    }

}, {timestamps: true});

employeeSchema.pre('save', function (next) {
    if (!this.employeeId) {
      this.employeeId = generateRandomEmployeeId();
    }
    next();
  });
  
  // Function to generate a random 4-digit number
  function generateRandomEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000);
  };

const Employee = mongoose.model('Employee',employeeSchema, 'employeeMaster');

export default Employee;