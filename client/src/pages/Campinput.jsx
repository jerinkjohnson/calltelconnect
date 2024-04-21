
import styles from "./styles/Campinput.module.css";
import Header from "../components/header"
import { useState } from "react";

const CampaingInputByAdmin = () => {
  const [name,setCampName] = useState('')
  console.log(name)
  
  const sendData = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:3000/login/pottan',{
      method: 'post',
      body: JSON.stringify({name}),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    console.log(result);
  }

  return (
    <div className={styles.campaingInputByAdmin}>
      <Header />
      <img
        className={styles.campaingInputByAdminChild}
        alt=""
        src="/line-2.svg"
      />
      <img className={styles.saly10Icon} alt="" src="/saly10@2x.png" />
      
      <label className={styles.addCampaignWrapper}>
        <div className={styles.addCampaign}>Add Campaign</div>
      </label>
      <button className={styles.saveCampaignWrapper} onClick={sendData}>
        <div className={styles.saveCampaign}>Save Campaign</div>
      </button>
      <input type="text"
        className={styles.campaingInputByAdminItem}
        placeholder="Solar Mortgage"
        width="256px"
        w="256px"
        value={name}
        onChange={(e) => setCampName(e.target.value)}
      />
      <input type="text"
        className={styles.campaingInputByAdminInner}
        placeholder="$20,000"
        width="256px"
        w="256px"
        
      />
      <input type="text"
        className={styles.frameInput}
        placeholder="60 Dollars Per Lead"
        width="256px"
        w="256px"
      />
      <input type="text" 
        className={styles.campaingInputByAdminChild1}
        placeholder="$980"
        width="256px"
        w="256px"
      />
      <label className={styles.campaignName}>Campaign Name</label>
      <label className={styles.targetRevenue}>Target Revenue</label>
      <label className={styles.perLead}>$ per Lead</label>
      <label className={styles.monthly}>Monthly</label>
    </div>
  );
};

export default CampaingInputByAdmin;
