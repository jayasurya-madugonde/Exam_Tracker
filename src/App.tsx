import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/homepage";
import Signin from "./components/signin";
import "./App.css";
import "./components/signin.css";
import Upsc from "./components/upsc";
import IIT from "./components/iit";
import Gate from "./components/gate";
import CA from "./components/ca";
import Judiciary from "./components/judiciary";
import Net from "./components/net";
import Defence from "./components/defence";
import Clat from "./components/clat";
import Cat from "./components/cat";
import Bank from "./components/bank";
import Engineering from "./components/engineer";
import Manage from "./components/manage";
import Abroad from "./components/abroad";
import Health from "./components/health";
import Fashion from "./components/fashion";
import Hotel from "./components/hotel";
import Journal from "./components/journal";
import NotificationsPage from "./components/notifications";
import ApplyPage from "./components/applypage";
import ResultsPage from "./components/resultpage";

// 🔥 Import InitFCM here
import InitFCM from "./components/InitFcm";
import PreviousYear from "./components/previousyearpaper";
import ResourceList from "./components/resources";
import StudyMaterialsList from "./components/previousyearpaper";

function App() {
  return (
    <>
      {/* 🔥 Run FCM init logic on app load */}
      <InitFCM />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/resources" element={<ResourceList/>}/>
          <Route path="/resultpage" element={<ResultsPage/>}/>
          <Route path="/previousyearpaper" element={<StudyMaterialsList />}/>
          <Route path="/applypage" element={<ApplyPage />}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/upsc" element={<Upsc />} />
          <Route path="/iit" element={<IIT />} />
          <Route path="/gate" element={<Gate />} />
          <Route path="/ca" element={<CA />} />
          <Route path="/judiciary" element={<Judiciary />} />
          <Route path="/net" element={<Net />} />
          <Route path="/defence" element={<Defence />} />
          <Route path="/clat" element={<Clat />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/engineer" element={<Engineering />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/abroad" element={<Abroad />} />
          <Route path="/health" element={<Health />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
