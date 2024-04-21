import styles from "./styles/ViewLeaveByAdmin.module.css";
import Header from "../components/header";
import {Link} from "react-router-dom";
 
const ViewLeaveByAdmin = () => {
  return (
    <div className={styles.viewLeaveByAdmin}>
      
      <div className={styles.formFrame}>
      <Header />
        <div className={styles.formFrameChild} />
        <img
          className={styles.formFrameItem}
          alt=""
          src="/rectangle-6454.svg"
        />
        <label className={styles.leaveApplication}>Leave Application</label>
        <Link to="/AdminLeadPage">
        <button className={styles.submitButton}>
          <div className={styles.submitButtonChild} />
          <div className={styles.close}>Close</div>
        </button>
        </Link>
        <div className={styles.reasonParent}>
          <label className={styles.reason}>Reason</label>
          <div className={styles.frameChild} />
        </div>
        <label className={styles.startDate}>Start Date</label>
        
        <div className={styles.employeeNameParent}>
          <label className={styles.employeeName}>Employee Name</label>
          <label className={styles.leaveType}>Leave Type</label>
        </div>
        <label className={styles.endDate}>End Date</label>
        
        <label className={styles.feb20241}>5 Feb, 2024</label>
        <div className={styles.frameParent}>
          <div className={styles.vectorGroup}>
            
            <label className={styles.lalitSharma}>Lalit Sharma</label>
          </div>
          <div className={styles.vectorContainer}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-6455.svg"
            />
            <label className={styles.sickLeave}>Sick Leave</label>
          </div>
          <input className={styles.frameInput} type="text" />
          
          <label className={styles.dearSirI}>
            Dear Sir, I am applying to inform you that I cannot make it to the
            office today as I have come down with a case of flu. I am assuming
            the flu will take at least 3 days to go away. Thus, I will be back
            to the office on Monday.
          </label>
        </div>
        <div className={styles.menuItemWrapper}>
          <div className={styles.menuItem}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <label className={styles.lalitSharma1}>Lalit Sharma</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewLeaveByAdmin;
