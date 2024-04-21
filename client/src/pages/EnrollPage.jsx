import { Input, Select, Stack, Textarea, ChakraProvider } from "@chakra-ui/react";
import styles from "./styles/EnrollPageValidation.module.css";
import { useState } from "react";
import e from "cors";
import Header from "../components/header";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EnrollPageValidation = () => {



  const [employeeName, setEmployeeName] = useState('');
  const [address, setAddress] = useState('');;
  const [joinDate, setJoinInput] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [employment , setemployment] = useState('');
  const [dob, setdob] = useState('');
  const [bloodGroup, setbloodGroup] = useState('');
  const [email, setEmail] = useState('');
  const [reference, setReference] = useState(''); 
  //debug console 
  console.log(employeeName, address, joinDate, emergencyContact, zipcode, phoneNumber, employment, dob, bloodGroup, email, reference);


  const sendData = async (e) => {
    e.preventDefault();
    // Your fetch logic...
    try {
      let result = await fetch('http://localhost:3000/login/pottan', {
        method: 'post',
        body: JSON.stringify({ employeeName, address, joinDate, emergencyContact, zipcode, phoneNumber, employment, dob, bloodGroup, email, reference }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      result = await result.json();
      localStorage.setItem("user", JSON.stringify(result));
      console.log(result);
      // Notify success
      
      toast.success('Profile created successfully!', {
        
        autoClose: 3000, // Auto close the notification after 3 seconds
      });
      window.location.reload();
    } catch (error) {
      // Notify error
      toast.error('Failed to create profile. Please try again later.', {
        
        autoClose: 3000, // Auto close the notification after 3 seconds
      });
      console.error('Error:', error);
    }
  };
  
    

  return (
    <ChakraProvider>
    <div className={styles.enrollPageValidation}>
      <div className={styles.dashboard}>
        <div className={styles.adminDashboard}>
          <Header />
          <div className={styles.plus} />
          <div className={styles.employeeInfo}>
            <div className={styles.employeeInformation}>
              Employee Information
            </div>
          </div>
          <fieldset className={styles.createProfileParent}>
         
          
          <button onClick={sendData} className={styles.createProfile}>
  <div className={styles.createProfile1}>Create Profile</div>
</button>
        
            <label className={styles.addressMandatory}>Address mandatory</label>
            <label className={styles.cannotBeA}>
              Cannot be a date before October 2013
            </label>
            <label className={styles.enterAValid}>Enter a valid Zip Code</label>
          </fieldset>
        </div>
      </div>
      <div className={styles.empl}>
        <div className={styles.phoneNumber}>Employee Name</div>
        <Input className={styles.employeeNameInput} value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}/>
      </div>
      <div className={styles.empl1}>
        <div className={styles.phoneNumber}>Phone Number</div>
        <Input className={styles.employeeNameInput} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
      </div>
      <div className={styles.empl2}>
        <div className={styles.phoneNumber}>Date of Joining</div>
        <Input type="date" className={styles.employeeNameInput} value={joinDate} onChange={(e) => setJoinInput(e.target.value)} />
      </div>
      <div className={styles.empl3}>
        <div className={styles.phoneNumber}>Blood Group</div>
        <Select className={styles.employeeNameInput} value={bloodGroup} onChange={(e) => setbloodGroup(e.target.value)}>
        <option>--select--</option>
        <option value="O-" >O-</option>
        <option value="O+" >O+</option>
        <option value="A-" >A-</option>
        <option value="A+" >A+</option>
        <option value="B-" >B-</option>
        <option value="B+" >B+</option>
        <option value="AB-">AB-</option>
        <option value="AB+">AB+</option>
        </Select>
      </div>
      <div className={styles.empl4}>
        <div className={styles.emergencyContact}>Emergency Contact</div>
        <Input className={styles.employeeNameInput} value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)}/>
      </div>
      <div className={styles.empl5}>
        <div className={styles.emailAddress}>Email Address</div>
        <Input className={styles.frameInput} value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label className={styles.invalidEmailId}>Invalid Email ID</label>
      </div>
      <div className={styles.empl6}>
        <div className={styles.emergencyContact}>Zip Code</div>
        <Input className={styles.employeeNameInput} value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
      </div>
      <div className={styles.reference}>Reference</div>
      <Stack className={styles.wrapper} value={reference} onChange={(e) => setReference(e.target.value)}>
        <Select variant="filled" />
      </Stack>
      <div className={styles.empl7}>
        <div className={styles.phoneNumber}>Address</div>
        <Textarea variant="filled" value={address} onChange={(e) => setAddress(e.target.value)}/>
      </div>
      <div className={styles.empl8}>
        <div className={styles.phoneNumber}>Date of Birth</div>
        <Input type="date" className={styles.employeeNameInput} value={dob} onChange={(e) => setdob(e.target.value)} />
      </div>
      <div className={styles.empl9}>
        <div className={styles.employementType}>Employement Type</div>
        <Select value={employment} onChange={(e) => setemployment(e.target.value)}>
          <option>--select--</option>
          <option value="Part-time">Part-time</option>
          <option value="Full-time">Full-time</option>
        </Select>
      </div>
      <label className={styles.ageCannotBe}>Age cannot be under 18</label>
      <label className={styles.fieldCannotBe}>Field cannot be empty</label>
      <label className={styles.invalidPhoneNumber}>Invalid Phone Number</label>
    </div>
    </ChakraProvider>
  );
};

export default EnrollPageValidation;
