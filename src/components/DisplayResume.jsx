function DisplayResume({genInfo, workHistList, educationHist, certs}) {
    return (
        <div id="resumeComplete">
            <div className="GeneralInfo">
            <h1>{genInfo.firstName} {genInfo.lastName}</h1>
            <h2>{genInfo.email}</h2>
            <h2>{genInfo.phone}</h2>
            </div>
            <div className="workHistory">
            {workHistList.map(workHist => {
                return (
                    <div key={workHist}>
                        <h2>{workHist.companyName}</h2>
                        <h3>{workHist.position} {workHist.date.start} {workHist.date.end}</h3>
                        <h4>{workHist.responsibilities}</h4>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export { DisplayResume };