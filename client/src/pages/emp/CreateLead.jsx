import { useCallback } from "react";
import styles from "../styles/CreateLead.module.css";
import Empheader from "../../components/Empheader";
import {Link} from 'react-router-dom';

const CreateLead = () => {
  const onFrameButtonClick = useCallback(() => {
    // Please sync "Lead Submitted" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "Create Lead" to the project
  }, []);

  return (
    <div className={styles.createLead}>
      <main className={styles.formFrame}>
        <section className={styles.formFrameChild} />
        <img
          className={styles.businessSolutionrafikiIcon}
          alt=""
          src="/PuzzleIcon@2x.png"
        />
        <img
          className={styles.formFrameItem}
          alt=""
          src="/rectangle-6454.svg"
        />
        <h1 className={styles.campLejeuneLead}>
          CAMP LEJEUNE LEAD CAPTURE FORM
        </h1>
        <i className={styles.priorityCampaign}>PRIORITY CAMPAIGN</i>
        <Link to="/Emplead">
        <button className={styles.submitWrapper} onClick={onFrameButtonClick}>
          <div className={styles.submit}>SUBMIT</div>
        </button>
        </Link>
        <Link to="/Emplead">
        <button className={styles.submitButton}>
          <div
            className={styles.submitButtonChild}
            onClick={onRectangleClick}
          />
          <div className={styles.back}>BACK</div>
        </button>
        </Link>
        <div className={styles.wereTheyLivingOrWorkingAtParent}>
          <div className={styles.wereTheyLiving}>
            Were they Living or working at Camp Lejeune?
          </div>
          <div className={styles.anyMedicalDiagnosis}>
            Any Medical Diagnosis
          </div>
          <div className={styles.wereTheyLiving}>
            <span className={styles.areYouCurrentlyContainer1}>
              <p className={styles.areYouCurrently}>
                Are you currently being represented by an attorney?
              </p>
            </span>
          </div>
        </div>
        <div className={styles.agentName}>Agent Name</div>
        <div className={styles.formFrameInner}>
          <div className={styles.frameParent}>
            <input className={styles.frameChild} type="text" />
            <div className={styles.mustBeYes}>Must be Yes</div>
            <div className={styles.fieldCannotBe}>Field cannot be empty</div>
            <div className={styles.shouldBeNo}>Should be no</div>
            <input className={styles.frameItem} type="text" />
            <input className={styles.frameInner} type="text" />
          </div>
        </div>
        <div className={styles.selectAgent}>Select Agent</div>
        <select
          className={styles.agentName1}
          required={true}
          name="Select Agent Name"
        >
          <option value="Select Agent">Agent 1</option>
          <option value="Agent 2">Agent 2</option>
          <option value="Agent 3">Agent 3</option>
          <option value="Agent 4">Agent 4</option>
          <option value="Agent 5">Agent 5</option>
        </select>
      </main>
    </div>
  );
};

export default CreateLead;
