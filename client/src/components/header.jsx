import { useCallback } from "react";
import styles from "./DashboardContainer.module.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const DashboardContainer = () => {

  const navigate = useNavigate();

  const navigateToRoot = useCallback(() => {
    navigate('/');
  }, [navigate]);
  

  return (
    <div className={styles.header}>
      <img
        className={styles.headerdividinglineIcon}
        alt=""
        src="/headerdividingline@2x.png"
      />
      <div className={styles.admin}>
       <Link to="/AdminDashboard"> <h2 className={styles.dashboard}>Dashboard</h2></Link>
        <div className={styles.menu}>
          <button className={styles.leaves1} >
          <Link to="/LeavesAppr">
              Leaves
            </Link>
          </button>
          <Link to="/AdminLeadPage">
          <button className={styles.leads}>
            Leads
          </button>
          </Link>
          <Link to="/EmployeePage">
          <button className={styles.employee} autoFocus={true}>
            Employee
          </button>
          </Link>
          <Link to="/Performance">
          <button className={styles.performance} autoFocus={true}>
            Performance
          </button>
          </Link>
          <Link to="/Campaigns">
          <button className={styles.camp}>
            Campaign
          </button>
          </Link>
        </div>   
        <div className={styles.avatar}>
          <div className={styles.firstbase} />
          <img className={styles.profileIcon} alt="" src="/profile@2x.png" />
          <div className={styles.online} />
          <div className={styles.employeNameCard}>
            <div className={styles.employeeName}>Rahul Majumdar</div>
            <b className={styles.employeeDesignation}>Director</b>
          </div>
        </div>
        <button className={styles.settings} />
        <button className={styles.onoffSolid} onClick={navigateToRoot}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
      </div>
    </div>
  );
};

export default DashboardContainer;
