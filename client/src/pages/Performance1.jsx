import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header"
import styles from "./styles/Performance1.module.css";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

const Performance1 = () => {

  const handlePrintReport = () => {
    const doc = new jsPDF();
    
    const headers = [
      "Date",
      "Employee Name",
      "Employeement Type",
      "Monthly Target(in $)",
      "Target Achieved(in $)",
      "Percentage",
      "Incentive Eligible(in INR)",
      "Total Lead Count"
  ];
    const data = [
      
    [
        "2/13/24",
        "NISHANT DABHI",
        "PART-TIME",
        "407",
        "512",
        "125.7985258",
        "3000",
        "5"
    ],
    [
        "2/14/24",
        "JOHN JACOBS",
        "FULL-TIME",
        "814",
        "665",
        "81.6953317",
        "NOT ELIGIBLE",
        "4"
    ],
    [
        "2/15/24",
        "LALIT SHARMA",
        "FULL-TIME",
        "814",
        "1850",
        "227.2727273",
        "8000",
        "10"
    ],
    [
        "2/16/24",
        "ROHAN MISHRA",
        "FULL-TIME",
        "814",
        "2500",
        "307.1253071",
        "25000",
        "12"
    ]
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
    
    doc.save("Performance-Report.pdf");
  };
  return (

    <div className={styles.performance}>
      <div className={styles.dashboard}>
        <div className={styles.frameParent}>
          <div className={styles.frame}>
            <div className={styles.property1default}>
              <div className={styles.autoLayoutHorizontal}>
                <div className={styles.tabs}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <div className={styles.frameGroup}>
                    <div className={styles.icosParent}>
                      <div className={styles.icos}>
                        <img
                          className={styles.figma11Icon}
                          alt=""
                          src="/figma1-1.svg"
                        />
                      </div>
                      <div className={styles.figmaDesignUi}>
                        Figma Design UI Kit
                      </div>
                    </div>
                    <img
                      className={styles.cruzar1Icon}
                      alt=""
                      src="/cruzar-1.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.tabs1}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector.svg"
                  />
                  <div className={styles.frameContainer}>
                    <div className={styles.icosParent}>
                      <div className={styles.icos}>
                        <img
                          className={styles.globeIcon}
                          alt=""
                          src="/globe.svg"
                        />
                      </div>
                      <div className={styles.figmaDesignUi}>localhost</div>
                    </div>
                    <img
                      className={styles.cruzar1Icon}
                      alt=""
                      src="/cruzar-1.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.tabs}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <div className={styles.frameGroup}>
                    <div className={styles.icosParent}>
                      <div className={styles.icos}>
                        <img
                          className={styles.icosChild}
                          alt=""
                          src="/group-7.svg"
                        />
                      </div>
                      <div className={styles.figmaDesignUi}>
                        Figma Design UI Kit
                      </div>
                    </div>
                    <img
                      className={styles.cruzar1Icon}
                      alt=""
                      src="/cruzar-1.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.autoLayoutHorizontalChild} />
                <div className={styles.tabs}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <div className={styles.frameGroup}>
                    <div className={styles.icosParent}>
                      <div className={styles.icos}>
                        <img
                          className={styles.figma11Icon}
                          alt=""
                          src="/figma1-1.svg"
                        />
                      </div>
                      <div className={styles.figmaDesignUi}>
                        Figma Design UI Kit
                      </div>
                    </div>
                    <img
                      className={styles.cruzar1Icon}
                      alt=""
                      src="/cruzar-1.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.autoLayoutHorizontalChild} />
                <div className={styles.tabs}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <div className={styles.frameGroup}>
                    <div className={styles.icosParent}>
                      <div className={styles.icos}>
                        <img
                          className={styles.figma11Icon}
                          alt=""
                          src="/figma1-1.svg"
                        />
                      </div>
                      <div className={styles.figmaDesignUi}>
                        Figma Design UI Kit
                      </div>
                    </div>
                    <img
                      className={styles.cruzar1Icon}
                      alt=""
                      src="/cruzar-1.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.autoLayoutHorizontalChild} />
                <div className={styles.tabs}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <div className={styles.frameGroup}>
                    <div className={styles.icosParent}>
                      <div className={styles.icos}>
                        <img
                          className={styles.figma11Icon}
                          alt=""
                          src="/figma1-1.svg"
                        />
                      </div>
                      <div className={styles.figmaDesignUi}>
                        Figma Design UI Kit
                      </div>
                    </div>
                    <img
                      className={styles.cruzar1Icon}
                      alt=""
                      src="/cruzar-1.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.autoLayoutHorizontalChild} />
                <div className={styles.tabs}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <div className={styles.frameGroup}>
                    <div className={styles.icosParent}>
                      <div className={styles.icos}>
                        <img
                          className={styles.figma11Icon}
                          alt=""
                          src="/figma1-1.svg"
                        />
                      </div>
                      <div className={styles.figmaDesignUi}>
                        Figma Design UI Kit
                      </div>
                    </div>
                    <img
                      className={styles.cruzar1Icon}
                      alt=""
                      src="/cruzar-1.svg"
                    />
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.autoLayoutHorizontalChild} />
              </div>
              <div className={styles.autoLayoutHorizontal1}>
                <div className={styles.iconsBar}>
                  <img className={styles.returnIcon} alt="" src="/return.svg" />
                  <img
                    className={styles.returnIcon}
                    alt=""
                    src="/forward.svg"
                  />
                  <img
                    className={styles.returnIcon}
                    alt=""
                    src="/refresh.svg"
                  />
                </div>
                <div className={styles.instanceParent}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon14}
                      alt=""
                      src="/vector.svg"
                    />
                    <div className={styles.instanceChild} />
                  </div>
                  <div className={styles.figmacomParent}>
                    <div className={styles.figmacom}>localhost:5173</div>
                    <div className={styles.filesxakeywtjsvssnftiy073oun}>
                      /PerformanceTrackerPage
                    </div>
                  </div>
                </div>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-17@2x.png"
                />
                <div className={styles.rectangleParent}>
                  <div className={styles.instanceItem} />
                  <div className={styles.instanceItem} />
                  <div className={styles.instanceItem} />
                </div>
              </div>
            </div>
            <div className={styles.windowsControls}>
              <img className={styles.lineIcon} alt="" src="/line.svg" />
              <div className={styles.rectangle} />
              <img className={styles.unionIcon} alt="" src="/union.svg" />
            </div>
          </div>
          <div className={styles.frame1}>
            
            <div className={styles.adminDashboard}>
              <img
                className={styles.saly10Icon}
                alt=""
                src="/calltel logo@2x.png"
              />
              
              <div className={styles.adminDashboardChild} />
              
            </div>
            
            <div className={styles.rectangle1} > 
            <button className={styles.printer} onClick={handlePrintReport}>Print Report</button> </div>
            <div className={styles.autoLayoutVertical}>
              <div className={styles.autoLayoutHorizontal2}>
                <div className={styles.autoLayoutHorizontal3}>
                  <div className={styles.rectangle2} />
                  <div className={styles.campLejeune}>Camp Lejeune</div>
                </div>
                <div className={styles.div}>$121,799</div>
              </div>
              <div className={styles.autoLayoutHorizontal2}>
                <div className={styles.autoLayoutHorizontal3}>
                  <div className={styles.rectangle3} />
                  <div className={styles.campLejeune}>Debt Settlement</div>
                </div>
                <div className={styles.div}>$50,799</div>
              </div>
              <div className={styles.autoLayoutHorizontal6}>
                <div className={styles.autoLayoutHorizontal3}>
                  <div className={styles.rectangle4} />
                  <div className={styles.campLejeune}>Solar</div>
                </div>
                <div className={styles.div}>$25,567</div>
              </div>
              <div className={styles.autoLayoutHorizontal6}>
                <div className={styles.autoLayoutHorizontal3}>
                  <div className={styles.rectangle5} />
                  <div className={styles.campLejeune}>Mortgage</div>
                </div>
                <div className={styles.div}>$5,789</div>
              </div>
            </div>
            <div className={styles.line} />
            <div className={styles.line1} />
            <div className={styles.group}>
              <div className={styles.campaignProfits}>Campaign Profits</div>
              <div className={styles.statistics}>Statistics</div>
            </div>
            <div className={styles.group1}>
              <div className={styles.rectangle6} />
              <div className={styles.autoLayoutHorizontal10}>
                <div className={styles.jan}>JAN</div>
                <div className={styles.feb}>FEB</div>
                <div className={styles.mar}>MAR</div>
                <div className={styles.jan}>APR</div>
                <div className={styles.may}>MAY</div>
                <div className={styles.jun}>JUN</div>
                <div className={styles.jul}>JUL</div>
                <div className={styles.may}>AUG</div>
                <div className={styles.jul}>SEP</div>
                <div className={styles.may}>OCT</div>
                <div className={styles.may}>NOV</div>
                <div className={styles.dec}>DEC</div>
              </div>
              <div className={styles.autoLayoutVertical1}>
                <div className={styles.k}>6k</div>
                <div className={styles.k1}>5k</div>
                <div className={styles.k}>4k</div>
                <div className={styles.k}>3k</div>
                <div className={styles.k1}>2k</div>
                <div className={styles.k5}>1k</div>
                <div className={styles.div4}>0</div>
              </div>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.line2} />
              <div className={styles.autoLayoutVertical2}>
                <div className={styles.div5}>2023</div>
                <div className={styles.monthlyAverageProfit}>
                  Monthly Average Profit
                </div>
              </div>
              
              </div>
            <div className={styles.autoLayoutVertical3}>
              <div className={styles.autoLayoutVertical4}>
                <div className={styles.statistics1}>Statistics</div>
                <div className={styles.peakLeadHours}>Peak Lead Hours</div>
              </div>
              <div className={styles.autoLayoutVertical5}>
                <div className={styles.div6}>10:30</div>
                <div className={styles.autoLayoutHorizontal11}>
                  <div className={styles.div7}>+21.01%</div>
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.pmEst}>pm EST</div>
              </div>
              <img className={styles.groupIcon13} alt="" src="/peakGreen.svg" />
            </div>
            <div className={styles.autoLayoutVertical6}>
              <div className={styles.autoLayoutVertical4}>
                <div className={styles.statistics1}>Statistics</div>
                <div className={styles.peakLeadHours}>Off-Peak Hours</div>
              </div>
              <div className={styles.autoLayoutVertical8}>
                <div className={styles.div8}>3:30</div>
                <div className={styles.autoLayoutHorizontal12}>
                  <div className={styles.div7}>-7.69%</div>
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
              <div className={styles.pmEst1}>pm EST</div>
              <img className={styles.groupIcon14} alt="" src="/group.svg" />
              
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Performance1;
