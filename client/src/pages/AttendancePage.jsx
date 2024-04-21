import styles from "./styles/AttendancePage.module.css";
import Header from "../components/header"
const AttendancePage = () => {
  return (
    <div className={styles.attendancePage}>
     
      <div className={styles.dashboard}>
        <div className={styles.adminDashboard}>
          <img
            className={styles.calltellogoIcon}
            alt=""
            src="/calltel logo@2x.png"
          />
           <Header />
          <footer className={styles.f}>
            <div className={styles.m}>
              <div className={styles.showing}>Showing</div>
              <div className={styles.to5Of}>1 of 1</div>
              <div className={styles.showing}>employees</div>
            </div>
            <div className={styles.skip}>
              <div className={styles.menuItem}>
                
              </div>
              
              <div className={styles.menuItem}>
                
              </div>
            </div>
          </footer>
        </div>
      </div>
      
      <div className={styles.b}>
        <div className={styles.a1}>
          <div className={styles.menuItem7}>
            <div className={styles.date}>Date</div>
          </div>
          <div className={styles.menuItem8}>
            <div className={styles.date}>Employee</div>
          </div>
          <div className={styles.menuItem9}>
            <div className={styles.date}>Role</div>
          </div>
          <div className={styles.menuItem9}>
            <div className={styles.date}>Employment Type</div>
          </div>
          <div className={styles.menuItem9}>
            <div className={styles.date}>Status</div>
          </div>
          <div className={styles.menuItem9}>
            <div className={styles.date}>Check In</div>
          </div>
          <div className={styles.menuItem9}>
            <div className={styles.date}>Check Out</div>
          </div>
          <div className={styles.menuItem14}>
            <div className={styles.date}>Over Time</div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.b1}>
            <div className={styles.menuItem15}>
              <label className={styles.label}>13/01</label>
            </div>
            <div className={styles.menuItem16}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.date}>Aisha Doe</div>
            </div>
            <div className={styles.menuItem17}>
              <label className={styles.label}>Agent</label>
            </div>
            <div className={styles.menuItem18}>
              <label className={styles.j}>
                <div className={styles.fullTime}>Full-Time</div>
              </label>
            </div>
            <div className={styles.menuItem19}>
              <div className={styles.j1}>
                <div className={styles.fullTime}>Present</div>
              </div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>10 :00 AM</div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>05:00 PM</div>
            </div>
            <div className={styles.menuItem22}>
              <div className={styles.date}>0h</div>
            </div>
          </div>
          <div className={styles.b1}>
            <div className={styles.menuItem15}>
              <label className={styles.label}>13/01</label>
            </div>
            <div className={styles.menuItem16}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.date}>Chukwuemeka</div>
            </div>
            <div className={styles.menuItem17}>
              <label className={styles.label}>Agent</label>
            </div>
            <div className={styles.menuItem26}>
              <label className={styles.partTimeWrapper}>
                <div className={styles.fullTime}>Part-Time</div>
              </label>
            </div>
            <div className={styles.menuItem27}>
              <div className={styles.j2}>
                <div className={styles.fullTime}>Absent</div>
              </div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.div}>-</div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.div}>-</div>
            </div>
            <div className={styles.menuItem22}>
              <div className={styles.date}>0h</div>
            </div>
          </div>
          <div className={styles.b1}>
            <div className={styles.menuItem15}>
              <label className={styles.label}>13/01</label>
            </div>
            <div className={styles.menuItem16}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.date}>Suleiman</div>
            </div>
            <div className={styles.menuItem17}>
              <label className={styles.label}>Agent</label>
            </div>
            <div className={styles.menuItem18}>
              <label className={styles.j3}>
                <div className={styles.fullTime}>Full-Time</div>
              </label>
            </div>
            <div className={styles.menuItem35}>
              <div className={styles.j4}>
                <div className={styles.fullTime}>Late</div>
              </div>
            </div>
            <div className={styles.menuItem36}>
              <div className={styles.date}>10:15 AM</div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>05:00 PM</div>
            </div>
            <div className={styles.menuItem22}>
              <div className={styles.date}>0h</div>
            </div>
          </div>
          <div className={styles.b1}>
            <div className={styles.menuItem15}>
              <label className={styles.label}>13/01</label>
            </div>
            <div className={styles.menuItem16}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.date}>Olamide</div>
            </div>
            <div className={styles.menuItem17}>
              <label className={styles.label}>Project Manager</label>
            </div>
            <div className={styles.menuItem18}>
              <label className={styles.j3}>
                <div className={styles.fullTime}>Full-Time</div>
              </label>
            </div>
            <div className={styles.menuItem19}>
              <div className={styles.j1}>
                <div className={styles.fullTime}>Present</div>
              </div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>09:00 AM</div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>06:00 PM</div>
            </div>
            <div className={styles.menuItem22}>
              <div className={styles.date}>1h</div>
            </div>
          </div>
          <div className={styles.b1}>
            <div className={styles.menuItem15}>
              <label className={styles.label}>13/01</label>
            </div>
            <div className={styles.menuItem16}>
              <img className={styles.imageIcon} alt="" src="/beard.png" />
              <div className={styles.date}>Jide</div>
            </div>
            <div className={styles.menuItem17}>
              <label className={styles.label}>Project Manager</label>
            </div>
            <div className={styles.menuItem18}>
              <label className={styles.j3}>
                <div className={styles.fullTime}>Full-Time</div>
              </label>
            </div>
            <div className={styles.menuItem19}>
              <div className={styles.j1}>
                <div className={styles.fullTime}>Present</div>
              </div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>09:00 AM</div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>05:00 PM</div>
            </div>
            <div className={styles.menuItem22}>
              <div className={styles.date}>0h</div>
            </div>
          </div>
          <div className={styles.b1}>
            <div className={styles.menuItem15}>
              <div className={styles.date}>13/01</div>
            </div>
            <div className={styles.menuItem16}>
              <img className={styles.imageIcon} alt="" src="beard.png" />
              <div className={styles.date}>Femi</div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>Sales Manager</div>
            </div>
            <div className={styles.menuItem18}>
              <div className={styles.j9}>
                <div className={styles.fullTime}>Full-Time</div>
              </div>
            </div>
            <div className={styles.menuItem19}>
              <div className={styles.j1}>
                <div className={styles.fullTime}>Present</div>
              </div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>09:00 AM</div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.date}>07:00 PM</div>
            </div>
            <div className={styles.menuItem22}>
              <div className={styles.date}>2h</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.vsLastMonthContainer}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </div>
          </div>
          <div className={styles.i}>
            <div className={styles.totalWorkforce}>Total Workforce</div>
            <div className={styles.div8}>150</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/iconwork.svg" />
            <div className={styles.vsLastMonthContainer}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </div>
          </div>
          <div className={styles.i}>
            <div className={styles.totalWorkforce}>Present Workforce</div>
            <div className={styles.div8}>125</div>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/iconwork.svg" />
            <div className={styles.vsLastMonthContainer}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </div>
          </div>
          <div className={styles.i}>
            <div className={styles.totalWorkforce}>Absent Workforce</div>
            <div className={styles.div8}>15</div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.vsLastMonthContainer}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </div>
          </div>
          <div className={styles.i}>
            <div className={styles.totalWorkforce}>Late arrivals</div>
            <div className={styles.div8}>5</div>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/icon2.svg" />
            <div className={styles.vsLastMonthContainer}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </div>
          </div>
          <div className={styles.i}>
            <div className={styles.totalWorkforce}>On leave</div>
            <div className={styles.div8}>5</div>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/iconwork.svg" />
            <label className={styles.vsLastMonthContainer5}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </label>
          </div>
          <div className={styles.i}>
            <label className={styles.totalWorkforce1}>Total Workforce</label>
            <label className={styles.label5}>20</label>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/iconpresent.svg" />
            <div className={styles.vsLastMonthContainer}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </div>
          </div>
          <div className={styles.i}>
            <label className={styles.totalWorkforce1}>Present Workforce</label>
            <label className={styles.label5}>15</label>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/iconabsent.svg" />
            <label className={styles.vsLastMonthContainer5}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </label>
          </div>
          <div className={styles.i}>
            <label className={styles.totalWorkforce1}>Absent Workforce</label>
            <label className={styles.label5}>5</label>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/iconlate.svg" />
            <label className={styles.vsLastMonthContainer5}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </label>
          </div>
          <div className={styles.i}>
            <label className={styles.totalWorkforce1}>Late arrivals</label>
            <label className={styles.label5}>3</label>
          </div>
        </div>
        <div className={styles.card4}>
          <div className={styles.top}>
            <img className={styles.icon} alt="" src="/icon-umbrella.svg" />
            <label className={styles.vsLastMonthContainer5}>
              <span>10%</span>
              <span className={styles.vsLastMonth}> vs last month</span>
            </label>
          </div>
          <div className={styles.i}>
            <label className={styles.totalWorkforce1}>On leave</label>
            <label className={styles.label5}>5</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
