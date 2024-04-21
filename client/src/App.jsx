import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/login';
import LeavesAppr from './pages/LeavesAppr'
import ViewLeaveByAdmin from './pages/ViewLeaveByAdmin';
import AdminLeadPage from './pages/AdminLeadPage';
import Campaign1 from './pages/campaign1';
import Campaign2 from './pages/campaign2';
import Campform from './pages/Campinput';
import EmployeePage from './pages/EmployeePage';
import Enroll from './pages/EnrollPage';
import Attendance from './pages/AttendancePage';
import Campaigns from './pages/AdminCampaignPage';
import Performance from './pages/Performance1';
import SingleLead from './pages/SingleLead';
import SolarLead from './pages/SolarLead';
import "./global.css";
import Emplogin from './pages/emp/emp-login';
import Empdash from './pages/emp/EmployeeDashboard'
import Chat from './pages/ChatVishnu'
import Empleave from './pages/emp/Leaves'
import Emplead from './pages/emp/LeadCapturePage'
import EmpPerformance from './pages/emp/PerformancePage'
import CreateLead from './pages/emp/CreateLead';
import Reqleave from './pages/emp/Empleavereq'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/AdminDashboard"
          element={
            <>
              <AdminDashboard />
            </>
          }
        />
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/LeavesAppr"
          element={
            <>
              <LeavesAppr />
            </>
          }
        />
        <Route
          path="/ViewLeaveByAdmin"
          element={
            <>
              <ViewLeaveByAdmin />
            </>
          }
        />

        <Route
          path="/SingleLead"
          element={
            <>
              <SingleLead />
            </>
          }
        />

      
        <Route
          path="/SolarLead"
          element={
            <>
              <SolarLead />
            </>
          }
        />

        <Route
        path="/AdminLeadPage"
        element={
          <>
          <AdminLeadPage />
          </>
        }
        />
        <Route
        path="/camp1"
        element={
          <Campaign1 />
        }
        />
        <Route
        path="/camp2"
        element={
          <Campaign2 />
        }
        />
        <Route
        path="/Campform"
        element={
          <Campform />
        }
          />
          <Route
        path="/EmployeePage"
        element={
          <EmployeePage />
        }
          />
          <Route
        path="/Enroll"
        element={
          <Enroll />
        }
          />
          <Route
          path="/Attendance"
          element={
            <Attendance />
          }
          />
          <Route
          path="/Campaigns"
          element={
            <Campaigns />
          }
          />
          <Route
          path="/Performance"
          element={
            <Performance />
          }
          />

          <Route
          path="/Emplogin"
          element={
            <Emplogin />
          }
          />
          <Route
          path="/Empdash"
          element={
            <Empdash />
          }
          />

          <Route
          path="/Chat"
          element={
            <Chat />
          }
          />

          <Route
          path="/Empleave"

          element={
            <Empleave />
          }
          />

          <Route
          path="/Emplead"

          element={
            <Emplead />
          }
          />

          <Route
          path="/EmpPerformance"

          element={
            <EmpPerformance />
          }
          />

          <Route
          path="/CreateLead"

          element={
            <CreateLead />
          }
          />

          <Route
          path="/Reqleave"

          element={
            <Reqleave />
          }
          />

      </Routes>
    </BrowserRouter>
  );
}