import { useCallback } from "react";
import styles from "../styles/Leaves.module.css";
import Empheader from "../../components/Empheader"
import {Link} from "react-router-dom"

const Leaves = () => {
  const onRectangleButtonClick = useCallback(() => {
    // Please sync "Request for leave" to the project
  }, []);

  const onViewAttendanceClick = useCallback(() => {
    // Please sync "View Attendance Button" to the project
  }, []);

  const onLeadsClick = useCallback(() => {
    // Please sync "Lead Capture Page" to the project
  }, []);

  const onPerformanceClick = useCallback(() => {
    // Please sync "Performance Page" to the project
  }, []);

  return (
    <div className={styles.leaves}>
      <a
        className={styles.calltellogolink}
        href="https://calltelinfosolutions.com/"
        target="_blank"
      >
        <img className={styles.saly10Icon} alt="" src="/saly10@2x.png" />
      </a>
      <div className={styles.navigation}>
        <div className={styles.request} />
        <Link to="/Reqleave">
        <button
          className={styles.navigationChild}
          autoFocus={true}
          onClick={onRectangleButtonClick}
        />
        </Link>
        <div className={styles.requestLeave}>Request leave</div>
      </div>
      <div className={styles.heroSectionLeave}>
        <div className={styles.halfLeave}>
          <div className={styles.halfLeaveChild} />
          <div className={styles.lessThanYesterdayParent}>
            <div className={styles.lessThanYesterday}>
              -10% Less than yesterday
            </div>
            <div className={styles.groupChild} />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.halfLeave1}>Half Leave</div>
          <div className={styles.div}>2</div>
          <div className={styles.halfLeaveItem} />
          <img
            className={styles.materialSymbolsbedtimeOutliIcon}
            alt=""
            src="/materialsymbolsbedtimeoutline.svg"
          />
        </div>
        <div className={styles.casualLeave}>
          <div className={styles.casualleaverectangle} />
          <div className={styles.casualLeave1}>{`Casual Leave `}</div>
          <div className={styles.increaseThanYesterday}>
            +3% Increase than yesterday
          </div>
          <div className={styles.div}>1</div>
          <div className={styles.casualLeaveChild} />
          <div className={styles.casualLeaveItem} />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        </div>
        <div className={styles.timeOffHrs}>
          <div className={styles.timeOffHrsChild} />
          <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
          <div className={styles.timeOffHrsItem} />
          <div className={styles.increaseThanLast}>
            3% Increase than last month
          </div>
          <div className={styles.timeOffHrsInner} />
          <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
          <div className={styles.timeOff}>Time-off</div>
          <div className={styles.h}>120h</div>
          <div className={styles.ellipseDiv} />
          <img
            className={styles.fluentMdl2dateTime12Icon}
            alt=""
            src="/datetime@2x.png"
          />
        </div>
        <div className={styles.sickLeaveTaken}>
          <img
            className={styles.sickLeaveTakenChild}
            alt=""
            src="/rectangle-28@2x.png"
          />
          <div className={styles.lessThanYesterday1}>
            -10% Less than yesterday
          </div>
          <div className={styles.sickLeaveTakenItem} />
          <img className={styles.vectorIcon5} alt="" src="/vector.svg" />
          <div className={styles.sickLeaveTaken1}>Sick Leave taken</div>
          <div className={styles.div2}>1</div>
          <div className={styles.halfLeaveItem} />
          <img
            className={styles.materialSymbolsavgTimeOutlIcon}
            alt=""
            src="/time.svg"
          />
        </div>
        <div className={styles.paidLeave}>
          <div className={styles.paidLeaveTaken}>
            <div className={styles.timeOffHrsItem} />
            <div className={styles.increaseThanYesterday1}>
              +3% Increase than yesterday
            </div>
            <div className={styles.paidLeaveTakenItem} />
            <img className={styles.vectorIcon6} alt="" src="/arrrow down.svg" />
            <div className={styles.paidLeave1}>Paid Leave</div>
            <div className={styles.div3}>1</div>
            <div className={styles.ellipseDiv} />
            <img
              className={styles.mdiweatherTimeIcon}
              alt=""
              src="/mdiweathertime.svg"
            />
          </div>
        </div>
        <div className={styles.totalLeaveSection}>
          <div className={styles.casualleaverectangle} />
          <div className={styles.totalLeaves}>Total Leaves</div>
          <div className={styles.totalleavenumber}>6</div>
          <div className={styles.personhead2} />
          <img className={styles.personbodyIcon} alt="" src="/personbody.svg" />
          <img className={styles.personheadIcon} alt="" src="/personhead.svg" />
          <img className={styles.personicon} alt="" src="/personicon.svg" />
        </div>
        <img
          className={styles.heroSectionLeaveChild}
          alt=""
          src="/rectangle-27.svg"
        />
        <div className={styles.realtimeInsight}>
          <div className={styles.today10thJanuaryContainer}>
            <p className={styles.today}>{`Today: `}</p>
            <p className={styles.today}>10th January 2024</p>
          </div>
          <div className={styles.realtimeInsight1}>Realtime Insight</div>
          <div className={styles.am}>8:02:09 AM</div>
          <a className={styles.viewattendance} onClick={onViewAttendanceClick}>
            <div className={styles.viewAttendence}>View Attendence</div>
          </a>
          <img className={styles.sunvectorIcon} alt="" src="/sunvector.svg" />
        </div>
      </div>
    <Empheader />
    </div>
  );
};

export default Leaves;
