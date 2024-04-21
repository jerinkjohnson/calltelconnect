import styles from "./styles/AdminCampaignPage.module.css";
import {Link} from 'react-router-dom';
import Header from '../components/header'

const AdminLeadPage = () => {
  return (
    <div className={styles.adminLeadPage}>
      <Header />
      <img className={styles.adminLeadPageChild} alt="" src="/line-2.svg" />
      <img className={styles.saly10Icon} alt="" src="/saly10@2x.png" />
      <Link to="/Campform">
      <button className={styles.addCampaignWrapper}>
        <div className={styles.addCampaign}>Add Campaign</div>
      </button>
      </Link>
      <Link to="/camp1">
      <div className={styles.campaign1}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-28.svg" />
          <div className={styles.groupItem} />
          <label className={styles.campLejeune}>Camp Lejeune</label>
          <label className={styles.campaign11}>Campaign 1</label>
        </div>
      </div>
      </Link>
      <Link to="/camp2">
      <div className={styles.campaign2}>
        <div className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/rectangle-28.svg" />
          <div className={styles.groupItem} />
          <label className={styles.campLejeune}>Solar Mortgage</label>
          
          <label className={styles.campaign11}>Campaign 2</label>
        </div>
        
      </div>
      </Link>
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
      
    </div>
  );
};

export default AdminLeadPage;
