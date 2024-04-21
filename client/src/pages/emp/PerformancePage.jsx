import { useCallback } from "react";
import styles from "../styles/PerformancePage.module.css";
import Empheader from "../../components/Empheader"

const PerformancePage = () => {
  const onDashboardClick = useCallback(() => {
    // Please sync "Employee Dashboard" to the project
  }, []);

  return (
    <div className={styles.performancePage}>
      <Empheader />
      <div className={styles.frame5}>
        <div className={styles.monthYear}>
          <i className={styles.jan2024}>Jan 2024</i>
          <img
            className={styles.arrowUpRightUndefinedG}
            alt=""
            src="/arrow-up-right--undefined--glyph-undefined.svg"
          />
        </div>
        <div className={styles.helloLalitBelieveContainer}>
          <span className={styles.helloLalitBelieveContainer1}>
            <p className={styles.helloLalit}>Hello Lalit!</p>
            <p className={styles.believeYouCan}>
              Believe you can and you're halfway there. - Theodore Roosevelt
            </p>
          </span>
        </div>
        <div className={styles.performanceTrackerWrapper}>
          <button className={styles.performanceTracker} autoFocus={true}>
            <span className={styles.performanceTrackerTxtContainer}>
              <p className={styles.performance1}>Performance</p>
              <p className={styles.tracker}>Tracker</p>
            </span>
          </button>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameChild} />
        <button className={styles.todaysLead} autoFocus={true}>
          Today’s Lead
        </button>
        <div className={styles.percentageframe}>
          <img
            className={styles.percentagepolygonIcon}
            alt=""
            src="/polygon@2x.png"
          />
          <div className={styles.percentage}>
            <div className={styles.div}>75%</div>
          </div>
        </div>
        <div className={styles.div1}>3</div>
        <div className={styles.progressbar}>
          <div className={styles.progressbar1} />
        </div>
      </div>
      <div className={styles.pendingLeads}>
        <div className={styles.pendingLeadsChild} />
        <button className={styles.pendingLeads1} autoFocus={true}>
          Pending Leads
        </button>
        <div className={styles.div2}>7</div>
        <div className={styles.percentage1}>
          <div className={styles.div}>75%</div>
        </div>
        <div className={styles.progressbar2}>
          <div className={styles.progressbar1} />
        </div>
      </div>
      <div className={styles.yay}>
        <button className={styles.yesterdaysLead} autoFocus={true}>
          Yesterday’s Lead
        </button>
        <img
          className={styles.percentagepolygonIcon1}
          alt=""
          src="/polygon1@2x.png"
        />
        <div className={styles.percentage2}>
          <div className={styles.div}>75%</div>
        </div>
        <div className={styles.progressbar4} />
        <div className={styles.progressbar}>
          <div className={styles.progressbar1} />
        </div>
        <div className={styles.div5}>10</div>
      </div>
      <div className={styles.today}>
        <img className={styles.todayChild} alt="" src="/rectangle-6463.svg" />
        <button className={styles.dayBeforeYesterday} autoFocus={true}>
          Day before yesterday
        </button>
        <div className={styles.percentageframe1}>
          <img
            className={styles.percentagepolygonIcon}
            alt=""
            src="/polygon1@2x.png"
          />
          <div className={styles.percentage}>
            <div className={styles.div}>98%</div>
          </div>
        </div>
        <div className={styles.progressbar7}>
          <div className={styles.progressbar8} />
        </div>
        <div className={styles.div7}>9</div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameItem} alt="" src="/rectangle-6464.svg" />
        <div className={styles.scored}>Scored</div>
        <div className={styles.leadsThisMonthContainer}>
          <span className={styles.helloLalitBelieveContainer1}>
            <span className={styles.leadsThisMont}>Leads this mont</span>
            <span className={styles.h}>h</span>
          </span>
        </div>
        <div className={styles.div8}>12</div>
        <div className={styles.percentageframe2}>
          <img
            className={styles.percentagepolygonIcon}
            alt=""
            src="/polygon1@2x.png"
          />
          <div className={styles.percentage}>
            <div className={styles.div}>38%</div>
          </div>
        </div>
        <div className={styles.progressbar9}>
          <div className={styles.progressbar10} />
        </div>
        <button className={styles.monthlyLeads} autoFocus={true}>
          Monthly Leads
        </button>
      </div>
      <img
        className={styles.performanceOverviewrafikiIcon}
        alt=""
        src="/performanceoverviewrafiki.svg"
      />
    </div>
  );
};

export default PerformancePage;
