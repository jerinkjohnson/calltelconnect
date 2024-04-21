import styles from "./styles/campaign2.module.css";
import Header from "../components/header"
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import {Link} from 'react-router-dom'

const ViewLeadCountCampaign1For = () => {

  const handlePrintReport = () => {
    const doc = new jsPDF();
    const headers = ["Date",
    "Customer",
    "Address",
    "Phone number",
    "Disease Name",
    "Campaign Name",
    "Client Name",
    "Employee Name",
    "Employment Type"];
    const data = [
      ["2/13/24",
      "JOHN DOE",
      "3517 W. Gray St. 57867, WINNIPEG IL",
      "(808) 555-0111",
      "Multiple Melanoma, Sarcoma, Lung Caner",
      "Solar Mortgage",
      "AHL",
      "NISHANT DABHI",
      "PART-TIME"],

    ];

    const columnWidths = ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'];
  
    // Add the table to the PDF
    doc.autoTable({
      head: [headers],
      body: data,
      startY: 20, // Start position (y-axis) of the table
      styles: { overflow: 'linebreak' }, // Overflow behavior for cell content
      columnStyles: { 0: { cellWidth: 'auto' } }, // Custom styles for columns
      columnWidth: columnWidths, // Custom column widths
    });
  
    // Save or print the PDF
    doc.save("Lead-Report.pdf");
  }

  return (
    <div className={styles.viewLeadCountCampaign1For}>
      <Header />
      <img className={styles.saly10Icon} alt="" src="/saly10@2x.png" />
      <label className={styles.showing}>Showing</label>
      <label className={styles.to5Of}>1 of 1</label>
      <label className={styles.leaveRequests}>Leads</label>
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
        <div className={styles.menuItem3}>
          <div className={styles.div2}>3</div>
        </div>
        <label className={styles.menuItem4}>
          <div className={styles.div2}>...</div>
        </label>
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
                <div className={styles.lalitSharma}>3933</div>
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <div className={styles.lalitSharma}>Lalit Sharma</div>
              </div>
              <div className={styles.menuItem9}>
                <div className={styles.lalitSharma}>Agent</div>
              </div>
              <div className={styles.menuItem10}>
                <div className={styles.j}>
                  <div className={styles.fullTime}>Full-Time</div>
                </div>
              </div>
              <div className={styles.menuItem9}>
                <div className={styles.lalitSharma}>Solar Mortgage</div>
              </div>
              <div className={styles.menuItem9}>
                <div className={styles.lalitSharma}>20 January 2024</div>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j1}>
                  <div className={styles.approve}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.j2}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <Link to="/SolarLead">
              <button className={styles.viewLead}>View Lead</button>
              </Link>
            </div>
            <div className={styles.b}>
              <div className={styles.menuItem7}>
                <label className={styles.label}>1784</label>
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon1} alt="" src="/base@2x.png" />
                <label className={styles.label}>Nishant Dabhi</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Agent</label>
              </div>
              <div className={styles.menuItem18}>
                <label className={styles.partTimeWrapper}>
                  <div className={styles.fullTime}>Part-Time</div>
                </label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Solar Mortgage</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j3}>
                  <div className={styles.approveAll}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.j2}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <button className={styles.viewLead1}>View Lead</button>
            </div>
            <div className={styles.b}>
              <div className={styles.menuItem7}>
                <label className={styles.label}>4846</label>
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon1} alt="" src="/base@2x.png" />
                <label className={styles.label}>John Jacobs</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Agent</label>
              </div>
              <div className={styles.menuItem10}>
                <label className={styles.j5}>
                  <div className={styles.fullTime}>Full-Time</div>
                </label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Solar Mortgage</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j3}>
                  <div className={styles.approveAll}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.j2}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <button className={styles.viewLead}>View Lead</button>
            </div>
            <div className={styles.b}>
              <div className={styles.menuItem7}>
                <label className={styles.label}>8811</label>
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon1} alt="" src="/base@2x.png" />
                <label className={styles.label}>Lalit Sharma</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Agent</label>
              </div>
              <div className={styles.menuItem10}>
                <label className={styles.j5}>
                  <div className={styles.fullTime}>Full-Time</div>
                </label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Solar Mortgage</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>15 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j3}>
                  <div className={styles.approveAll}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.j2}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <button className={styles.viewLead}>View Lead</button>
            </div>
            <div className={styles.b}>
              <div className={styles.menuItem7}>
                <label className={styles.label}>5560</label>
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon1} alt="" src="/base@2x.png" />
                <label className={styles.label}>Rohan Mishra</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Agent</label>
              </div>
              <div className={styles.menuItem10}>
                <label className={styles.j5}>
                  <div className={styles.fullTime}>Full-Time</div>
                </label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>Solar Mortgage</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j3}>
                  <div className={styles.approveAll}>Approve</div>
                </button>
                <div className={styles.menuItem14}>
                  <button className={styles.j2}>
                    <div className={styles.reject}>Reject</div>
                  </button>
                </div>
              </div>
              <button className={styles.viewLead}>View Lead</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.a}>
        <div className={styles.menuItem47}>
          <div className={styles.lalitSharma}>EID</div>
        </div>
        <div className={styles.menuItem48}>
          <div className={styles.lalitSharma}>Employee</div>
        </div>
        <div className={styles.menuItem49}>
          <div className={styles.lalitSharma}>Role</div>
        </div>
        <div className={styles.menuItem49}>
          <div className={styles.lalitSharma}>Employment Type</div>
        </div>
        <div className={styles.menuItem49}>
          <div className={styles.lalitSharma}>Campaign Name</div>
        </div>
        <div className={styles.menuItem49}>
          <div className={styles.lalitSharma}>Lead Date</div>
        </div>
        <div className={styles.menuItem53}>
          <div className={styles.lalitSharma}>Status</div>
          <button className={styles.j2}>
            <div className={styles.reject}>Reject All</div>
          </button>
          <button className={styles.j3}>
            <div className={styles.approveAll}>Approve All</div>
          </button>
        </div>
      </div>
      <div className={styles.campaign1}>Campaign 2 - Priority Campaign
      <button className={styles.campPrint} onClick={handlePrintReport}>Print report</button>
      </div>
    </div>
  );
};

export default ViewLeadCountCampaign1For;
