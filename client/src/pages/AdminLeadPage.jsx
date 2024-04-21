import styles from "./styles/AdminLeadPage.module.css";
import {Link} from 'react-router-dom';
import Header from '../components/header'

const AdminLeadPage = () => {
  return (
    <div className={styles.adminLeadPage}>
      <Header />
      <img className={styles.adminLeadPageChild} alt="" src="/line-2.svg" />
      <img className={styles.saly10Icon} alt="" src="/saly10@2x.png" />
      
      <div className={styles.campaign1}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-28.svg" />
          <div className={styles.groupItem} />
          <label className={styles.campLejeune}>Camp Lejeune</label>
          <label className={styles.todaysLead}>Today’s Lead - 3</label>
          <label className={styles.lastMonth}>Last Month - 32 Leads</label>
          <label className={styles.campaign11}>Campaign 1</label>
        </div>
        <Link to = "/camp1">
        <button className={styles.viewLeadsWrapper}>
          <div className={styles.viewLeads}>View Leads</div>
        </button>
        </Link>
      </div>
      <div className={styles.campaign2}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-28.svg" />
          <div className={styles.groupItem} />
          <label className={styles.campLejeune}>Solar Mortage</label>
          <label className={styles.todaysLead}>Today’s Lead - 3</label>
          <label className={styles.lastMonth}>Last Month - 32 Leads</label>
          <label className={styles.campaign11}>Campaign 2</label>
        </div>
        <Link to="/camp2">
        <button className={styles.viewLeadsWrapper}>
          <div className={styles.viewLeads}>View Leads</div>
        </button>
        </Link>
      </div>
      <img
        className={styles.addedCampaignVector}
        alt=""
        src="/added-campaign-vector.svg"
      />
      <img
        className={styles.addedCampaignVector1}
        alt=""
        src="/added-campaign-vector.svg"
      />
      <div className={styles.dailyTotal18LeadsWrapper}>
        <label className={styles.dailyTotal}>DAILY TOTAL - 18 LEADS</label>
      </div>
    </div>
  );
};

export default AdminLeadPage;
