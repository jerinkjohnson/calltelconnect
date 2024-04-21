import { useState } from "react";
import { auth } from '../firebase.config.js';
import styles from "./styles/login.module.css";
import { Link, redirect } from "react-router-dom";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const ValidationPleaseEnter10D = () => {

  const [phone, setPhone] = useState("");
  const [showotp, setshowotp] = useState(false);
  const [otp, setotp] = useState("");
  
  
  const handleKeyDown = (e) => {
      if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      e.preventDefault();
    }
  }

    //verify whether captcha window is active
    function onCaptchaVerify(){
      const auth = getAuth();
      if(!window.recaptchaVerifier){
        auth.languageCode = auth.useDeviceLanguage();
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-box', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignin();
          }
        });
      }
    }

    function onSignin(){
      onCaptchaVerify()
      const appVerifier = window.recaptchaVerifier;
      const formatPhone = '+91' + phone;
      console.log(formatPhone);
      const auth = getAuth();


      signInWithPhoneNumber(auth, formatPhone, appVerifier)
        .then((confirmationResult) => {
          console.log("OTP sent to "+phone);
        window.confirmationResult = confirmationResult;
        setshowotp(true);
      // ...
        }).catch((error) => {
      console.log(error)
       });
    }


      function onOTPVerify() {
        window.confirmationResult
          .confirm(otp)
          .then(async (res) => {
            console.log(res);
            window.location.href = "/AdminDashboard"; 
            console.log("User Verified Successfully");
            toast.success('Verified successfully!', {
        
              autoClose: 3000, // Auto close the notification after 3 seconds
            });
            
          })
          .catch((err) => {
            //console.error(err.code, err.message);
            console.log(err)
            toast.error('Failed to Verify. Invalid OTP', {
        
              autoClose: 3000, // Auto close the notification after 3 seconds
            });
          });
      }

  return (
    
    <div className={styles.validationPleaseEnter10D}>
      <div className={styles.calltelconnect} >CalltelConnect</div>
      
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupParent}>
          <div className={styles.logInToCalltelconnectParent}>
            <div className={styles.logInTo}>Log in to CalltelConnect</div>
            
            <div className={styles.toChangePhone}>
              To change phone number, contact the admin
            </div>
            
          </div>
          <img className={styles.saly10Icon} alt="" src="/saly10@2x.png" />
        </div>
        <div className={styles.phoneCall1Parent}>
          <img
            className={styles.phoneCall1Icon}
            alt=""
            src="/phonecall-1.svg"
          />
          <div className={styles.div}>990-997-8137</div>
        </div>
      </div>
      <div id="recaptcha-container"></div>

  {showotp ? ( 
    <>
    
      <div className={styles.validationPleaseEnter10DInner}>
        <div className={styles.groupContainer}>
          <div className={styles.logInParent}>
            <div className={styles.logIn}>Log in</div>
            <div className={styles.enterPhoneNumberForOtpWrapper}>
              <div className={styles.enterPhoneNumber}>
                Enter the OTP received on your device
              </div>
            </div>
          </div>
          <div className="recaptcha-box" id="recaptcha-box"></div>
          <div className={styles.groupDiv}>
            <div className={styles.instanceParent}>
              <div className={styles.phoneParent}>
                <div className={styles.phone}>One Time Password</div>
                <div className={styles.enterYourPhone}>
                  Enter a valid 10 digit phone number
                </div>
                <div className={styles.instanceChild} />
                <img
                  className={styles.message1Icon}
                  alt=""
                  src="/padlock.png"
                />
              </div>
              <div className={styles.enterAValid}>
            </div>
      
        <input
        className={styles.input}
        value={otp}
        type="text"
        onChange={(e) => setotp(e.target.value)}
        onKeyDown={handleKeyDown}
        />
      
        <button 
        onClick={onOTPVerify}
        className={styles.rectangleGroup} >
        <div className={styles.groupItem} />
        
        <div className={styles.sendOtp}>Verify</div>
        </button>
      
          </div>
          </div>
          
        </div>
      </div>
    </>    

  ) : ( 
  //false statement
  <>
    <div className={styles.validationPleaseEnter10DInner}>
        <div className={styles.groupContainer}>
          <div className={styles.logInParent}>
            <div className={styles.logIn}>Log in</div>
            <div className={styles.enterPhoneNumberForOtpWrapper}>
              <div className={styles.enterPhoneNumber}>
                Enter phone number for OTP
              </div>
            </div>
          </div>
          <div className="recaptcha-box" id="recaptcha-box"></div>
          <div className={styles.groupDiv}>
            <div className={styles.instanceParent}>
              <div className={styles.phoneParent}>
                <div className={styles.phone}>Phone</div>
                <div className={styles.enterYourPhone}>
                  Enter a valid 10 digit phone number
                </div>
                <div className={styles.instanceChild} />
                <img
                  className={styles.message1Icon}
                  alt=""
                  src="/message-1.svg"
                />
              </div>
              <div className={styles.enterAValid}>
            </div>
      
      <input
        className={styles.input}
        value={phone}
        type="text"
        onChange={(e) => setPhone(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      <button 
      onClick={onSignin}
      className={styles.rectangleGroup} >
        <div className={styles.groupItem} />
        
        <div className={styles.sendOtp}>Send OTP</div>
      </button>
      
          </div>
          </div>
          
        </div>
      </div>
  </>
  )};
</div>
  )};
export default ValidationPleaseEnter10D;