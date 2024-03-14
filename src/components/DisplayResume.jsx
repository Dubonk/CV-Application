import '../styles/resumeComplete.css'

function DisplayResume({genInfo, workHistList, educationHist, certs}) {
    const hasCerts = certs;
    const hasWork = workHistList;
    const hasEdu = educationHist;
    return (
        <div id="resumeComplete">
            <div className="GeneralInfo">
                <h1>{genInfo.firstName} {genInfo.lastName}</h1>
                <p>{genInfo.email}</p>
                <p>{genInfo.phone}</p>
            </div>
                {hasWork && workHistList.length > 0 ? 
                    <div className="workHistory">
                        <h2 className='sectionTitle'>Work History</h2>
                        {workHistList.map(workHist => {
                        return (
                        <div className='workInfo' id={workHist.companyName} key={workHist.companyName}>
                            <h3>{workHist.companyName}</h3>
                            <p className='positionAndDate'>{workHist.position} {workHist.date.start} {workHist.date.end}</p>
                            <p className='jobDuties'>{workHist.responsibilities}</p>
                        </div>
                        )
                        })}
                        </div> : <div></div>}
            <div>
                {hasEdu && educationHist.schoolName || educationHist.study || educationHist.date ?
                    <div className="educationSection">
                        <h2 className='sectionTitle'>Education</h2>
                        <p>{educationHist.schoolName}</p>
                        <p>{educationHist.study} {educationHist.date}</p>
            </div> : <div></div>}
            </div>
            <div>
                {hasCerts ?             
                    <div className="certsSection">
                    <h2 className='sectionTitle'>Skill and Certifications</h2>
                    <p>{certs}</p>
                    </div> : <div></div> } 
            </div>
        </div>
    )
}

export { DisplayResume };