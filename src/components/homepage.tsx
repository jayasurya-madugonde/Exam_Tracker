import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import upsc from '../assets/upsc.png';
import cat from '../assets/cat.png';
import mpsc from '../assets/mpsc.png';
import foundation from '../assets/foundation.png';
import iit from '../assets/iit.png';
import csir from '../assets/csir.png';
import certification from '../assets/certification.png';
import certiifcations from "../assets/certiifcations.png";
import mp from '../assets/mp.png';
import ca from '../assets/ca.png';
import cds from '../assets/cds.png';
import gate from '../assets/gate.png';
import jammu from '../assets/jammu.png';
import ssc from '../assets/ssc.png';
import sssc from '../assets/sssc.png';
import tnpsc from '../assets/tnpsc.png';
import bank from '../assets/bank.png';
import csexecutive  from '../assets/csexecutive.png';
import clat from '../assets/clat.png';
import business from '../assets/business.png';
function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg  nav-fill">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </Link>
          <ul className="nav navbar-expand-lg  nav-tabs ">
            <li className="nav-item me-5">
              <Link className="nav-link" to="/previousyearpaper">
                Previous Year Papers
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/resources">
                Resources
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/applypage">
                Apply Here
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/resultpage">
                Results
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/signin">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <h2 className="exam-header">
          <br />
          "From Forms to Final Results – Track Every Exam, All in One Place!"
        </h2>
        <div className="combine ">
          <div className="scrollable-div ">
            <h3 className="text-center text-sky-400 text-xl font-bold">
              Government Exams
            </h3>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <p className="options">
                  <a  href="#upsc" className="menu-item">UPSC</a>
                </p>
              </li>
              <li>
                <p  className="options">
                  <a href="#jee" className="menu-item">IIT,JEE,NEET UG and Foundation</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#gate" className="menu-item">Gate,ESE and IIT-JAM</a>
                </p>
                <p className="options">
                  <a href="#ca" className="menu-item">CA,CS and CMA</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#judiciary" className="menu-item">Judiciary Exams</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#net" className="menu-item">NET Exams</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#cat" className="menu-item">CAT &amp; Other MBA Entrance Tests</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#bank" className="menu-item">Bank,SSC and Railway Exams</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#defence" className="menu-item">Defence Exams</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#law" className="menu-item">CLAT &amp; Other Law Entrance Exams</a>
                </p>
              </li>
            </ul>
            <h3 className="text-center text-sky-400 text-xl font-bold">
              Private Exams
            </h3>   
            <ul style={{ listStyleType: "none" }}>
              <li>
                <p className="options">
                  <a href="#eng" className="menu-item">Engineering Entrance Exams</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#manage" className="menu-item">Management &amp; Business</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#abroad" className="menu-item">Exams for Study Abroad Studies</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#health" className="menu-item">
                    Private Healthcare &amp; Paramedical Exams
                  </a>
                </p >
              </li>
              <li>
                <p className="options" >
                  <a href="#fashion" className="menu-item">Fashion,Design &amp;Creative Arts Exams</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#hotel" className="menu-item">Hotel Management</a>
                </p>
              </li>
              <li>
                <p className="options">
                  <a href="#journal" className="menu-item">
                    Journalism &amp; Mass Communication Exams
                  </a>
                </p>
              </li>
              <br />
            </ul>
            <br />
            <br />
            <br />
          </div>
          <div className="right content-overflow">
            <p className="margin" id="upsc">
              <p className="link" >&nbsp;&nbsp;&nbsp;&nbsp;UPSC</p>
            </p>
            <div className="right-divs">
              <Link to="/upsc" className="link">
                <div className="div">
                <img src={upsc} alt="UPSC"/>
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>UPSC CSE - Optional</p>
                </div>
              </Link>
              <Link to="/upsc" className="link ">
                <div className="div">
                  <img src={gate} alt="IFOS"/>
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>IFOS</p>
              </div>
              </Link>
              <Link to="/upsc" className="link">
                <div className="div">
                  <img src={gate} alt="ese/ies"/>
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>ESE/IES</p>
                </div>
              </Link>
            </div>
            <br />
            <br />
            <p className="margin" id="jee">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;IIT,JEE,NEET UG and Foundation
              </p>
            </p>
            <div className="right-divs">
              <Link to="/iit" className="link">
                <div className="div">
                  <img src={iit} alt="iit jee" />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>IIT JEE</p>
                </div>
              </Link>
              <Link to="/iit" className="link">
                <div className="div">
                  <img src={gate} alt="neet"/>
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>NEET UG</p>
                </div>
              </Link>
              <Link to="/iit" className="link">
                <div className="div">
                  <img src={gate}  alt="srg"/>
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>SRG</p>
                </div>
              </Link>
            </div>
            <p className="margin" id="gate">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;GATE,ESE and IIT-JAM
              </p>
            </p>
            <div className="right-divs">
            <Link to="/gate" className="link">
                <div className="div">
                  <img src={gate} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Gate - CSIT,DSAI & Interview</p>
                </div>
              </Link>
              <Link to="/gate" className="link">
                <div className="div">
                  <img src={gate} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>GATE & ESE - ME & CH</p>
                </div>
              </Link>
              <Link to="/gate" className="link">
                  <div className="div">
                    <img src={gate} />
                    <br />
                    <br />
                    <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>GATE & ESE -Civil</p>
                  </div>
              </Link>
            </div>
            <div className="right-divs">
            <Link to="/gate" className="link">
                <div className="div">
                  <img src={gate} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Gate & ESE -EE, EC</p>
                </div>
              </Link>
              <Link to="/gate" className="link">
                <div className="div">
                  <img src={gate} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>IIT - JAM</p>
                </div>
              </Link>
            </div>
            <br />
            <br />
            <p className="margin" id="ca">
              <p className="link">&nbsp;&nbsp;&nbsp;&nbsp;CA, CS, and CMA</p>
            </p>
            <div className="right-divs">
              <Link to="/ca" className="link">
                <div className="div">
                  <img src={ca} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CA Final Group 1</p>
                </div>
              </Link>
              <Link to="/ca" className="link">
                <div className="div">
                  <img src={ca} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CA Final Group 2</p>
                </div>
              </Link>
              <Link to="/ca" className="link">
                <div className="div">
                  <img src={ca} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CA Intermediate</p>
                </div>
              </Link>
            </div>
            <div className="right-divs">
            <Link to="/ca" className="link">
              <div className="div">
                <img src={sssc} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CSEET</p>
              </div>
            </Link>
            </div>
            <br />
            <br />
            <p className="margin" id="judiciary">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;Judiciary Exams
              </p>
            </p>
            <div className="right-divs">
              <Link to="/judiciary" className="link">
                <div className="div">
                  <img src={foundation} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Judiciary - PCS(J)</p>
                </div>
              </Link>
              <Link to="/judiciary" className="link">
                <div className="div">
                  <img src={foundation} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Judiciary HJS</p>
                </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="net">
              <p className="link">&nbsp;&nbsp;&nbsp;&nbsp;NET Exams</p>
            </p>
            <div className="right-divs">
              <Link to="/net" className="link">
                <div className="div">
                  <img src={csir}/>
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CSIR-UGC NET</p>
                </div>
              </Link>
              <Link to="/net" className="link">
                <div className="div">
                  <img src={upsc} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>NTA-UGC-NET & SET</p>
                </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="cat">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;CAT & Other MBA Entrance Tests
              </p>
            </p>
            <div className="right-divs">
              <Link to="/cat" className="link">
                <div className="div">
                  <img src={cat}/>
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}} >CAT & Other MBA Entrance Tests</p>
                </div>
              </Link>
              <Link to="/cat" className="link">
                <div className="div">
                  <img src={ssc} />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>GD, PI & WAT for CAT & OMETs</p>
                </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="bank">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;Bank, SSC & Railway Exams
              </p>
            </p>
            <div className="right-divs">
              <Link to="/bank" className="link">
                <div className="div">
                  <img src={bank} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Bank Exams</p>
                </div>
              </Link>
              <Link to="/bank" className="link">
                <div className="div">
                  <img src={ssc}/>
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CAIIB Exams</p>
                </div>
              </Link>
              <Link to="/bank" className="link">
                <div className="div">
                  <img src={ssc} />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>SSC Exams/Railway Exams</p>
                </div>
              </Link>
            </div>
            <div className="right-divs">
              <Link to="/bank" className="link">
                <div className="div">
                  <img src={cds} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>JAIIB Exams</p>
                </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="defence">
              <p className="link"> &nbsp;&nbsp;&nbsp;&nbsp;Defence Exams</p>
            </p>
            <div className="right-divs">
              <Link to="/defence" className="link">
                <div className="div">
                  <img src={cds} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CDS</p>
                </div>
              </Link>
              <Link to="/defence" className="link">
                <div className="div">
                  <img src={mpsc} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>NDA</p>
                </div>
              </Link>
              <Link to="/defence" className="link">
                <div className="div">
                  <img src={tnpsc} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Agnipath exams</p>
                </div>
              </Link>
            </div>
            <div className="right-divs">
              <Link to="/defence" className="link">
                <div className="div">
                  <img src={csexecutive} />
                  <br />
                  <br />
                  <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CAPF</p>
                </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="law">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;CLAT & Other 5-year LLB Exams
              </p>
            </p>
            <div className="right-divs">
            <Link to="/clat" className="link">
              <div className="div">
                <img src={clat} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CLAT </p>
              </div>
              </Link>
              <Link to="/clat" className="link">
              <div className="div">
                <img src={clat} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>AILET</p>
              </div>
              </Link>
              <Link to="/clat" className="link">
              <div className="div">
                <img src={clat} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>LSAT</p>
              </div>
              </Link>
            </div>
            <div className="right-divs">
            <Link to="/clat" className="link">
              <div className="div">
                <img src={mpsc}/>
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>MH CET</p>
              </div>
              </Link>
              <Link to="/clat" className="link">
              <div className="div">
                <img src={sssc} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>SLAT</p>
              </div>
              </Link>
            </div>
            <br />
            <br />
            <p className="margin" id="eng">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;Engineering Entrance Exams
              </p>
            </p>
            <div className="right-divs">
            <Link to="/engineer" className="link">
              <div className="div">
                <img src={business} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>BITSAT</p>
              </div>
              </Link>
              <Link to="/engineer" className="link">
              <div className="div">
                <img src={upsc} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>VITEEE</p>
              </div>
              </Link>
              <Link to="/engineer" className="link">
              <div className="div">
                <img src={upsc} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>UPESEAT</p>
              </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="manage">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;Management &amp; Business
              </p>
            </p>
            <div className="right-divs">
            <Link to="/manage" className="link">
              <div className="div">
                <img src={cat} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CAT</p>
              </div>
              </Link>
              <Link to="/manage" className="link">
              <div className="div">
                <img src={certiifcations} />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>3-year LLB Entrance Exams</p>
              </div>
              </Link>
              <Link to="/manage" className="link">
              <div className="div">
                <img src={clat} />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>CLAT PG &amp; Other Entrance Exams</p>
              </div>
              </Link>
            </div>
            <div className="right-divs">
            <Link to="/manage" className="link">
              <div className="div">
                <img src={ca} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>NMAT</p>
              </div>
              </Link>
              <Link to="/manage" className="link">
              <div className="div">
                <img src={mp} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>XAT</p>
              </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="abroad">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;Exams for Abroad Studies
              </p>
            </p>
            <div className="right-divs">
            <Link to="/abroad" className="link">
              <div className="div">
                <img src={gate} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>GMAT</p>
              </div>
              </Link>
              <Link to="/abroad" className="link">
              <div className="div">
                <img src={iit} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>GRE</p>
              </div>
              </Link>
              <Link to="/abroad" className="link">
              <div className="div">
                <img src={gate} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>SAT</p>
              </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="health">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;Private Healthcare and Paramedical Exams
              </p>
            </p>
            <div className="right-divs">
            <Link to="/health" className="link">
              <div className="div">
                <img src={business} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Apollo Medskills Exams</p>
              </div>
              </Link>
              <Link to="/health" className="link">
              <div className="div">
                <img src={cat} />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>AIIMS Paramedical Exams</p>
              </div>
              </Link>
              <Link to="/health" className="link">
              <div className="div">
                <img src={cat} />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Max Healthcare skill Development Exams</p>
              </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="fashion">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;Fashion,Design &amp; Creative Arts Exams
              </p>
            </p>
            <div className="right-divs">
            <Link to="/fashion" className="link">
              <div className="div">
                <img src={cat} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>NID-DAT</p>
              </div>
              </Link>
              <Link to="/fashion" className="link">
              <div className="div">
                <img src={certification} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>MITID DAT</p>
              </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="hotel">
              <p className="link">&nbsp;&nbsp;&nbsp;&nbsp;Hotel Management</p>
            </p>
            <div className="right-divs">
            <Link to="/hotel" className="link">
              <div className="div">
                <img src={ca} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Oberoi STEP</p>
              </div>
              </Link>
              <Link to="/hotel" className="link">
              <div className="div">
                <img src={upsc} />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>IHM Aurangabad Admission Test</p>
              </div>
              </Link>
            </div>
            <br />
            <p className="margin" id="journal">
              <p className="link">
                &nbsp;&nbsp;&nbsp;&nbsp;Journalism &amp;Mass Communication Exams
              </p>
            </p>
            <div className="right-divs">
            <Link to="/journal" className="link">
              <div className="div">
                <img src={iit} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>IIMC Entrance Exam</p>
              </div>
              </Link>
              <Link to="/journal" className="link">
              <div className="div">
                <img src={jammu} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>ACJ Entrance Exam</p>
              </div>
              </Link>
              <Link to="/journal" className="link">
              <div className="div">
                <img src={sssc} />
                <br />
                <br />
                <p style={{ color: "black" , fontFamily: " Tahoma, Geneva, Verdana, sans-serif",}}>Symbiosis SET</p>
              </div>
              </Link>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;