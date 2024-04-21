import { useCallback } from "react";
import styles from "../styles/EmployeeDashboard.module.css";
import Empheader from "../../components/Empheader"
import {Link} from 'react-router-dom';
const EmployeeDashboard = () => {
  const onLeadsClick = useCallback(() => {
    // Please sync "Lead Capture Page" to the project
  }, []);

  const onPerformanceClick = useCallback(() => {
    // Please sync "Performance Page" to the project
  }, []);

  return (
    <div className={styles.employeeDashboard}>
      <img
        className={styles.calltellogoIcon}
        alt=""
        src="/calltel logo@2x.png"
      />
      <div className={styles.herosection}>
        <section className={styles.welcomeMessage}>
          <div className={styles.welcomerectanglebig} />
          <img
            className={styles.welcomesvgIcon}
            alt=""
            src="./lwelcomesvg.svg"
          />
          <div className={styles.welcome}>
            <div className={styles.topwelcomemsg}>
              <h3 className={styles.welcomemsg}>
                <p className={styles.welcomeBackLalit}>Welcome back Lalit!</p>
                <p className={styles.welcomeBackLalit}>Check dashboard</p>
              </h3>
              <div className={styles.complimentarymsg}>
                You have earned 54% more than last month which is great thing.
              </div>
            </div>
            <div className={styles.amountearned}>
              <div className={styles.amountearnedframe}>
                <div className={styles.div}>$63,489.50</div>
              </div>
              <div className={styles.yearframe}>
                <div className={styles.year2024}>Year 2024</div>
              </div>
            </div>
            <Link to = "/EmpPerformance">
            <button className={styles.buttonmedium} autoFocus={true}>
              <div className={styles.leftIcon}>
                <img className={styles.chevLeft} alt="" src="/chev--left.svg" />
              </div>
              <div className={styles.checkButton}>
                <div className={styles.medium}>Check</div>
              </div>
              <div className={styles.leftIcon}>
                <img
                  className={styles.chevLeft}
                  alt=""
                  src="/chev--right.svg"
                />
              </div>
            </button>
            </Link>
          </div>
        </section>
        <div className={styles.timeAtWork}>
          <div className={styles.timeatworkrectangle} />
          <div className={styles.timeAtWorkTooltip}>
            <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
            <div className={styles.lastworktime}>
              <b className={styles.tooltip}>2 h 32 min</b>
            </div>
          </div>
          <button className={styles.iconButtonattendanceRedirec}>
            <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
          </button>
          <b className={styles.h43Min}>2 h 43 min</b>
          <b className={styles.timeAtWork1}>Time At Work</b>
          <b className={styles.partTimefullTime}>Part Time</b>
          <div className={styles.last6Days}>
            <button className={styles.progressbase1} />
            <button className={styles.progressbase2} />
            <button className={styles.progressbase3} />
            <button className={styles.progressbase4} />
            <button className={styles.progressbase2} />
            <button className={styles.progressbase6} />
          </div>
        </div>
      </div>
      <div className={styles.performanceSection}>
        <div className={styles.topPerformer}>
          <div className={styles.base} />
          <div className={styles.base1} />
          <h2 className={styles.topPerformer1}>Top Performer</h2>
          <h2 className={styles.jayPaladiya}>Jay Paladiya</h2>
          <b className={styles.b}>297%</b>
          <b className={styles.achievedtext}>
            <p className={styles.welcomeBackLalit}>Achieved</p>
          </b>
          <b className={styles.achievedtarget}>
            <p className={styles.welcomeBackLalit}>1279</p>
          </b>
          <b className={styles.monthAndYear}>January 2024</b>
          <b className={styles.target}>
            <p className={styles.welcomeBackLalit}>Target</p>
          </b>
          <b className={styles.settarget}>429</b>
          <b className={styles.achievement}>Achievement</b>
        </div>
      </div>
      <Link to="/Chat">
      <div className={styles.chatSectionParent}>
        <div className={styles.chatSection}>
          <div className={styles.chat}>
            <div className={styles.jayminDave}>
              <div className={styles.base2} />
              <div className={styles.avatar}>
                <div className={styles.base3} />
                <img
                  className={styles.baseIcon}
                  alt=""
                  src="/basegirlneon@2x.png"
                />
                <div className={styles.dot} />
              </div>
              <button className={styles.jayminDave1}>Jaymin Dave</button>
            </div>
            <img
              className={styles.chatButtonSide}
              alt=""
              src="/chat-button-side.svg"
            />
            <div className={styles.shubhamSadhu}>
              <button className={styles.shubhamSadhu1}>Shubham Sadhu</button>
              <div className={styles.avatar1}>
                <div className={styles.base3} />
                <img className={styles.baseIcon1} alt="" src="/base@2x.png" />
                <div className={styles.dot1} />
              </div>
            </div>
            <div className={styles.lalitSharma}>
              <button className={styles.lalitSharma1}>Lalit Sharma</button>
              <div className={styles.avatar1}>
                <div className={styles.base3} />
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <div className={styles.dot2} />
              </div>
            </div>
            <div className={styles.rishikeshBose}>
              <button className={styles.rishikeshBose1}>Rishikesh Bose</button>
              <div className={styles.avatar1}>
                <div className={styles.base3} />
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <div className={styles.dot2} />
              </div>
            </div>
            <div className={styles.rahulMajumdarFrame}>
              <button className={styles.rahulMajumdar}>Rahul Majumdar</button>
              <div className={styles.avatar1}>
                <div className={styles.base3} />
                <img
                  className={styles.baseIcon}
                  alt=""
                  src="/ProfileIcon@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.metrixSection}>
          <div className={styles.process}>
            <img
              className={styles.achievedtargetrectangleIcon}
              alt=""
              src="/Rectangle blue@2x.png"
            />
            <div className={styles.targetdisplayframe}>
              <div className={styles.achievedtargetframe}>
                <div className={styles.div}>320/490</div>
                <div className={styles.achievedTargetText}>Achieved Target</div>
              </div>
            </div>
            <div className={styles.progressbar}>
              <div className={styles.progressbar1} />
            </div>
            <div className={styles.percentageframe}>
              <div className={styles.percentage}>
                <div className={styles.div1}>65%</div>
              </div>
              <img
                className={styles.percentagepolygonIcon}
                alt=""
                src="/polygon@2x.png"
              />
            </div>
          </div>
          <div className={styles.earning}>
            <img
              className={styles.achievedtargetrectangleIcon}
              alt=""
              src="/rectangle grey@2x.png"
            />
            <div className={styles.earningnumbersframe}>
              <div className={styles.earningNumbers}>
                <div className={styles.salesInProfit}>Sales in profit</div>
                <div className={styles.div2}>$678,298</div>
                <div className={styles.moreThanLastMonth}>
                  <div className={styles.greenarrowframe}>
                    <img
                      className={styles.callUp}
                      alt=""
                      src="/arrow1@2x.png"
                    />
                  </div>
                  <div className={styles.div3}>+9%</div>
                </div>
              </div>
            </div>
            <img
              className={styles.vectorearninggraphIcon}
              alt=""
              src="/vectorearninggraph.svg"
            />
          </div>
        </div>
      </div>
      </Link>
      <Empheader />
      
    </div>
  );
};

export default EmployeeDashboard;
