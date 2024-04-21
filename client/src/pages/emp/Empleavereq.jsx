import { useCallback } from "react";
import styles from "../styles/RequestForLeaveValidation.module.css";
import {Link} from 'react-router-dom';

const RequestForLeaveValidation = () => {
  const onFrameButtonClick = useCallback(() => {
    // Please sync "Leave Request Submitted" to the project
  }, []);

  const onCloseButtonClick = useCallback(() => {
    // Please sync "Leaves" to the project
  }, []);

  return (
    <div className={styles.requestForLeaveValidation}>
      <div className={styles.leaveRequestParent}>
        <div className={styles.leaveRequest}>Leave request</div>
        <div className={styles.type}>Type</div>
        <div className={styles.startDate}>Start Date</div>
        <div className={styles.endDate}>End date</div>
        <div className={styles.reason}>{`Reason `}</div>
        <select className={styles.sickLeaveParent}>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Paid Leave">Paid Leave</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Half Day">Half Day</option>
        </select>
        <input className={styles.frameChild} type="text" />
        <input className={styles.frameChild} type="text" />
        <input className={styles.frameChild} type="text" />
        <input className={styles.frameChild} type="text" />
        <input className={styles.frameChild1} type="text" />
        <div className={styles.rectangleDiv} />
        <textarea className={styles.enterYourReason} />
        <Link to="/Empleave">
        <button className={styles.doneWrapper} onClick={onFrameButtonClick}>
          <div className={styles.done}>Done</div>
        </button>
        </Link>
        <button className={styles.closeButton} onClick={onCloseButtonClick}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
        <div className={styles.leaveTypeRequired}>Leave type required*</div>
        <div className={styles.dateInvalid}>Date Invalid</div>
        <div className={styles.invalidEndDate}>Invalid End Date</div>
        <div className={styles.fieldCannotBe}>Field cannot be empty</div>
      </div>
    </div>
  );
};

export default RequestForLeaveValidation;
