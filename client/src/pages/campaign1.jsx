import styles from "./styles/campaign1.module.css";
import Header from "../components/header"
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

const ViewLeadCountCampaign1For = () => {

  const [employees, setEmployees] = useState(null);
  
  const [approveStates, setApproveStates] = useState(Array(6).fill("Approve"));
  const [reject, setreject] = useState("Reject All")

  const handlereject = () => {
    setreject("Rejected")
  }


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/employee/all');
        // Assuming response.data is an array of employee objects
        // For demonstration, let's assume we want to display the first employee's details
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []);

  const handleButton = (index) => {
    setEmployees(prevEmployees => {
      const updatedEmployees = [...prevEmployees];
      updatedEmployees[index] = {
        ...updatedEmployees[index],
        approved: true
      };
      return updatedEmployees;
    });
    // Update the button label to "Approved"
    setApproveStates(prevApproveStates => {
      const updatedApproveStates = [...prevApproveStates];
      updatedApproveStates[index] = "Approved";
      return updatedApproveStates;
    });
  };

  let Empcount = 9;

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
      "CAMP LEJEUNE",
      "AHL",
      "NISHANT DABHI",
      "PART-TIME"],

      ["2/14/24",
      "CHRISTPHER NGYUYEN",
      "3F. GIFTSON St. 57867, WINNIPEG IL",
      "(808) 555-0111",
      "RHYNOPLASTY, ",
      "CAMP LEJEUNE",
      "CVT",
      "JOHN JACOBS",
      "FULL-TIME"],

      [
        "2/15/24",
        "LYNDA BUTLER",
        "3517 2ND DRIVEWAY, BROOKLYN NY",
        "(808) 555-0111",
        "Aplastic anemia and other myelodysplastic syndromes.",
        "CAMP LEJEUNE",
        "DMS - 1",
        "LALIT SHARMA",
        "FULL-TIME"
    ],

       [ "2/16/24",
        "GORDON RAMSEY",
        "5 TOWNHALL , WISCONSIN, IL",
        "(808) 555-0111",
        "Bladder cancer, Kidney cancer, Non-Hodgkin's lymphoma",
        "CAMP LEJEUNE",
        "DMS - 1",
        "ROHAN MISHRA",
        "FULL-TIME"
      ]
    ];
  
    // Set the table column widths
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
  };                

  return (
    <div className={styles.viewLeadCountCampaign1For}>
      <Header />
      <img className={styles.saly10Icon} alt="" src="/saly10@2x.png" />
      <label className={styles.showing}>Showing</label>
      <label className={styles.to5Of}>1 to 5 of 23</label>
      <label className={styles.leaveRequests}>Lead</label>
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
              {employees && employees[Empcount+1] ? (
                <div className={styles.lalitSharma}>{employees && employees[Empcount] && employees[Empcount+1].employeeId}</div>
              ) : (
                <div className={styles.lalitSharma}>{employees && employees[Empcount] && employees[Empcount].employeeId}</div>
              )}
              </div>
              <div className={styles.menuItem8}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                {employees && employees[Empcount+1] ? (
                <div className={styles.lalitSharma}>{employees[Empcount+1].name}</div>
                ) : ( 
                  <div className={styles.lalitSharma}>{employees && employees[Empcount] && employees[Empcount].name}</div> 
                )}
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
                <div className={styles.lalitSharma}>Camp Lejeune</div>
              </div>
              <div className={styles.menuItem9}>
                <div className={styles.lalitSharma}>20 January 2024</div>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j1} onClick={() => handleButton(1)}>
                  <div className={styles.approve}>{approveStates[1]}</div>
                </button>
                <div className={styles.menuItem14}>
                  
                </div>
              </div>
              <Link to="/SingleLead">
              <button className={styles.viewLead} >View Lead</button>
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
                <label className={styles.label}>Camp Lejeune</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j3} onClick={() => handleButton(2)}>
                  <div className={styles.approveAll}>{approveStates[2]}</div>
                </button>
                <div className={styles.menuItem14}>
                  
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
                <label className={styles.label}>Camp Lejeune</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j3} onClick={() => handleButton(3)}>
                  <div className={styles.approveAll}>{approveStates[3]}</div>
                </button>
                <div className={styles.menuItem14}>
                  
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
                <label className={styles.label}>Camp Lejeune</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>15 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j3} onClick={() => handleButton(4)}>
                  <div className={styles.approveAll}>{approveStates[4]}</div>
                </button>
                <div className={styles.menuItem14}>
                 
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
                <label className={styles.label}>Camp Lejeune</label>
              </div>
              <div className={styles.menuItem9}>
                <label className={styles.label}>20 January 2024</label>
              </div>
              <div className={styles.menuItem13}>
                <button className={styles.j3} onClick={() => handleButton(5)}>
                  <div className={styles.approveAll}>{approveStates[5]}</div>
                </button>
                <div className={styles.menuItem14}>
                 
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
          <button className={styles.j2} onClick={handlereject}>
            <div className={styles.reject}>{reject}</div>
          </button>
          <button className={styles.j3}>
            <div className={styles.approveAll}>Approve All</div>
          </button>
        </div>
      </div>
      <div className={styles.campaign1}>Campaign 1 - Priority Campaign
      <button className={styles.campPrint} onClick={handlePrintReport}>Print report</button>
      </div>
    </div>
  );
};

export default ViewLeadCountCampaign1For;
