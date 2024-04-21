import styles from "./styles/singleLead.module.css";
import Header from "../components/header";
import {Link} from 'react-router-dom';

const ViewLeadByAdmin = () => {
  return (
    <div className={styles.viewLeadByAdmin}>
      
      <div className={styles.formFrame}>
        <Header />
        <div className={styles.formFrameChild} />
        <div className={styles.address}>
          <img
            className={styles.addressChild}
            alt=""
            src="/rectangle-6455.svg"
          />
          <label className={styles.address1}>Address</label>
          <label className={styles.wGraySt}>3517 W. Gray St. 57867</label>
        </div>
        <div className={styles.state}>
          <img className={styles.stateChild} alt="" src="/rectangle-6458.svg" />
          <label className={styles.state1}>State</label>
          <label className={styles.pennsylvania}>Pennsylvania</label>
        </div>
        <div className={styles.phoneNumber}>
          <img className={styles.stateChild} alt="" src="/rectangle-6458.svg" />
          <label className={styles.phoneNumber1}>Phone Number</label>
          <label className={styles.label}>(808) 555-0111</label>
        </div>
        <div className={styles.journayaId}>
          <img className={styles.stateChild} alt="" src="/rectangle-6458.svg" />
          <label className={styles.ef5234512478965gf535d53689741f}>
            EF5234512478965GF535D53689741F
          </label>
          <label className={styles.jornayaIdOrContainer}>
            <span className={styles.jornayaIdOrContainer1}>
              <p className={styles.jornayaIdOr}>Jornaya ID or</p>
              <p className={styles.trustedForm}>Trusted Form</p>
            </span>
          </label>
        </div>
        <div className={styles.yaclejune}>
          <label className={styles.yearAtCampContainer}>
            <span className={styles.jornayaIdOrContainer1}>
              <p className={styles.trustedForm}>Year at</p>
              <p className={styles.trustedForm}>Camp Lejeune</p>
            </span>
          </label>
          <img className={styles.stateChild} alt="" src="/rectangle-6458.svg" />
          <label className={styles.label1}>1965-66</label>
        </div>
        <div className={styles.emailId}>
          <label className={styles.zipCode}>Email Id</label>
          <img
            className={styles.emailIdChild}
            alt=""
            src="/rectangle-6453.svg"
          />
          <label className={styles.curtisweaverexamplecom}>
            curtis.weaver@example.com
          </label>
        </div>
        <div className={styles.city}>
          <label className={styles.zipCode}>City</label>
          <img
            className={styles.emailIdChild}
            alt=""
            src="/rectangle-6453.svg"
          />
          <label className={styles.utica}>Utica</label>
        </div>
        <div className={styles.zip}>
          <label className={styles.zipCode}>Zip Code</label>
          <img
            className={styles.emailIdChild}
            alt=""
            src="/rectangle-6453.svg"
          />
          <label className={styles.label2}>47481</label>
        </div>
        <div className={styles.areYouCurrentlyBeingRepres}>
          <img
            className={styles.areYouCurrentlyBeingRepresChild}
            alt=""
            src="/rectangle-6458.svg"
          />
          <label className={styles.no}>NO</label>
          <label className={styles.areYouCurrentlyContainer}>
            <span className={styles.jornayaIdOrContainer1}>
              <p className={styles.trustedForm}>
                Are you currently being represented by an attorney?
              </p>
            </span>
          </label>
        </div>
        <div className={styles.medicalDiagnosis}>
          <img
            className={styles.medicalDiagnosisChild}
            alt=""
            src="/rectangle-6455.svg"
          />
          <label className={styles.multipleMelanomaSarcoma}>
            Multiple Melanoma, Sarcoma, Lung Caner
          </label>
          <label className={styles.anyMedicalDiagnosis}>
            Any Medical Diagnosis
          </label>
        </div>
        <div className={styles.custname}>
          <label className={styles.zipCode}>Customer Name</label>
          <img
            className={styles.custnameChild}
            alt=""
            src="/rectangle-6453.svg"
          />
          <label className={styles.johnDoe}>John Doe</label>
        </div>
        <div className={styles.lwCl}>
          <label className={styles.wereTheyLiving}>
            Were they Living or working at Camp Lejeune?
          </label>
          <img
            className={styles.lwClChild}
            alt=""
            src="/rectangle-6452@2x.png"
          />
          <label className={styles.yes}>Yes</label>
        </div>
        <div className={styles.headerText}>
          <img
            className={styles.headerTextChild}
            alt=""
            src="/rectangle-6454.svg"
          />
          <label
            className={styles.campLejeuneLead}
          >{`SOLAR MORTGAGE `}</label>
          <div className={styles.menuItemWrapper}>
            <div className={styles.menuItem}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <label className={styles.lalitSharma}>Lalit Sharma</label>
            </div>
          </div>
        </div>
        <Link to = "/camp2">
        <button className={styles.closeButton}>
          <div className={styles.closeButtonChild} />
          <div className={styles.close}>Close</div>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewLeadByAdmin;
