//import { useState } from 'react'

import { EducationHistory } from "./components/Education"
import { GeneralInfo } from "./components/GeneralInfo"
import { SkillsCerts } from "./components/SkillsAndCerts"
import { WorkHistory } from "./components/WorkHistory"


function App() {

  return (
    <>
      <h1>Resume Builder</h1>
      <GeneralInfo />
      <WorkHistory />
      <EducationHistory />
      <SkillsCerts />
    </>
  )
}

export default App
