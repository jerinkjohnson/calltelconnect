import styles from "./styles/EmployeePage.module.css";
import Header from "../components/header";
import {Link} from 'react-router-dom';
import { jsPDF } from "jspdf";
import React from 'react';
import { useState, useEffect } from "react";
import 'jspdf-autotable';
import axios from 'axios';



const EmployeePage = () => {

  const [employees, setEmployees] = useState(null);

  

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
    // countData();
  }, []);

  let Empcount = 10;

  const getRandomDate = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  };
  
  const handlePrintReport = () => {
    const doc = new jsPDF();
    const headers = ["ID", "EMPLOYEE NAME", "ROLE", "ADDRESS", "EMPLOYMENT-TYPE", "DOJ", "PHONE NUMBER", "DOB"];

    // Map employee data to array of arrays
    const data = employees.map(employee => [
      employee.employeeId,
      employee.name,
      "Agent",
      employee.address,
      employee.employment_type,
      getRandomDate('2013-01-01', '2023-12-31'),
      employee.contact_number,
      getRandomDate('1990-01-01', '2003-12-31')
    ]);

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
    doc.save("Employee-report.pdf");
  };
        
  


  

  return (


    <div className={styles.employeePage}>
      
      <div className={styles.adminDashboardParent}>
        <div className={styles.adminDashboard}>
          <img
            className={styles.calltellogoIcon}
            alt=""
            src="/calltel logo@2x.png"
          />
          <Header />
          <div className={styles.f}>
            <div className={styles.m}>
              <div className={styles.showing}>Showing</div>
              <div className={styles.to5Of}>1 of 1</div>
              <div className={styles.showing}>employees</div>
            </div>
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
          </div>
          <div className={styles.adminDashboardChild} />
        </div>

       {/* table start */}
        <div className={styles.b}>
          
          <div className={styles.a}>
            <div className={styles.menuItem7}>
            
              <div className={styles.id} >ID</div>
            
            </div>

            <div className={styles.menuItem8}>

            
              <div className={styles.id}>Employee</div>
            
            </div>
            <div className={styles.menuItem9}>
              <div className={styles.id}>Role</div>
            </div>
            <div className={styles.menuItem9}>
              <div className={styles.id}>Employment Type</div>
            </div>
            <div className={styles.menuItem9}>
              <div className={styles.id}>Referred</div>
            </div>
            <div className={styles.menuItem9}>
              <div className={styles.id}>DOJ</div>
            </div>
            <div className={styles.menuItem9}>
              <div className={styles.id}>Phone Number</div>
            </div>
            <div className={styles.menuItem14}>
              <div className={styles.id}>DOB</div>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.b1}>
              <div className={styles.menuItem15}>

                {employees && employees[Empcount+1] ? (
                <label className={styles.label}>{employees[Empcount+1].employeeId}</label>
                ) : (
                <label className={styles.label}>{employees && employees[Empcount] && employees[Empcount].employeeId}</label>
              )}
              </div>
              <div className={styles.menuItem16}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                {/*Name*/}
                {employees && employees[Empcount+1] ? (
                <label className={styles.label}>{employees[Empcount+1].name}</label>
                ) : (
                <label className={styles.label}>{employees && employees[Empcount] && employees[Empcount].name}</label>
              )}
              </div>
              <div className={styles.menuItem17}>
                <label className={styles.label}>Agent</label>
              </div>
              <div className={styles.menuItem18}>
                <div className={styles.j}>
                {employees && employees[Empcount+1] ? (
                  <div className={styles.fullTime}>{employees[Empcount+1].employment_type}</div>
                ) : (
                  <div className={styles.fullTime}>{employees && employees[Empcount] && employees[Empcount].employment_type}</div>
                )}
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.j1}>
                  <div className={styles.fullTime}>Rishikesh K</div>
                </div>
              </div>
              <div className={styles.menuItem17}>
                
                <div className={styles.id}>1/31/14</div>
              </div>
              <div className={styles.menuItem17}>

                {employees && employees[Empcount+1] ? (
                  <div className={styles.id}>{employees[Empcount+1].contact_number}</div>
                ) : (
                  <div className={styles.id}>{employees && employees[Empcount] && employees[Empcount].contact_number}</div>
                )}
              </div>
              <div className={styles.menuItem22}>
                <div className={styles.id}>8/30/14</div>
              </div>
            </div>
            <div className={styles.b1}>
              <div className={styles.menuItem15}>
              {employees && employees[Empcount-1] ? (
                <label className={styles.label}>{employees[Empcount-1].employeeId}</label>
                ) : (
                <label className={styles.label}>{employees && employees[Empcount] && employees[Empcount].employeeId}</label>
              )}
              </div>
              <div className={styles.menuItem16}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />

             
              {employees && employees[Empcount-1] ? (
                <div className={styles.id}>{employees[Empcount-1].name}</div>
              ) : (
                <div className={styles.id}>{employees && employees[Empcount] && employees[Empcount].name}</div>
              )}
                </div>
              <div className={styles.menuItem17}>
                <div className={styles.id}>Agent</div>
              </div>
              <div className={styles.menuItem26}>
                <div className={styles.partTimeWrapper}>
                {employees && employees[Empcount-1] ? (
                  <div className={styles.fullTime}>{employees[Empcount-1].employment_type}</div>
                ) : (
                  <div className={styles.fullTime}>{employees && employees[Empcount] && employees[Empcount].employment_type}</div>
                )}
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.j1}>
                  <div className={styles.fullTime}>Nishant</div>
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.div2}>8/16/13</div>
              </div>
              <div className={styles.menuItem17}>
              {employees && employees[Empcount-1] ? (
                  <div className={styles.id}>{employees[Empcount-1].contact_number}</div>
                ) : (
                  <div className={styles.id}>{employees && employees[Empcount] && employees[Empcount].contact_number}</div>
                )}
              </div>
              <div className={styles.menuItem22}>
                <div className={styles.id}>1/15/12</div>
              </div>
            </div>
            <div className={styles.b1}>
              <div className={styles.menuItem15}>
              {employees && employees[Empcount-2] ? (
                <label className={styles.label}>{employees[Empcount-2].employeeId}</label>
                ) : (
                <label className={styles.label}>{employees && employees[Empcount-1] && employees[Empcount-1].employeeId}</label>
              )}

              </div>
              <div className={styles.menuItem16}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                {employees && employees[Empcount-2] ? (
                <div className={styles.id}>{employees[Empcount-2].name}</div>
              ) : (
                <div className={styles.id}>{employees && employees[Empcount-1] && employees[Empcount-1].name}</div>
              )}
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.id}>Agent</div>
              </div>
              <div className={styles.menuItem18}>
                <div className={styles.j3}>
                {employees && employees[Empcount-2] ? (
                  <div className={styles.fullTime}>{employees[Empcount-2].employment_type}</div>
                ) : (
                  <div className={styles.fullTime}>{employees && employees[Empcount-1] && employees[Empcount-1].employment_type}</div>
                )}

                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.j1}>
                  <div className={styles.fullTime}>Jacob Jones</div>
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.id}>5/27/15</div>
              </div>
              <div className={styles.menuItem17}>
              {employees && employees[Empcount-2] ? (
                  <div className={styles.id}>{employees[Empcount-2].contact_number}</div>
                ) : (
                  <div className={styles.id}>{employees && employees[Empcount-1] && employees[Empcount-1].contact_number}</div>
                )}
              </div>
              <div className={styles.menuItem22}>
                <div className={styles.id}>9/23/16</div>
              </div>
            </div>
            <div className={styles.b1}>
              <div className={styles.menuItem15}>
              {employees && employees[Empcount-3] ? (
                <label className={styles.label}>{employees[Empcount-3].employeeId}</label>
                ) : (
                <label className={styles.label}>{employees && employees[Empcount-2] && employees[Empcount-2].employeeId}</label>
              )}
              </div>
              <div className={styles.menuItem16}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                {employees && employees[Empcount-3] ? (
                <div className={styles.id}>{employees[Empcount-3].name}</div>
              ) : (
                <div className={styles.id}>{employees && employees[Empcount-2] && employees[Empcount-2].name}</div>
              )}

              </div>
              <div className={styles.menuItem17}>
                <div className={styles.id}>Agent</div>
              </div>
              <div className={styles.menuItem18}>
                <div className={styles.j3}>
                {employees && employees[Empcount-3] ? (
                  <div className={styles.fullTime}>{employees[Empcount-3].employment_type}</div>
                ) : (
                  <div className={styles.fullTime}>{employees && employees[Empcount-2] && employees[Empcount-2].employment_type}</div>
                )}
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.j1}>
                  <div className={styles.fullTime}>Rishikesh</div>
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.id}>5/27/15</div>
              </div>
              <div className={styles.menuItem17}>
              {employees && employees[Empcount-3] ? (
                  <div className={styles.id}>{employees[Empcount-3].contact_number}</div>
                ) : (
                  <div className={styles.id}>{employees && employees[Empcount-2] && employees[Empcount-2].contact_number}</div>
                )}
              </div>
              <div className={styles.menuItem22}>
                <div className={styles.id}>5/30/14</div>
              </div>
            </div>
            <div className={styles.b1}>
              <div className={styles.menuItem15}>
              {employees && employees[Empcount-4] ? (
                <label className={styles.label}>{employees[Empcount-4].employeeId}</label>
                ) : (
                <label className={styles.label}>{employees && employees[Empcount-3] && employees[Empcount-3].employeeId}</label>
              )}

              </div>
              <div className={styles.menuItem16}>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                {employees && employees[Empcount-4] ? (
                <div className={styles.id}>{employees[Empcount-4].name}</div>
              ) : (
                <div className={styles.id}>{employees && employees[Empcount-3] && employees[Empcount-3].name}</div>
              )}

              </div>
              <div className={styles.menuItem17}>
                <div className={styles.id}>Agent</div>
              </div>
              <div className={styles.menuItem26}>
                <div className={styles.partTimeWrapper}>
                {employees && employees[Empcount-4] ? (
                  <div className={styles.fullTime}>{employees[Empcount-4].employment_type}</div>
                ) : (
                  <div className={styles.fullTime}>{employees && employees[Empcount-3] && employees[Empcount-3].employment_type}</div>
                )}
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.j1}>
                  <div className={styles.fullTime}>Ashish Desai</div>
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.id}>4/21/12</div>
              </div>
              <div className={styles.menuItem17}>
              {employees && employees[Empcount-4] ? (
                  <div className={styles.id}>{employees[Empcount-4].contact_number}</div>
                ) : (
                  <div className={styles.id}>{employees && employees[Empcount-3] && employees[Empcount-3].contact_number}</div>
                )}
              </div>
              <div className={styles.menuItem22}>
                <div className={styles.id}>8/16/13</div>
              </div>
            </div>
            <div className={styles.b1}>
              <div className={styles.menuItem15}>
              {employees && employees[Empcount-5] ? (
                <label className={styles.label}>{employees[Empcount-5].employeeId}</label>
                ) : (
                <label className={styles.label}>{employees && employees[Empcount-4] && employees[Empcount-4].employeeId}</label>
              )}

              </div>
              <div className={styles.menuItem16}>
                <img className={styles.imageIcon5} alt="" src="/image.svg" />
                {employees && employees[Empcount-5] ? (
                <div className={styles.id}>{employees[Empcount-5].name}</div>
              ) : (
                <div className={styles.id}>{employees && employees[Empcount-4] && employees[Empcount-4].name}</div>
              )}

              </div>
              <div className={styles.menuItem17}>
                <div className={styles.id}>Agent</div>
              </div>
              <div className={styles.menuItem18}>
                <div className={styles.j3}>
                {employees && employees[Empcount-5] ? (
                  <div className={styles.fullTime}>{employees[Empcount-5].employment_type}</div>
                ) : (
                  <div className={styles.fullTime}>{employees && employees[Empcount-4] && employees[Empcount-4].employment_type}</div>
                )}
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.j1}>
                  <div className={styles.fullTime}>Rishikesh</div>
                </div>
              </div>
              <div className={styles.menuItem17}>
                <div className={styles.id}>4/4/18</div>
              </div>
              <div className={styles.menuItem17}>
              {employees && employees[Empcount-5] ? (
                  <div className={styles.id}>{employees[Empcount-5].contact_number}</div>
                ) : (
                  <div className={styles.id}>{employees && employees[Empcount-4] && employees[Empcount-4].contact_number}</div>
                )}
              </div>
              <div className={styles.menuItem22}>
                <div className={styles.id}>1/28/17</div>
              </div>
            </div>
          </div>
          <div className={styles.b1}>
            <div className={styles.menuItem15}>
            {employees && employees[Empcount-6] ? (
                <label className={styles.label}>{employees[Empcount-6].employeeId}</label>
                ) : (
                <label className={styles.label}>{employees && employees[Empcount-5] && employees[Empcount-5].employeeId}</label>
              )}
            </div>
            <div className={styles.menuItem16}>
              <img className={styles.imageIcon5} alt="" src="/image.svg" />
              {employees && employees[Empcount-6] ? (
                <div className={styles.id}>{employees[Empcount-6].name}</div>
              ) : (
                <div className={styles.id}>{employees && employees[Empcount-5] && employees[Empcount-5].name}</div>
              )}

            </div>
            <div className={styles.menuItem17}>
              <div className={styles.id}>Agent</div>
            </div>
            <div className={styles.menuItem18}>
              <div className={styles.j3}>
              {employees && employees[Empcount-6] ? (
                  <div className={styles.fullTime}>{employees[Empcount-6].employment_type}</div>
                ) : (
                  <div className={styles.fullTime}>{employees && employees[Empcount-5] && employees[Empcount-5].employment_type}</div>
                )}

              </div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.j1}>
                <div className={styles.fullTime}>Rishikesh</div>
              </div>
            </div>
            <div className={styles.menuItem17}>
              <div className={styles.id}>1/31/14</div>
            </div>
            <div className={styles.menuItem17}>
            {employees && employees[Empcount-6] ? (
                  <div className={styles.id}>{employees[Empcount-6].contact_number}</div>
                ) : (
                  <div className={styles.id}>{employees && employees[Empcount-5] && employees[Empcount-5].contact_number}</div>
                )}
            </div>
            <div className={styles.menuItem22}>
              <div className={styles.id}>10/6/13</div>
            </div>
          </div>
        </div>
        <div className={styles.c}>
          <div className={styles.a1}>
          <button className={styles.menuItem71} onClick={handlePrintReport}>
        Print Report
      </button>
          </div>
          <div className={styles.b8}>
            <Link to="/Attendance">
            <button className={styles.menuItem72}>
              <img
                className={styles.squareArrowLeftDoubleRoundIcon}
                alt=""
                src="/calendar01.svg"
              />
              <div className={styles.viewAttendance}>View Attendance</div>
            </button>
            </Link>
            <Link to = "/Enroll">
            <button className={styles.menuItem72}>
              <div className={styles.viewAttendance}>Enroll new employee</div>
              <img
                className={styles.squareArrowLeftDoubleRoundIcon}
                alt=""
                src="/cloudupload.svg"
              />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
