import { useCallback } from "react";
import styles from "../styles/LeadCapturePage.module.css";
import Empheader from "../../components/Empheader";
import {Link } from 'react-router-dom';

const LeadCapturePage = () => {
  

  return (
    <div className={styles.leadCapturePage}>
       <Empheader />
      <div className={styles.hiLalitSharmaParent}>
       
        <button className={styles.hiLalitSharma} autoFocus={true}>
          Hi, Lalit Sharma!
        </button>
        <button className={styles.createLead} >
         
        </button>
        <Link to="/CreateLead">
        <button className={styles.createLead1} >
          <img className={styles.plusIcon} alt="" src="/plus-icon.svg" />
          <div className={styles.createLeadChild} />
          <div className={styles.createLeadWrapper}>
            <div className={styles.editLead}>CREATE LEAD</div>
          </div>
        </button>
        </Link>
      </div>
      <img className={styles.leadCapturePageChild} alt="" src="/line-55.svg" />
      <div className={styles.id}>
        <div className={styles.id1}>ID</div>
        <div className={styles.div}>4</div>
        <div className={styles.div}>0</div>
        <div className={styles.div}>2</div>
        <div className={styles.div}>2</div>
        <div className={styles.div}>3</div>
        <div className={styles.div}>4</div>
        <div className={styles.div}>1</div>
        <div className={styles.div}>5</div>
      </div>
      <div className={styles.cname}>
        <div className={styles.customerName}>Customer Name</div>
        <div className={styles.savannahNguyen}>Savannah Nguyen</div>
        <div className={styles.savannahNguyen}>Dianne Russell</div>
        <div className={styles.savannahNguyen}>Annette Black</div>
        <div className={styles.savannahNguyen}>Esther Howard</div>
        <div className={styles.savannahNguyen}>Cameron Williamson</div>
        <div className={styles.savannahNguyen}>Arlene McCoy</div>
        <div className={styles.savannahNguyen}>Brooklyn Simmons</div>
        <div className={styles.savannahNguyen}>Wade Warren</div>
      </div>
      <div className={styles.address}>
        <div className={styles.addressInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.zipParent}>
              <div className={styles.zip}>Zip</div>
              <div className={styles.parent}>
                <div className={styles.div8}>45463</div>
                <div className={styles.div9}>32116</div>
                <div className={styles.div10}>68545</div>
                <div className={styles.div11}>47481</div>
                <div className={styles.div12}>40322</div>
                <div className={styles.div13}>19897</div>
                <div className={styles.div14}>97133</div>
                <div className={styles.div15}>14355</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.state}>
        <div className={styles.phone}>State</div>
        <div className={styles.pennsylvania}>Pennsylvania</div>
        <div className={styles.pennsylvania}>Maine</div>
        <div className={styles.pennsylvania}>Illinois</div>
        <div className={styles.pennsylvania}>Florida</div>
        <div className={styles.pennsylvania}>State</div>
        <div className={styles.pennsylvania}>State</div>
        <div className={styles.pennsylvania}>State</div>
        <div className={styles.pennsylvania}>State</div>
      </div>
      <div className={styles.city}>
        <div className={styles.phone}>Phone</div>
        <div className={styles.div16}>(225) 555-0118</div>
        <div className={styles.div16}>(208) 555-0112</div>
        <div className={styles.div16}>(808) 555-0111</div>
        <div className={styles.div16}>(209) 555-0104</div>
        <div className={styles.div16}>(302) 555-0107</div>
        <div className={styles.div16}>(307) 555-0133</div>
        <div className={styles.div16}>(702) 555-0122</div>
        <div className={styles.div16}>(217) 555-0113</div>
      </div>
      <div className={styles.lesdStatus}>
        <div className={styles.leadStatus}>Lead Status</div>
        <div className={styles.rejected}>Rejected</div>
        <div className={styles.rejected}>Rejected</div>
        <div className={styles.approved}>Approved</div>
        <div className={styles.rejected}>Rejected</div>
        <div className={styles.approved}>Approved</div>
        <div className={styles.pending}>Pending</div>
        <div className={styles.approved}>Approved</div>
        <div className={styles.pending}>Pending</div>
      </div>
      <div className={styles.progressbase6} />
    </div>
  );
};

export default LeadCapturePage;
