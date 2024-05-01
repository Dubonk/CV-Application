
function EducationHistory({educationHist, setEducationHist}) {

    const handleInput = (event, field) => {
        setEducationHist({
            ...educationHist,
            [field]: event.target.value
        });
    } 

    return (
        <>
        <h2>Education</h2>
        <div className="education">
            <input type="text" value={educationHist.schoolName} onChange={(event) => handleInput(event, "schoolName")} placeholder="School"/>
            <input type="text" value={educationHist.study} onChange={(event) => handleInput(event, "study")} placeholder="Study"/>
            <input type="month" className="datePicker" value={educationHist.date} onChange={(event) => handleInput(event, "date")}/>
        </div>
        </>
    )
}

export { EducationHistory }