import { useEffect, useState } from 'react'
import { DisplayResume } from "./components/DisplayResume"
import { EducationHistory } from "./components/Education"
import { GeneralInfo } from "./components/GeneralInfo"
import { SkillsCerts } from "./components/SkillsAndCerts"
import { WorkHistory } from "./components/WorkHistory"
import './styles/app.css'


function App() {

  const [genInfo, setGenInfo] = useState(() => {
    const localGenInfo = localStorage.getItem("GENINFO")
    if(localGenInfo === null) return [];
  
    return JSON.parse(localGenInfo)
  })

  const [workHistList, setWorkHistList] = useState(() => {
    const localWork = localStorage.getItem("WORK")
    if(localWork === null) return []

    return JSON.parse(localWork)
  }) 
  const [educationHist, setEducationHist] = useState(() => {
    const localEduInfo = localStorage.getItem("EDINFO")
    if(localEduInfo === null) return []; 
      
    return JSON.parse(localEduInfo)
  })

  const [certs, setCerts] = useState(() => {
    const localCerts = localStorage.getItem("CERTS")
    if(localCerts === null) return [];

    return JSON.parse(localCerts)
  });

  useEffect(() => {
    localStorage.setItem("GENINFO", JSON.stringify(genInfo))
  }, [genInfo])

  useEffect(() => {
    localStorage.setItem("WORK", JSON.stringify(workHistList))
  }, [workHistList])

  useEffect(() => {
    localStorage.setItem("EDINFO", JSON.stringify(educationHist))
  }, [educationHist])

  useEffect(() => {
    localStorage.setItem("CERTS", JSON.stringify(certs))
  }, [certs])

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
