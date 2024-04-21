import styles from "./styles/LeavesAppr.module.css";
import Header from "../components/header";
import {Link} from "react-router-dom";


const LeavesAPPREJPage = () => {
  return (
    <div className={styles.leavesApprejPage}>
      <Header />
      <img className={styles.saly10Icon} alt="" src="/saly10@2x.png" />
      <label className={styles.showing}>Showing</label>
      <label className={styles.to5Of}>1 of 1</label>
      <label className={styles.leaveRequests}>Leave Requests</label>
      <div className={styles.skip}>
        <button className={styles.menuItem}>
          <img
            className={styles.squareArrowLeftDoubleRoundIcon}
            alt=""
            src="/squarearrowleftdoubleround.svg"
          />
        </button>
        <button className={styles.menuItem1}>
          <div className={styles.div}>1</div>
        </button>
        <button className={styles.menuItem2}>
          <div className={styles.div}>2</div>
        </button>
        <label className={styles.menuItem3}>
          <div className={styles.div2}>3</div>
        </label>
        <div className={styles.menuItem4}>
          <div className={styles.div2}>...</div>
        </div>
        <button className={styles.menuItem2}>
          <div className={styles.div}>24</div>
        </button>
        <button className={styles.menuItem}>
          <img
            className={styles.squareArrowLeftDoubleRoundIcon}
            alt=""
            src="/squarearrowrightdoubleround.svg"
          />
        </button>
      </div>
      <div className={styles.employeeLeaveRequests}>
        <div className={styles.listWrapper}>
          <div className={styles.list}>
            <div className={styles.b}>
              <div className={styles.menuItem7}>
                <label className={styles.label}>13/01</label>
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <label className={styles.label}>Lalit Sharma</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Agent</label>
              </div>
              <div className={styles.menuItem10}>
                <label className={styles.j}>
                  <div className={styles.sickLeave}>Sick Leave</div>
                </label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>15 January 2024</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.approveAll}>
                  <div className={styles.approve}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.rejectAll}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <div className={styles.menuItem15}>
                <Link to="/ViewLeaveByAdmin">
                <button className={styles.viewLeave}>View Leave</button>
                </Link>
              </div>
            </div>
            <div className={styles.b}>
              <div className={styles.menuItem7}>
                <label className={styles.label}>13/01</label>
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <label className={styles.label}>Chukwuemeka</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Agent</label>
              </div>
              <div className={styles.menuItem19}>
                <label className={styles.paidLeaveWrapper}>
                  <div className={styles.sickLeave}>Paid Leave</div>
                </label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>15 January 2024</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.approveAll}>
                  <div className={styles.approve}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.rejectAll}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <button className={styles.menuItem24}>
                <button className={styles.viewLeave}>View Leave</button>
              </button>
            </div>
            <div className={styles.b}>
              <div className={styles.menuItem7}>
                <label className={styles.label}>13/01</label>
              </div>
              <div className={styles.menuItem8}>
                <div className={styles.text}>{` `}</div>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <label className={styles.label}>Suleiman</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Agent</label>
              </div>
              <div className={styles.menuItem10}>
                <label className={styles.j5}>
                  <div className={styles.sickLeave}>Casual Leave</div>
                </label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>15 January 2024</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.approveAll}>
                  <div className={styles.approve}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.rejectAll}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <div className={styles.menuItem15}>
                <button className={styles.viewLeave}>View Leave</button>
              </div>
            </div>
            <div className={styles.b}>
              <div className={styles.menuItem7}>
                <label className={styles.label}>13/01</label>
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <label className={styles.label}>Olamide</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Project Manager</label>
              </div>
              <div className={styles.menuItem10}>
                <label className={styles.j5}>
                  <div className={styles.sickLeave}>Paid Leave</div>
                </label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>15 January 2024</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>15 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.approveAll}>
                  <div className={styles.approve}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.rejectAll}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <button className={styles.menuItem42}>
                <button className={styles.viewLeave}>View Leave</button>
              </button>
            </div>
            <div className={styles.b}>
              <div className={styles.menuItem7}>
                <label className={styles.label}>13/01</label>
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <label className={styles.label}>Jide</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Project Manager</label>
              </div>
              <div className={styles.menuItem10}>
                <label className={styles.j5}>
                  <div className={styles.sickLeave}>Casual Leave</div>
                </label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>15 January 2024</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.approveAll}>
                  <div className={styles.approve}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.rejectAll}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <button className={styles.menuItem24}>
                <button className={styles.viewLeave}>View Leave</button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className={styles.label5}>
        <div className={styles.date}>
          <div className={styles.employee}>Date</div>
        </div>
        <div className={styles.employeeLabel}>
          <div className={styles.employee}>Employee</div>
        </div>
        <div className={styles.roleLabel}>
          <div className={styles.employee}>Role</div>
        </div>
        <div className={styles.roleLabel}>
          <div className={styles.employee}>Leave Type</div>
        </div>
        <div className={styles.roleLabel}>
          <div className={styles.employee}>Start Date</div>
        </div>
        <div className={styles.roleLabel}>
          <div className={styles.employee}>End Date</div>
        </div>
        <div className={styles.statusApproveReject}>
          <div className={styles.employee}>Status</div>
          <button className={styles.rejectAll}>
            <div className={styles.reject}>Reject All</div>
          </button>
          <button className={styles.approveAll}>
            <div className={styles.approve}>Approve All</div>
          </button>
        </div>
      </header>
      
    </div>
  );
};

export default LeavesAPPREJPage;
