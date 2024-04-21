import { useCallback } from "react";
import styles from "./DashboardContainer1.module.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const DashboardContainer = () => {

  const navigate = useNavigate();

  const navigateToRoot = useCallback(() => {
    navigate('/Emplogin');
  }, [navigate]);
  

  return (
    <div className={styles.header}>
      <img
        className={styles.headerdividinglineIcon}
        alt=""
        src="/headerdividingline@2x.png"
      />
      <div className={styles.admin}>
       <Link to="/Empdash"> <h2 className={styles.dashboard}>Dashboard</h2></Link>
        <div className={styles.menu}>
        <Link to="/Empleave">
          <button className={styles.leaves1} >
          
              Leaves
            
          </button>
          </Link>
          <Link to="/Emplead">
          <button className={styles.leads}>
            Leads
          </button>
          </Link>
          
          <Link to="/EmpPerformance">
          <button className={styles.performance} autoFocus={true}>
            Performance
          </button>
          </Link>
          
        </div>   
        <div className={styles.avatar}>
          <div className={styles.firstbase} />
          <img className={styles.profileIcon} alt="" src="/profile@2x.png" />
          <div className={styles.online} />
          <div className={styles.employeNameCard}>
            <div className={styles.employeeName}>Lalit Sharma</div>
            <b className={styles.employeeDesignation}>Employee</b>
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
