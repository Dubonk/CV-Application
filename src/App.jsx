import { useState } from 'react'
import { DisplayResume } from "./components/DisplayResume"
import { EducationHistory } from "./components/Education"
import { GeneralInfo } from "./components/GeneralInfo"
import { SkillsCerts } from "./components/SkillsAndCerts"
import { WorkHistory } from "./components/WorkHistory"
import './styles/app.css'


function App() {

  const [genInfo, setGenInfo] = useState({firstName: "", lastName: "", email: "", phone: ""})
  const [workHistList, setWorkHistList] = useState([
    { companyName: "", position: "", responsibilities: "", date: { start: "", end: "" } }
  ]);
  const [educationHist, setEducationHist] = useState({schoolName: "", study: "", date: ""});
  const [certs, setCerts] = useState("");

  return (
    <>
    <h1 className='pageTitle'>Resume Builder</h1>
    <div className='container'>
    <div className="resumeForm">
      <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo}/>
      <WorkHistory workHistList={workHistList} setWorkHistList={setWorkHistList} />
      <EducationHistory educationHist={educationHist} setEducationHist={setEducationHist}/>
      <SkillsCerts certs={certs} setSkillsCerts={setCerts}/>
    </div>
    <DisplayResume
      genInfo={genInfo}
      workHistList={workHistList}
      educationHist={educationHist}
      certs={certs}
    />
    </div>
    </>
  )
}

export default App
