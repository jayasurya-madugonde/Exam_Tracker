import "./upsc.css";
function Upsc() {
  return (
    <>
      <br />
      <h3>UPSC CSE (Civil Service Examinations)</h3>
      <p>1.Eligibility Criteria</p>
      <table cellPadding={10} cellSpacing={5}>
        <tr>
          <th>Criteria</th>
          <th>Details</th>
        </tr>
        <tr>
          <th>Nationality</th>
          <td>
            Indian Citizen(For IAS &amp; IPS),others for IFS &amp; Group B
          </td>
        </tr>
        <tr>
          <th>Age Limit</th>
          <td>
            21-32 years (General) <br /> OBC:35 years
            <br />
            SC/ST:37 years{" "}
          </td>
        </tr>
        <tr>
          <th>Educational Qualification</th>
          <td>
            Bachelor's degree in any discipline from a recognized university
          </td>
        </tr>
        <tr>
          <th>Number Of Attempts</th>
          <td>
            General:6 &nbsp;&nbsp; OBC:9 &nbsp;&nbsp; SC/ST:Unlimited(till age
            limit)
          </td>
        </tr>
      </table>
      <br />
      <br />
      <p>2.Exam Pattern</p>
      <p>The UPSC CSE is conducted in three stages:</p>
      <br />
      <table cellPadding={10} cellSpacing={5}>
        <tr>
          <th>Stage</th>
          <th>Exam Type</th>
          <th>Subjects &amp; Marks</th>
          <th>Duration</th>
        </tr>
        <tr>
          <th>Preliminary Exam</th>
          <td>Objective (MCQ)</td>
          <td>
            1.General Studies (GS)-200 marks
            <br />
            2.CSAT(Aptitude)-200 marks(Qualifying)
          </td>
          <td>2 hours each</td>
        </tr>
        <tr>
          <th>Mains Exam</th>
          <td>Descriptive (Written)</td>
          <td>9 papers(250 marks each)(2 Qualifying + 7 Merit based)</td>
          <td>3 hours per paper</td>
        </tr>
        <tr>
          <th>Interview (Personality Test)</th>
          <td>Oral</td>
          <td>275 marks</td>
          <td>Varies</td>
        </tr>
      </table>
      <br />
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Total Marks:</b>
        2025 (Mains + Interview)
      </p>
      <br />
      <br />
      <p>3.Syllabus</p>
      <br />
      <ol type="I" className="list">
        <li>
          Prelims Syllabus
          <p>The prelims exam has two papers:</p>
          <p>
            <b>Paper 1:General Studies(GS)-200 Marks</b>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <b>History-</b>&nbsp;Ancient,Medieval,Modern India and Indian
              National Movement
            </li>
            <li>
              <b>Geography - </b>&nbsp;Physical,Social,Economic Geography of
              India and world
            </li>
            <li>
              <b>Polity -</b>&nbsp;Indian Constitution,Governance,Political
              System
            </li>

            <li>
              <b>Economy -</b>&nbsp;Economic Development,Poverty,Budget,Banking
            </li>

            <li>
              <b>Environment - </b>&nbsp;Biodiversity,climate change,Ecology
            </li>

            <li>
              <b>Science &amp; Tech -</b>&nbsp;General
              Science,space,Biotechnology
            </li>

            <li>
              <b>Current Affairs- </b>National &amp; International Events
            </li>
          </ul>
          <p>
            <b>Paper 2:CSAT (Aptitude) - 200 Marks (Qualifying 33% needed)</b>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li>Comprehension</li>

            <li>Logical Reasoning &amp; Analytical Ability</li>

            <li>Basic Numeracy (Class 10th level)</li>

            <li>Data Interpretation</li>

            <li>Decision Making &amp; Problem Solving</li>
          </ul>
        </li>
        <li>
          <p>Mains Syllabus</p>
          <p>
            The mains exam consists of 9 papers (2 qualifying + 7 merit-based)
          </p>
          <ol type="A">
            <li>
              <b>Qualifying Papers</b>
            </li>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <b>Paper A -</b>&nbsp;Indian Language (300 marks) (Anyone form
                UPSC's list)
              </li>
              <li>
                <b>Paper B -</b>&nbsp;English (300 marks)
              </li>
            </ul>
            <li>
              <b>Merit-Based Papers</b>
            </li>
            <table cellPadding={10} cellSpacing={5}>
              <tr>
                <th>Paper</th>
                <th>subject</th>
                <th>Syllabus Highlights</th>
                <th>Marks</th>
              </tr>
              <tr>
                <th>Paper I</th>
                <td>Essay</td>
                <td>
                  Essay writing on national,internationaland philosophical
                  topics
                </td>
                <td>250</td>
              </tr>
              <tr>
                <th>Paper II</th>
                <td>General Studies 1</td>
                <td>History,Indian heritage ,Society,Geography</td>
                <td>250</td>
              </tr>
              <tr>
                <th>Paper III</th>
                <td>General Studies 2</td>
                <td>
                  Governance,Polity,Constitution,Social,Justice,International
                  relations
                </td>
                <td>250</td>
              </tr>
              <tr>
                <th>Paper IV</th>
                <td>General Studies 3</td>
                <td>
                  Economy,science &amp; Environment,Security,Disaster Management
                </td>
                <td>250</td>
              </tr>
              <tr>
                <th>Paper V</th>
                <td>General Studies</td>
                <td>Ethics,Integrity and Apitude</td>
                <td>250</td>
              </tr>
              <tr>
                <th>Paper VI</th>
                <td>Optional Subject - Paper 1</td>
                <td>Subject chosen by candidate</td>
                <td>250</td>
              </tr>
              <tr>
                <th>Paper VII</th>
                <td>Optional Subject -Paper 2</td>
                <td>Continuation of optional subject</td>
                <td>250</td>
              </tr>
            </table>
          </ol>
        </li>
        <li>
          <p>
            <b>Personality Test (Interview) - 275 Marks</b>
          </p>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              Questions on general knowledge,personality and analytical ability
              <br />
              <p>
                <b>Total Marks Calculation:</b>
              </p>
            </li>
            <p>Mains (1750 Marks) + Interview (275 Marks)=2025 Marks</p>
          </ul>
        </li>
      </ol>
      <br />
      <p>4.Application Date</p>
      <br />
      <p>5.Hall Tickets</p>
      <br />
      <h3>IFOS(Indian Forest Service)</h3>
      <p>1.Eligibility Criteria</p>
      <table cellSpacing={5} cellPadding={10} style={{ width: "100px" }}>
        <tr>
          <th>Criteria</th>
          <th>Details</th>
        </tr>
        <tr>
          <th>Nationality</th>
          <td>Indian Citizen</td>
        </tr>
        <tr>
          <th>Age Limit</th>
          <td>
            General:21-32 years
            <br />
            OBC:21-35 years
            <br />
            SC/ST:21-37 years
            <br />
            PWD:21-42 years
          </td>
        </tr>
        <tr>
          <th>Educational Qualification</th>
          <td>
            Bachelor's degree in
            Botany,Zoology,Chemistry,Physics,Mathematics,Veterinary
            Science,Agriculture,Forestry,Engineering or any related field
          </td>
        </tr>
        <tr>
          <th>Number of Attempts</th>
          <td>General:6 &nbsp;OBC:9&nbsp;SC/ST:Unlimited(till age limit)</td>
        </tr>
      </table>
      <br />
      <p>2.Exam Pattern</p>
      <table cellSpacing={5} cellPadding={10}>
        <tr>
          <th>Stage</th>
          <th>Exam Type</th>
          <th>Subjects</th>
          <th>Marks</th>
          <th>Duration</th>
        </tr>
        <tr>
          <th>Prelims</th>
          <td>Objective (MCQs)</td>
          <td>
            1.General Studies-200 marks
            <br />
            2.CSAT(Aptitude)-200 marks(Qualifying)
          </td>
          <td>400</td>
          <td>2 hours each</td>
        </tr>
        <tr>
          <th>Mains</th>
          <td>Descriptive (Written)</td>
          <td>
            1.General English-300 marks
            <br />
            2.General Knowledge-300 marks
            <br />
            3.Optional Subject 1(Paper I)-200 marks
            <br />
            4.Optional Subject 1(Paper II)-200 marks
            <br />
            5.Optional Subject 2(Paper I)-200 marks
            <br />
            6.Optional Subject 2(Paper II)-200 marks
          </td>
          <td>1400</td>
          <td>3 hours each</td>
        </tr>
        <tr>
          <th>Interview</th>
          <td>Oral Test</td>
          <td>Personality Test</td>
          <td>300</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Total Marks (Mains+Interview)</th>
          <td>-</td>
          <td>-</td>
          <td>1700</td>
          <td>-</td>
        </tr>
      </table>
      <br />
      <p>3.Syllabus</p>
      <ol type="I">
        <li>Prelims Syllabus</li>
        <br />
        <table cellSpacing={5} cellPadding={10}>
          <tr>
            <th>Paper</th>
            <th>Subjects</th>
            <th>Marks</th>
          </tr>
          <tr>
            <th>Paper 1</th>
            <td>
              General
              Studies:History,Geography,Polity,Economy,Environment,Science &amp;
              Tech,Current Affairs
            </td>
            <td>200</td>
          </tr>
          <tr>
            <th>Paper 2</th>
            <td>
              CSAT:Logical Reasoning,Data Interpretation,Basic
              Numeracy,Comprehension(Qualifying-33% required)
            </td>
            <td>200</td>
          </tr>
        </table>
        <br />
        <li>Mains Syllabus</li>
        <br />
        <table cellSpacing={5} cellPadding={10}>
          <tr>
            <th>Paper</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
          <tr>
            <th>Paper 1</th>
            <td>General English-Essay,Comprehension,Grammar</td>
            <td>300</td>
          </tr>
          <tr>
            <th>Paper 2</th>
            <td>
              General Knowledge-Current
              affairs,Polity,Geography,Economy,Environment
            </td>
            <td>300</td>
          </tr>
          <tr>
            <th>Paper 3</th>
            <td>Optional Subject 1-Paper I</td>
            <td>200</td>
          </tr>
          <tr>
            <th>Paper 4</th>
            <td>Optional Subject 1-Paper II</td>
            <td>200</td>
          </tr>
          <tr>
            <th>Paper 5</th>
            <td>Optional Subject 2-Paper I</td>
            <td>200</td>
          </tr>
          <tr>
            <th>Paper 6</th>
            <td>Optional Subject 2-Paper II</td>
            <td>200</td>
          </tr>
        </table>
        <br />
        <li>Personality Test(Interview)-300 Marks</li>
        <br />
        <ul style={{ listStyleType: "disc" }}>
          <li>
            Evaluates mental alertness,logical reasoning,environmental awareness
            and leadership qualities
          </li>
        </ul>
      </ol>
      <p>4.Application Date</p>
      <br />
      <p>5.Hall Tickets</p>
      <br /> <br />
      <h3>
        IES (Indian Engineering Service)/ESE (Engineering Services Examination)
      </h3>
      <p>1.Eligibility Criteria</p>
      <table cellPadding={10} cellSpacing={5}>
        <tr>
          <th>Criteria</th>
          <th>Details</th>
        </tr>
        <tr>
          <th>Nationality</th>
          <td>Indian Citizen</td>
        </tr>
        <tr>
          <th>Age Limit</th>
          <td>
            General:21-30 years <br />
            OBC:21-33 years
            <br />
            SC/ST:21-35 years <br />
            PwD:21-40 years
          </td>
        </tr>
        <tr>
          <th>Educational Qualification</th>
          <td>
            Bachelor's degree in Engineering(B.E./B.Tech)from a recognized
            university
          </td>
        </tr>
        <tr>
          <th>Number Of Attempts</th>
          <td>No limit(within age criteria)</td>
        </tr>
      </table>
      <br />
      <br />
      <p>2.Exam Pattern</p>
      <p>The ESE/IES is conducted in three stages:</p>
      <table cellPadding={10} cellSpacing={5}>
        <tr>
          <th>Stage</th>
          <th>Exam Type</th>
          <th>Subjects</th>
          <th>Marks</th>
          <th>Duration</th>
        </tr>
        <tr>
          <th>Prelium</th>
          <td>Objective (MCQs)</td>
          <td>
            1.General Studies &amp; Engineering Aptitude-200 marks
            <br />
            2.Engineering Discipline-300 marks
          </td>
          <td>500</td>
          <td>2hours &amp; 3hours</td>
        </tr>
        <tr>
          <th>Mains</th>
          <td>Descriptive(Written)</td>
          <td>
            1.Engineering PaperI-300 marks
            <br />
            2.Engineering PaperII-300 marks
          </td>
          <td>600</td>
          <td>3hours each</td>
        </tr>
        <tr>
          <th>Interview</th>
          <td>Personality Test</td>
          <td>Technical &amp; General Knowledge</td>
          <td>200</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Total Marks(Mains+Interview)</th>
          <td>-</td>
          <td>-</td>
          <td>1300</td>
          <td>-</td>
        </tr>
      </table>
      <br />
      <br />
      <p>3.Syllabus</p>
      <ol type="I">
        <li>Prelims Syllabus</li>
        <br />
        <table cellPadding={10} cellSpacing={5}>
          <tr>
            <th>Paper</th>
            <th>Subjects</th>
            <th>Marks</th>
            <th>Duration</th>
          </tr>
          <tr>
            <th>Paper1</th>
            <td>
              General Studies &amp;Engineering Aptitude-Current
              Affairs,Enginnering Aptitude,Ethics,Project
              Management,ICT,Environment
            </td>
            <td>200</td>
            <td>2hours</td>
          </tr>
          <tr>
            <th>Paper2</th>
            <td>
              Engineering Discpline(Civil,Mechanical,Electrical,or Electronics
              &amp; Telecommunication)
            </td>
            <td>300</td>
            <td>3hours</td>
          </tr>
        </table>
        <br />
        <li>Mains Syllabus</li>
        <br />
        <table cellPadding={10} cellSpacing={5}>
          <tr>
            <th>Paper</th>
            <th>Subjects</th>
            <th>Marks</th>
            <th>Duration</th>
          </tr>
          <tr>
            <th>Paper1</th>
            <td>Engineering Discpline-Technical Questions</td>
            <td>300</td>
            <td>3hours</td>
          </tr>
          <tr>
            <th>Paper2</th>
            <td>Engineering Discpline-Advanced Technical Questions</td>
            <td>300</td>
            <td>3hours</td>
          </tr>
        </table>
        <br />
      </ol>
      <br />
      <p>4.Application Date</p>
      <br />
      <p>5.Hall Tickets</p>
      <br />
    </>
  );
}
export default Upsc;