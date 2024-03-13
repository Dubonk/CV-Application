function DisplayResume({genInfo, workHistList, educationHist, certs}) {
    return (
        <div id="resumeComplete">
            <div className="GeneralInfo">
            <h1>{genInfo.firstName} {genInfo.lastName}</h1>
            <h2>{genInfo.email}</h2>
            <h2>{genInfo.phone}</h2>
            </div>
            <div className="workHistory">
                <h1>Work History</h1>
            {workHistList.map(workHist => {
                return (
                    <div id={workHist.companyName} key={workHist.companyName}>
                        <h2>{workHist.companyName}</h2>
                        <h3>{workHist.position} {workHist.date.start} {workHist.date.end}</h3>
                        <h4>{workHist.responsibilities}</h4>
                    </div>
                )
            })}
            </div>
            <div className="educationSection">
                <h1>Education</h1>
                <h2>{educationHist.schoolName}</h2>
                <h3>{educationHist.study} {educationHist.date}</h3>
            </div>
        </div>
    )
}

export { DisplayResume };